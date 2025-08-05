type GradientHeadingProps = {
  text: string;
  fontSize?: string;
  gradient?: string;
  className?: string;
};

export function GradientHeading({
  text,
  fontSize = "144px",
  gradient = "linear-gradient(45deg, #ffcc00, #ff9900, #ff6600)",
  className = "",
}: GradientHeadingProps) {
  return (
    <div
      className={`items-center justify-center mx-auto flex flex-col ${className}`}
    >
      <h2
        style={{
          background: gradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center",
          fontSize,
          fontWeight: "bold",
          lineHeight: "1.2",
          letterSpacing: "0.03em",
        }}
      >
        {text.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </h2>
    </div>
  );
}
