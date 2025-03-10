import Header from "./components/section/Header";
import About from "./components/section/About";
import WordCloud from "./components/layout/WordCloud";
import Slider from "./components/layout/Slider";
import Skills from "./components/chip/Skills";
import Project from "./components/section/Project";

const App = () => {
  return (
    <main className="font-kor">
      <section className={styles.headerContainer}>
        <Header />
      </section>
      <section className={styles.aboutSection}>
        <About />
      </section>
      <section className={styles.wordCloudContainer}>
        <WordCloud />
      </section>
      <section className={styles.bottomSection}>
        <div className={styles.sliderSection}>
          <Slider reverse={false} />
        </div>
        <div className={styles.skillsContainer}>
          <Skills />
        </div>
        <div className={styles.sliderSection}>
          <Slider reverse={true} />
        </div>
        <div className={styles.projectContainer}>
          <Project />
        </div>
      </section>
    </main>
  );
};

export default App;

const styles = {
  headerContainer:
    "-z-40 sticky top-0 bg-[#ccc] min-h-[80vh] flex items-center justify-center shadow-md",
  aboutSection: "bg-[#2D2D2D] py-12",
  wordCloudContainer:
    "-z-40 sticky top-0 bg-[#ccc] flex justify-center items-center w-full h-screen",
  bottomSection: "py-12",
  sliderSection: "flex items-center overflow-hidden bg-[#2D2D2D]",
  skillsContainer: "bg-[#2D2D2D]",
  projectContainer: "flex justify-center bg-[#ccc] py-8",
};
