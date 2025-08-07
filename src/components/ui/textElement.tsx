import React from "react";
import { FadeIn } from "./fadeIn";

interface TextElementProps {
  top: string;
  text: string;
}

export const TextElement: React.FC<TextElementProps> = ({ top, text }) => {
  return (
    <FadeIn>
      <div className="mx-auto max-w-[600px] py-40">
        <p className="text-6xl  font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1A1001] via-[#392403] to-[#7E5107]">
          {top}
        </p>
        <p className="text-2xl my-12 text-gray-700 font-light">{text}</p>
      </div>
    </FadeIn>
  );
};
