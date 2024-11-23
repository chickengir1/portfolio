import React from "react";
import { SECTIONS } from "../../utils/constans/constants";

type TimelineProps = {
  currentSection: string;
};

const Timeline: React.FC<TimelineProps> = ({ currentSection }) => {
  const filteredSection = SECTIONS.find(
    (section) => section.name === currentSection
  );

  if (!filteredSection) {
    return null;
  }

  return (
    <div className="h-full backdrop-blur-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        {filteredSection.content.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-[#ddd] p-4 rounded-lg shadow-md w-full h-full"
          >
            {item.question && (
              <h3 className="text-base sm:text-lg xl:text-lg font-semibold mb-2">
                {`Q ${item.question}`}
              </h3>
            )}
            {item.answer && (
              <div className="flex items-center justify-center flex-grow">
                <p className="text-sm sm:text-base xl:text-lg tracking-wide leading-relaxed text-gray-800">
                  {`A ${idx + 1}. ${item.answer}`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
