import { useState, useEffect } from "react";
const useChatAnime = (fullText) => {
  const [text, setText] = useState("");
  const typingSpeed = 100;
  const delayBeforeStart = 1500;

  useEffect(() => {
    let isMounted = true;

    const startAnimation = () => {
      const typeText = (index) => {
        if (index < fullText.length && isMounted) {
          setText((prev) => prev + fullText[index]);
          setTimeout(() => typeText(index + 1), typingSpeed);
        }
      };
      typeText(0);
    };

    const timeoutId = setTimeout(() => {
      if (isMounted) startAnimation();
    }, delayBeforeStart);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      setText("");
    };
  }, [fullText, typingSpeed, delayBeforeStart]);

  return { text };
};

export default useChatAnime;
