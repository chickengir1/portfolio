import React from "react";
import myimg from "../../../public/myimg.webp";
import useResize from "../../hooks/events/useResize";

type IntroProps = {
  isIntersecting: boolean;
};

const Intro: React.FC<IntroProps> = ({ isIntersecting }) => {
  const shouldObserve = useResize();

  const styles = {
    container: "py-8 w-full sm:px-24 px-6",
    content:
      "flex flex-row md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8",
    imageContainer:
      "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0",
    image:
      "w-full h-full object-cover rounded-full transition-all duration-500 blur-md",
    textContainer:
      "flex flex-col px-8 max-w-full md:max-w-md md:text-left transition-all duration-500",
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
      <div
        className={`${styles.content} ${
          shouldObserve && isIntersecting
            ? styles.right.visible
            : shouldObserve
            ? styles.right.hidden
            : styles.right.visible
        }`}
      >
        <div className={styles.imageContainer}>
          <img
            src={myimg}
            alt="profile-img"
            className={`${styles.image} ${
              shouldObserve && isIntersecting
                ? styles.right.visible
                : shouldObserve
                ? styles.right.hidden
                : styles.right.visible
            }`}
          />
        </div>
        <div
          className={`${styles.textContainer} ${
            shouldObserve && isIntersecting
              ? styles.right.visible
              : shouldObserve
              ? styles.right.hidden
              : styles.right.visible
          }`}
        >
          <p className="text-base sm:text-lg md:text-xl font-bold">이강호</p>
          <p className="text-base sm:text-lg md:text-xl font-bold">
            2000.09.02
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
            <span>Frontend-Developer</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 break-words">
            안녕하세요! 배움을 공유하고 새로운 도전을 즐기는 프론트엔드 개발자
            이강호입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
