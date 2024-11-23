import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Tide from "./components/anime/Tide";
import useIntersectionObserver from "./hooks/events/useIntersectionObserver";
import Main from "./components/layout/Main";
import WordCloud from "./components/layout/WordCloud";

const App = () => {
  const [isTriggered, setIsTriggered] = useState(false);

  const isIntersecting = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  useEffect(() => {
    if (isIntersecting && !isTriggered) {
      setIsTriggered(true);
    }
  }, [isIntersecting, isTriggered]);

  return (
    <div className="font-kor">
      <div className="sm:min-h-screen">
        <Header isIntersecting={isTriggered} />
        <Tide />
      </div>
      <div id="next-section">
        <div className="min-h-[50vh] bg-[#ccc]">
          <Main isIntersecting={isTriggered} />
        </div>
      </div>
      <div className="bg-[#ccc] flex justify-center items-center min-h-screen w-full">
        <WordCloud />
      </div>
    </div>
  );
};

export default App;
