import React from "react";
import useWaveAnimation from "../../hooks/anime/useWaveAnimation";

const Tide = () => {
  const { waveRef, width } = useWaveAnimation();

  return (
    <div className="relative -z-50 overflow-hidden h-[320px]">
      <div className="h-full bg-[#ccc]"></div>
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
