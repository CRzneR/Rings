interface ScrollCardProps {
  imageSrc: string;
  titel: string;
  text: string;
}

export default function ScrollCard({ imageSrc, titel, text }: ScrollCardProps) {
  return (
    <div
      className="w-[440px] h-[540px] bg-cover bg-center px-6 py-4 overflow-hidden "
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Schwarzes Overlay */}
      <div className="absolute bg-black/25" />

      {/* Text-Inhalt */}
      <div className="relative z-10 flex flex-col h-full text-white justify-end">
        <h1 className="text-3xl font-bold mb-3">{titel}</h1>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
}
