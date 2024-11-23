import React, { useRef, useEffect, useState } from "react";

const Tide = () => {
  const waveRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth); // 창 너비 상태

  useEffect(() => {
    // 창 크기 변경 이벤트
    const handleResize = () => {
      setWidth(window.innerWidth); // 창 너비 업데이트
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // 이벤트 정리
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const animateWave = () => {
      if (waveRef.current) {
        const points = Math.max(50, Math.floor(width / 30)); // 반응형 점 개수
        const amplitude = Math.min(30, width / 50); // 파도의 높이
        const frequency = (2 * Math.PI) / points; // 파도의 빈도
        const speed = 0.02;

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

  return (
    <div className="relative overflow-hidden h-[320px] bg-[#ccc]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} 320`}
        className="absolute top-0 left-0 w-full h-full -scale-y-100"
      >
        <path
          fill="#333"
          fillOpacity="0.8"
          d={`M0,160 L${width},160 L${width},320 L0,320 Z`}
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} 200`}
        className="absolute top-0 left-0 w-full h-full -scale-y-100"
      >
        <path
          fill="#333"
          ref={waveRef}
          fillOpacity="1"
          d={`M0,192L48,176C96,160,192,128,288,106.7C384,85,480,75,576,101.3C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L${width},96L${width},0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z`}
        ></path>
      </svg>
    </div>
  );
};

export default Tide;
