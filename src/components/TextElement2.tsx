import React from "react";

interface TextElement2Props {
  top: string;
  text: string;
}

export const TextElement2: React.FC<TextElement2Props> = ({ top, text }) => {
  return (
    <div className="w-full px-4 py-20 sm:py-32 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Linke Spalte: Überschrift */}
        <p className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1A1001] via-[#392403] to-[#7E5107]">
          {top}
        </p>

        {/* Rechte Spalte: Text */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-light">
          {text}
        </p>
      </div>
    </div>
  );
};
