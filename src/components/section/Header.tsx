import PathAni from "../anime/PathAni";
import useEventState from "../../hooks/events/useEventState";
import useChatAnime from "../../hooks/anime/useChatAnime";

const fullText =
  "Hello, I'm a frontend developer\n crafting code that transforms user experiences. I explore new possibilities at the intersection of creativity and technology.";

const Header = () => {
  const { pathAni, chatEvent } = useEventState();
  const { text } = useChatAnime(fullText);

  return (
    <section className="py-8 flex flex-col justify-center items-center">
      {pathAni && chatEvent && (
        <section className="flex flex-col items-center justify-between">
          <PathAni />
          <h1 className="block pt-14 text-gray-900 text-center text-base md:text-2xl tracking-widest">
            {text}
          </h1>
        </section>
      )}
    </section>
  );
};

export default Header;
