import { useState, useEffect } from "react";

const useEventState = () => {
  const [pathAni, setPathAni] = useState(false);
  const [chatEvent, setChatEvent] = useState(false);

  useEffect(() => {
    async function animationSequence() {
      setPathAni(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setChatEvent(true);
    }

    animationSequence();
  }, []);

  return { pathAni, chatEvent };
};

export default useEventState;
