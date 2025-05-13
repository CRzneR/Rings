export default function Picture({
  imageSrc,
  title,
  text,
}: {
  imageSrc: string;
  title: string;
  text: string;
}) {
  return (
    <div className="w-full h-[580px] pr-8">
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
