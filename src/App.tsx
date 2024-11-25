import Header from "./components/layout/Header";
import About from "./components/layout/About";
import WordCloud from "./components/layout/WordCloud";
import Slider from "./components/layout/Slider";
import Skills from "./components/chip/Skills";
import Project from "./components/layout/Project";

const App = () => {
  return (
    <div className="font-kor">
      <div className="-z-40 sticky top-0 bg-[#ccc] min-h-[80vh] flex items-center justify-center">
        <Header />
      </div>
      <div id="section1" className="bg-[#2D2D2D]">
        <About />
      </div>
      <div className="-z-40 sticky top-0 bg-[#ccc] flex justify-center items-center w-full h-screen">
        <WordCloud />
      </div>
      <div className=" bg-[#2D2D2D] min-h-screen">
        <div id="section2" className="flex items-center overflow-hidden">
          <Slider />
        </div>
        <div>
          <Skills />
        </div>
        <div className="flex justify-center bg-[#ccc]">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default App;
