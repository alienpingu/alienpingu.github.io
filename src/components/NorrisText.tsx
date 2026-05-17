import { memo } from "react";

interface NorrisTextProps {
  text: string;
}

const getChars = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("it", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }
  return Array.from(text);
};

const NorrisText = ({ text }: NorrisTextProps) => {
  const chars = getChars(text);

  return (
    <>
      {chars.map((char, index) => (
        <span
          key={index}
          data-char={char}
          style={{ "--index": index } as React.CSSProperties}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default memo(NorrisText);
