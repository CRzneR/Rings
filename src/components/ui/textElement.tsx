import React from "react";

interface TextElementProps {
  top: string;
  text: string;
}

const TextElement: React.FC<TextElementProps> = ({ top, text }) => {
  return (
    <div className="text-left mx-90 p-8 py-34">
      <p className="text-6xl max-w-[600px] font-bold mb-4 text-gray-300">
        {top}
      </p>
      <p className="text-2xl my-12 text-gray-300 font-light">{text}</p>
    </div>
  );
};

export default TextElement;
