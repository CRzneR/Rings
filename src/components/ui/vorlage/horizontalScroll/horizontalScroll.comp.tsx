// HorizontalScroll.tsx
import React from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex gap-8 p-4">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
