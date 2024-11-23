import Header from "./components/layout/Header";
import Tide from "./components/anime/Tide";
import useIntersectionObserver from "./hooks/events/useIntersectionObserver";
import Main from "./components/layout/Main";

const App = () => {
  const isIntersecting = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  return (
    <div>
      <div className="sm:min-h-screen">
        <Header isIntersecting={isIntersecting} />
        <Tide />
      </div>
      <div id="next-section" className="min-h-screen">
        <div className="min-h-screen">
          <Main isIntersecting={isIntersecting} />
          {isIntersecting && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default App;
