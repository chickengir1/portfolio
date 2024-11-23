import { useState, useEffect } from "react";
import { pathAnimationEvent, chatEvent } from "../../utils/events/events";

const useEventState = () => {
  const [eventState, setEventState] = useState({
    pathAni: false,
    chatEvent: false,
  });

  useEffect(() => {
    const handleEventsInOrder = async () => {
      await pathAnimationEvent();
      setEventState((prev) => ({
        ...prev,
        pathAni: true,
      }));

      await chatEvent();
      setEventState((prev) => ({
        ...prev,
        chatEvent: true,
      }));
    };

    handleEventsInOrder();
  }, []);

  return eventState;
};

export default useEventState;
