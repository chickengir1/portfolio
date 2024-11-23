import React, { useState } from "react";
import Sidebar from "../chip/Sidebar";
import Timeline from "../chip/Timeline";
import { SECTIONS } from "../../utils/constans/constants";
import useResize from "../../hooks/events/useResize";

type MainProps = {
  isIntersecting: boolean;
};

const Main: React.FC<MainProps> = ({ isIntersecting }) => {
  const [currentSection, setCurrentSection] = useState(SECTIONS[0]?.name || "");
  const shouldObserve = useResize();

  const animate = {
    aside: {
      visible: "opacity-100 translate-x-0",
      hidden: "opacity-0 -translate-x-10",
    },
    main: {
      visible: "opacity-100 translate-x-0",
      hidden: "opacity-0 translate-x-10",
    },
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      <aside
        className={`lg:w-1/4 w-full p-4 transition-all duration-500 ${
          shouldObserve && isIntersecting
            ? animate.aside.visible
            : shouldObserve
            ? animate.aside.hidden
            : animate.aside.visible
        } bg-gray-100`}
      >
        <Sidebar
          onSectionChange={setCurrentSection}
          currentSection={currentSection}
        />
      </aside>
      <main
        className={`lg:w-3/4 w-full p-8 transition-all duration-500 ${
          shouldObserve && isIntersecting
            ? animate.main.visible
            : shouldObserve
            ? animate.main.hidden
            : animate.main.visible
        } bg-[#ccc]`}
      >
        <Timeline currentSection={currentSection} />
      </main>
    </div>
  );
};

export default Main;
