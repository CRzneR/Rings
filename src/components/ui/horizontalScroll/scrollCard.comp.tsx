export default function ScrollCard() {
  return (
    <div className="relative bg-white flex items-center justify-center px-4">
      {/* Card mit Hintergrundbild */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg max-w-sm w-full h-[540px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/400/540/?blur')",
        }}
      >
        {/* Schwarzes Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Text-Inhalt */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-3xl font-bold mb-3">Willkommen</h1>
          <p className="text-lg">
            Dies ist ein informativer Text innerhalb der Karte mit
            Bildhintergrund.
          </p>
        </div>
      </div>
    </div>
  );
}
