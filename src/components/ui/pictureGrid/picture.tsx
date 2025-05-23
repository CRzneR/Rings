import React from "react";

interface DestinationCardProps {
  imageSrc: string;
  title: string;
  country: string;
}

const Picture: React.FC<DestinationCardProps> = ({
  imageSrc,
  title,
  country,
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden shadow-md">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">
          <span role="img" aria-label="location"></span> {country}
        </p>
      </div>
    </div>
  );
};

export default Picture;
