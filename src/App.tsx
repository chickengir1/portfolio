import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Tide from "./components/anime/Tide";
import useIntersectionObserver from "./hooks/events/useIntersectionObserver";
import Intro from "./components/layout/Intro";
import Main from "./components/layout/Main";
import WordCloud from "./components/layout/WordCloud";

const App = () => {
  const [isTriggered, setIsTriggered] = useState(false);

  const headerThreshold = 0.3;
  const mainThreshold = 0.9;

  const isMainIntersecting = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: mainThreshold,
  });

  const isHeaderIntersecting = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: headerThreshold,
  });

  useEffect(() => {
    if (isHeaderIntersecting && !isTriggered) {
      setIsTriggered(true);
    }
  }, [isHeaderIntersecting, isTriggered]);

  return (
    <div className="font-kor">
      <div className="sm:min-h-screen">
        <Header isIntersecting={isTriggered} />
        <Tide />
      </div>
      <div className="flex w-full bg-[#ccc] ">
        <Intro isIntersecting={isMainIntersecting} />
      </div>
      <div id="next-section">
        <div className="flex min-h-[50vh] bg-[#ccc]">
          <Main isIntersecting={isMainIntersecting} />
        </div>
      </div>
      <div className="bg-[#ccc] flex justify-center items-center min-h-screen w-full">
        <WordCloud />
      </div>
    </div>
  );
};

export default App;
