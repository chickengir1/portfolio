import { useState, useEffect } from "react";
import PathAni from "../anime/PathAni";
import { pathAnimationEvent, randomEvent } from "../../utils/events/events";

const Header = () => {
  const [eventState, setEventState] = useState({
    pathAni: false,
    randomEvent: false,
  });

  useEffect(() => {
    const handleEventsInOrder = async () => {
      await pathAnimationEvent();
      setEventState((prev) => ({
        ...prev,
        pathAni: true,
      }));

      await randomEvent();
      setEventState((prev) => ({
        ...prev,
        randomEvent: true,
      }));
    };

    handleEventsInOrder();
  }, []);

  return (
    <div className="relative h-[100vh] bg-[#ccc] flex justify-center items-center">
      {eventState.pathAni && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <PathAni />
        </div>
      )}

      {eventState.randomEvent && (
        <div className="absolute z-[10] text-center">
          <div className="backdrop-blur-md bg-gray-200 p-4 rounded-lg shadow-lg">
            Random Event 완료!
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
