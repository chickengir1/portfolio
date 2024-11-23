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

  const styles = {
    container:
      "mx-2 sm:px-8 flex flex-col items-center lg:flex-row overflow-hidden",
    mainContent:
      "flex flex-col px-0 sm:px-4 lg:flex-row w-full transition-all duration-500 flex-grow bg-[#ccc]",
    sidebar: "lg:w-1/5 p-4 lg:p-6 transition-all duration-500 flex-shrink-0",
    timeline:
      "lg:w-4/5 w-full px-2 py-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed text-gray-800",
    left: {
      visible: "opacity-100 translate-x-0",
      hidden: "opacity-0 -translate-x-10",
    },
    right: {
      visible: "opacity-100 translate-x-0",
      hidden: "opacity-0 translate-x-10",
    },
  };

  return (
    <section className={styles.container}>
      <main
        className={`${styles.mainContent} ${
          shouldObserve && isIntersecting
            ? styles.right.visible
            : shouldObserve
            ? styles.right.hidden
            : styles.right.visible
        }`}
      >
        {/* Sidebar */}
        <aside
          className={`${styles.sidebar} ${
            shouldObserve && isIntersecting
              ? styles.left.visible
              : shouldObserve
              ? styles.left.hidden
              : styles.left.visible
          }`}
        >
          <Sidebar
            onSectionChange={setCurrentSection}
            currentSection={currentSection}
          />
        </aside>
        <div className={styles.timeline}>
          <Timeline currentSection={currentSection} />
        </div>
      </main>
    </section>
  );
};

export default Main;
