type GradientHeadingProps = {
  text: string;
  gradient?: string;
  className?: string;
};

export function GradientHeading({
  text,
  gradient = "linear-gradient(45deg, #CE9D0B, #EFBD54, #F2D589)",
  className = "",
}: GradientHeadingProps) {
  return (
    <div
      className={`items-center justify-center mx-auto flex flex-col ${className}`}
    >
      <h2
        className="text-[48px] md:text-[144px] text-center font-bold leading-tight tracking-wide"
        style={{
          background: gradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
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
