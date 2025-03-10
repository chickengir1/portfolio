import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { useEffect, useRef, useMemo } from "react";

interface WordCloudProps {
  items: { text: string }[];
  fontUrl: string;
}

const useWordCloud = ({ items, fontUrl }: WordCloudProps) => {
  const sceneRef = useRef(new THREE.Scene());
  const groupRef = useRef(new THREE.Group());
  const fontLoader = useMemo(() => new FontLoader(), []);

  const radius = 2.5;

  useEffect(() => {
    const currentGroup = groupRef.current;

    fontLoader.load(fontUrl, (font) => {
      const phi = Math.PI * (3 - Math.sqrt(5)); // 골든 앵글

      items.forEach((item, index) => {
        const y = 1 - (index / (items.length - 1)) * 2; // y 값: 1에서 -1 사이
        const radiusAtY = Math.sqrt(1 - y * y); // 해당 y에서의 반지름

        const theta = phi * index; // 각도 계산

        // 텍스트 생성
        const textGeometry = new TextGeometry(item.text, {
          font: font,
          size: 0.25,
          height: 0.0025,
          curveSegments: 12,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x374151 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        // 텍스트 중심 계산
        textGeometry.computeBoundingBox();
        const boundingBox = textGeometry.boundingBox!;
        const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
        const centerY = (boundingBox.max.y + boundingBox.min.y) / 2;

        // 중심 보정
        textGeometry.translate(-centerX, -centerY, 0);

        // 버텍스 변형을 위한 변수
        const sphereRadius = radius; // 구의 반지름
        const vertex = new THREE.Vector3();
        const positionAttribute = textGeometry.attributes.position;

        // 각 버텍스를 구의 곡면에 맞게 변형
        for (let i = 0; i < positionAttribute.count; i++) {
          vertex.fromBufferAttribute(positionAttribute, i);

          const x = vertex.x;
          const y = vertex.y;

          // x^2 + y^2가 구의 반지름 제곱보다 작을 때만 계산
          const distanceSquared = x * x + y * y;

          // z 좌표 계산

          if (distanceSquared <= sphereRadius * sphereRadius) {
            const sphereCurvature = Math.sqrt(
              sphereRadius * sphereRadius - distanceSquared
            );

            const z = -(sphereRadius - sphereCurvature);
            vertex.z = z;
          }
          // 구의 범위를 벗어난 버텍스는 z를 0으로 설정
          else vertex.z = 0;

          positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }

        positionAttribute.needsUpdate = true;

        // 텍스트 위치 설정
        textMesh.position.set(
          radius * radiusAtY * Math.cos(theta),
          radius * y,
          radius * radiusAtY * Math.sin(theta)
        );

        // 텍스트가 구의 바깥쪽을 향하도록 회전 설정
        const lookAtPosition = textMesh.position.clone().multiplyScalar(2);
        textMesh.lookAt(lookAtPosition);
        currentGroup.add(textMesh);
      });
    });

    sceneRef.current.add(currentGroup);

    return () => {
      currentGroup.clear();
    };
  }, [items, fontUrl, fontLoader]);

  return { scene: sceneRef.current, group: groupRef.current, radius };
};

export default useWordCloud;
