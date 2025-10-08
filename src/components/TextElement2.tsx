import React from "react";

interface TextElement2Props {
  top: string;
  text: string;
}

export const TextElement2: React.FC<TextElement2Props> = ({ top, text }) => {
  return (
    <div className="mx-auto max-w-[600px] py-20 sm:py-32 md:py-40 px-4">
      {/* Überschrift */}
      <p className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1A1001] via-[#392403] to-[#7E5107]">
        {top}
      </p>

      {/* Text */}
      <p className="text-base sm:text-lg md:text-2xl my-6 sm:my-8 md:my-12 text-gray-700 font-light">
        {text}
      </p>
    </div>
  );
};
