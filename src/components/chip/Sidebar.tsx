import React from "react";
import { SECTIONS } from "../../utils/constans/constants";

type SidebarProps = {
  onSectionChange: (section: string) => void;
  currentSection: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  onSectionChange,
  currentSection,
}) => {
  return (
    <nav className="space-y-4 lg:space-y-6 px-4 lg:p-6">
      <ul className="text-gray-700 flex flex-row justify-evenly lg:flex-col gap-4 lg:gap-6">
        {SECTIONS.map((section) => (
          <li
            key={section.name}
            className={`cursor-pointer w-full text-center p-3 rounded-lg transition-all duration-300 shadow-md 
              ${
                currentSection === section.name
                  ? "bg-[#eee] text-gray-800 font-bold"
                  : "bg-[#ddd] hover:bg-[#ccc] hover:text-gray-800"
              }`}
            onClick={() => onSectionChange(section.name)}
          >
            {section.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
