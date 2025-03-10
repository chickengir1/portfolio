/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import useWordCloud from "../../hooks/anime/useWordCloud";

const wordCloudData = {
  items: [
    { text: "HTML" },
    { text: "CSS" },
    { text: "JavaScript" },
    { text: "TypeScript" },
    { text: "React" },
    { text: "Vite" },
    { text: "Redux" },
    { text: "React Query" },
    { text: "Styled Components" },
    { text: "React Error Boundary" },
    { text: "Material UI" },
    { text: "Tailwind" },
    { text: "Jest" },
    { text: "React Hook Form" },
  ],
  fontUrl:
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
};

const WordCloud = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const { scene, group, radius } = useWordCloud(wordCloudData);

  function updateSizes() {
    if (!canvasRef.current || !rendererRef.current || !cameraRef.current)
      return;

    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    rendererRef.current.setSize(width, height);
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();

    if (width <= 500) cameraRef.current.position.z = radius * 4.5;
    else cameraRef.current.position.z = radius * 3;
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearColor(0xcccccc);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);

    rendererRef.current = renderer;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const tiltAngle = THREE.MathUtils.degToRad(23);
    const sin = Math.sin(tiltAngle);
    const cos = Math.cos(tiltAngle);
    const rotationAxis = new THREE.Vector3(sin, cos, 0).normalize();

    updateSizes();

    window.addEventListener("resize", updateSizes);

    function animate() {
      requestAnimationFrame(animate);

      const angleIncrement = 0.001;
      group.rotateOnAxis(rotationAxis, angleIncrement);

      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(scene, cameraRef.current);
      }
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateSizes);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [scene, radius, group, updateSizes]);

  return <div ref={canvasRef} className="w-full sm:w-3/4 h-[80vh]" />;
};

export default WordCloud;
