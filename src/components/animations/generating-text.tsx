import { useInView } from "@hooks/useInView";
import { useEffect, useState } from "react";

type GeneratingTextProps = {
  message: string;
};

const GeneratingText = ({ message }: GeneratingTextProps) => {
  const staggerDelay = 50;
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [ref, inView] = useInView<HTMLParagraphElement>();

  useEffect(() => {
    if (!inView) return;

    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
    let index = 0;
    const words = message.split(" ");

    setDisplayedWords([]);
    setIsGenerating(true);

    const addWord = () => {
      if (index < words.length) {
        setDisplayedWords((prevWords) => [...prevWords, words[index]]);
        index++;
        timeout = setTimeout(addWord, staggerDelay);
      } else {
        setIsGenerating(false);
      }
    };

    addWord();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [inView, message]);

  return (
    <p
      ref={ref}
      className="w-fit text-sm text-gray-200 font-mono whitespace-pre-line [overflow-wrap:anywhere]"
    >
      {displayedWords.map((word, index) =>
        word === undefined ? null : <span key={index}>{word + " "}</span>
      )}
      {isGenerating && <span className="text-gray-200 animate-pulse">●</span>}
    </p>
  );
};

export default GeneratingText;
