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
    <nav className="space-y-4 md:space-y-0">
      <ul className="text-gray-700 text-start flex flex-row md:flex-col gap-4">
        {SECTIONS.map((section) => (
          <li
            key={section.name}
            className={`cursor-pointer hover:text-blue-500 ${
              currentSection === section.name ? "font-bold text-blue-500" : ""
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
