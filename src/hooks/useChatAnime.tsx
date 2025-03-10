import { useState, useEffect } from "react";

export const useChatAnime = (props: Chat.UseChatAnimeProps) => {
  const { fullText, startDelay = 1500, letterDelay = 50 } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    const startTypingProps = {
      startTime,
      isMounted,
      fullText,
      setText,
      startDelay,
      letterDelay,
    };

    const timeoutId = setTimeout(() => {
      startTypingAnimation(startTypingProps);
    }, startDelay);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [fullText, startDelay, letterDelay]);

  return { text };
};

function typeText(props: Chat.TypeTextParams): void {
  const { fullText, index, isMounted, setText, letterDelay } = props;
  const shouldContinue = index < fullText.length && isMounted;

  if (shouldContinue) {
    setText((prev) => prev + fullText[index]);

    const typeTextProps = {
      fullText,
      index: index + 1,
      isMounted,
      setText,
      letterDelay,
    };
    setTimeout(() => typeText(typeTextProps), letterDelay);
  }
}

function startTypingAnimation(props: Chat.StartTypingParams): void {
  const { startTime, isMounted, fullText, setText, startDelay, letterDelay } =
    props;
  const elapsed = Date.now() - startTime;
  const remainingDelay = Math.max(0, startDelay - elapsed);
  setTimeout(() => {
    if (isMounted) {
      typeText({ fullText, index: 0, isMounted, setText, letterDelay });
    }
  }, remainingDelay);
}
