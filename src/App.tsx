import Header from "./components/layout/Header";
import Tide from "./components/anime/Tide";

const App = () => {
  return (
    <div>
      <Header />
      <div className="h-[100vh] bg-[#ccc]">
        <Tide />
      </div>
    </div>
  );
};

export default App;
