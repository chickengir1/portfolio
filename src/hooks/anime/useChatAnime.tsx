import { useState, useEffect } from "react";

const useChatAnime = (fullText: string) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;

    function typeText(index: number) {
      if (index < fullText.length && isMounted) {
        setText((prev) => prev + fullText[index]);
        setTimeout(() => typeText(index + 1), 50);
      }
    }

    const timeoutId = setTimeout(() => {
      if (isMounted) typeText(0);
    }, 1500);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [fullText]);

  return { text };
};

export default useChatAnime;
