import PathAni from "../anime/PathAni";
import { useChatAnime } from "../../hooks/useChatAnime";

const fullText =
  "Hello, I'm a frontend developer, crafting code that transforms user experiences. I explore new possibilities at the intersection of creativity and technology.";

const Header = () => {
  const { text } = useChatAnime({ fullText });

  return (
    <section className="relative w-full h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <PathAni />
      </div>
      <div className="relative z-10 max-w-[300px] max-h-[100px] md:max-w-md h-[200px]">
        <h1 className="text-start text-base md:text-2xl tracking-widest whitespace-pre-wrap break-keep text-gray-800">
          {text}
        </h1>
      </div>
    </section>
  );
};

export default Header;
