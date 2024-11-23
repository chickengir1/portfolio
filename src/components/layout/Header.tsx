import React from "react";
import PathAni from "../anime/PathAni";
import useEventState from "../../hooks/events/useEventState";
import useChatAnime from "../../hooks/anime/useChatAnime";

type HeaderProps = {
  isIntersecting: boolean;
};

const Header: React.FC<HeaderProps> = ({ isIntersecting }) => {
  const { pathAni, chatEvent } = useEventState();
  const { text } = useChatAnime(`"About Me"`);

  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-[#333] flex justify-center items-center">
      {pathAni && (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="relative">
            {chatEvent && !isIntersecting && (
              <div className="fixed top-10 left-1/2 transform -translate-x-1/2">
                <h1 className="text-gray-300 z-50 text-2xl md:text-4xl tracking-widest">
                  {text}
                </h1>
              </div>
            )}
            <PathAni />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
