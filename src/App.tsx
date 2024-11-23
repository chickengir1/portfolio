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
    threshold: 0.8,
  });

  useEffect(() => {
    if (isIntersecting && !isTriggered) {
      setIsTriggered(true);
    }
  }, [isIntersecting, isTriggered]);

  return (
    <div>
      <div className="sm:min-h-screen">
        <Header isIntersecting={isTriggered} />
        <Tide />
      </div>
      <div id="next-section" className="min-h-screen">
        <div className="min-h-screen">
          <Main isIntersecting={isTriggered} />
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen w-full">
        <WordCloud />
      </div>
    </div>
  );
};

export default App;
