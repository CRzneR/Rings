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
          fontSize: "144px", // Ändere die Größe nach Bedarf
          fontWeight: "bold",
          lineHeight: "1.2",
          letterSpacing: "0.03em",
        }}
      >
        Perfekte <br /> Abstimmung
      </h2>
    </div>
  );
}
