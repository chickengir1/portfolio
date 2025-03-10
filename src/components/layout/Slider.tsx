import { useRef } from "react";
import { SKILLS } from "../../utils/skillsConstans";

const Slider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const skillCarousel = Array.from({ length: 100 }).reduce<typeof SKILLS>(
    (acc) => acc.concat(SKILLS),
    []
  );

  return (
    <div className="text-gray-900 py-12">
      <div className="w-[120%] border-y-8 transform mx-auto p-5 overflow-hidden">
        <div ref={carouselRef} className="flex whitespace-nowrap animate-slide">
          {skillCarousel.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="flex-shrink-0 px-4">
              <h3
                className="px-4 min-w-20 text-center py-2 border-2 font-bold rounded-md text-nowrap"
                style={{ backgroundColor: skill.color }}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
