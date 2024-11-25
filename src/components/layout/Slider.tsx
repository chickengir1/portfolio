import React, { useLayoutEffect, useRef } from "react";

const Slider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const techItems = [
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Jest", color: "#C21325" },
    { name: "Hook Form", color: "#EC5990" },
    { name: "React", color: "#61DAFB" },
    { name: "Vite", color: "#646CFF" },
    { name: "Redux", color: "#764ABC" },
    { name: "React Query", color: "#FF4154" },
    { name: "Styled Components", color: "#DB7093" },
    { name: "Error Handling", color: "#FF6F61" },
    { name: "MUI", color: "#007FFF" },
    { name: "TailwindCSS", color: "#38B2AC" },
  ];

  useLayoutEffect(() => {
    const speed = 1;
    let offset = 0;

    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / 2;
      offset = scrollWidth / 2;

      const animate = () => {
        if (carouselRef.current) {
          offset += speed;
          if (offset >= scrollWidth) {
            offset -= scrollWidth;
          }
          carouselRef.current.style.transform = `translateX(${-offset}px)`;
        }
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  const slider = [...techItems, ...techItems].map((tech, index) => {
    return (
      <div
        key={index}
        className="text-2xl font-bold flex items-center justify-center mx-2"
        style={{
          backgroundColor: tech.color,
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        {tech.name}
      </div>
    );
  });

  return (
    <div className="text-gray-900 py-12">
      <div className="w-[120%] border-y-8 transform mx-auto p-5">
        <div ref={carouselRef} className="flex whitespace-nowrap">
          {slider}
        </div>
      </div>
    </div>
  );
};

export default Slider;
