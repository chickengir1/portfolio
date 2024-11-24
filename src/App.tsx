import Header from "./components/layout/Header";
import About from "./components/layout/About";
import WordCloud from "./components/layout/WordCloud";

const App = () => {
  return (
    <div className="font-kor">
      <div className="-z-40 sticky top-0 bg-[#ccc]">
        <Header />
      </div>
      <div id="section1" className="bg-[#2D2D2D]">
        <About />
      </div>
      <div className="-z-40 sticky top-0 bg-[#ccc] flex justify-center items-center w-full h-screen">
        <WordCloud />
      </div>
      <div
        id="section1"
        className="flex items-center justify-center bg-[#2D2D2D] min-h-screen"
      >
        <h1 className="font-bold text-gray-300">스킬 설명 들어갈거임</h1>
      </div>
    </div>
  );
};

export default App;
