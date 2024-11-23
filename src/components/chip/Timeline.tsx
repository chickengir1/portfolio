import React from "react";
import { SECTIONS } from "../../utils/constans/constants";

type TimelineProps = {
  currentSection: string;
};

const Timeline: React.FC<TimelineProps> = ({ currentSection }) => {
  const filteredSections = SECTIONS.filter(
    (section) => section.name === currentSection
  );

  return (
    <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div className="flex space-x-8 min-h-fit">
        {filteredSections.map((section, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center px-4 md:px-8 lg:px-16"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.name}</h2>
            <div className="space-y-4">
              {section.content.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  {item.question && (
                    <h3 className="text-xl font-medium">{`Q. ${item.question}`}</h3>
                  )}
                  {item.answer && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
