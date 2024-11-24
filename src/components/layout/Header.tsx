import React from "react";
import PathAni from "../anime/PathAni";
import useEventState from "../../hooks/events/useEventState";
import useChatAnime from "../../hooks/anime/useChatAnime";

const Header: React.FC = () => {
  const { pathAni, chatEvent } = useEventState();
  const { text } = useChatAnime(`"Front-end Developer Lee's"`);

  return (
    <section className="py-8 flex flex-col justify-end items-center">
      {pathAni && (
        <section className="flex flex-col-reverse items-center justify-between">
          <div className="flex min-h-12 items-center justify-center mt-4">
            {chatEvent && (
              <h1 className="z-10 text-gray-900 text-center text-base md:text-2xl tracking-widest">
                {text}
              </h1>
            )}
          </div>
          <PathAni />
        </section>
      )}
    </section>
  );
};

export default Header;
