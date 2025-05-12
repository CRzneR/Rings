import Image from "next/image";

export function Spinning() {
  return (
    <div className="items-center justify-center mx-auto flex flex-col">
      <h2
        style={{
          background: "linear-gradient(45deg, #ffcc00, #ff9900, #ff6600)",
          backgroundClip: "text",
          textAlign: "center",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "134px", // Ändere die Größe nach Bedarf
          fontWeight: "bold",
          lineHeight: "1.2",
        }}
      >
        Perfekte <br /> Abstimmung
      </h2>
      <div>
        <Image
          src="/images/ring.png"
          alt="Ring"
          width={500}
          height={500}
          className="rounded-full"
          style={{
            animation: "spin 5s linear infinite",
          }}
        />
      </div>
    </div>
  );
}
