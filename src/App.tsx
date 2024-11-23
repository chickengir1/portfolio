import Header from "./components/layout/Header";
import Tide from "./components/anime/Tide";
import useIntersectionObserver from "./hooks/events/useIntersectionObserver";

const App = () => {
  const isIntersecting = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  return (
    <div>
      <div className="min-h-screen">
        <Header isIntersecting={isIntersecting} />
        <Tide />
      </div>
      <div id="next-section" className="min-h-screen">
        <div className="min-h-screen bg-[#ccc]">
          {isIntersecting && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default App;
