declare namespace Chat {
  type SetText = React.Dispatch<React.SetStateAction<string>>;
  type LetterDelay = number;
  type StartDelay = number;
  type FullText = string;
  type Index = number;

  interface UseChatAnimeProps {
    fullText: FullText;
    startDelay?: StartDelay;
    letterDelay?: LetterDelay;
  }

  interface TypeTextParams {
    fullText: FullText;
    index: Index;
    isMounted: IsMounted;
    setText: SetText;
    letterDelay: LetterDelay;
  }

  interface StartTypingParams {
    startTime: StartTime;
    isMounted: IsMounted;
    fullText: FullText;
    setText: SetText;
    startDelay: StartDelay;
    letterDelay: LetterDelay;
  }
}
