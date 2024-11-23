import { useRef, useEffect, useState } from "react";

const useWaveAnimation = () => {
  const waveRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const animateWave = () => {
      if (waveRef.current) {
        const points = Math.max(50, Math.floor(width / 30)); // 반응형 점 개수
        const amplitude = Math.min(30, width / 50); // 파도의 높이
        const frequency = (2 * Math.PI) / points; // 파도의 빈도
        const speed = 0.02; // 파도 진행 속도

        const path = Array.from({ length: points + 1 }, (_, i) => {
          const x = (width / points) * i;
          const y = Math.sin(i * frequency + frame * speed) * amplitude + 160;
          return `${i === 0 ? "M" : "L"}${x},${y}`;
        });

        waveRef.current.setAttribute(
          "d",
          `${path.join(" ")} L${width},320 L0,320 Z`
        );
      }
      frame += 1;
      requestAnimationFrame(animateWave);
    };

    animateWave();

    return () => cancelAnimationFrame(animateWave);
  }, [width]);

  return { waveRef, width };
};

export default useWaveAnimation;
