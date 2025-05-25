import clsx from "clsx";

interface GradientActionButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  text?: string;
}

export const GradientActionButton: React.FC<GradientActionButtonProps> = ({
  text = "text",
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative inline-flex items-center justify-center overflow-hidden rounded-[2.5rem] px-6 py-3",
        "bg-gradient-to-br from-violet-600 to-violet-500",
        "shadow-[0_4px_25px_-4px_rgba(118,87,255,0.6)] duration-200 hover:shadow-[0_6px_35px_-4px_rgba(118,87,255,0.8)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70",
        className
      )}
    >
      <span className="relative z-10 text-white">{text}</span>

      {/* Border Animation Layer */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[2.5rem] border-0.5 border-transparent before:absolute before:inset-0 before:animate-border before:rounded-[2.5rem] before:border-[0.5px] before:border-gradient-to-r before:from-purple-400 before:via-pink-500 before:to-purple-400"
      ></span>
    </button>
  );
};
