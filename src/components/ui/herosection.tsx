import Link from "next/link";
import { GradientActionButton } from "./gradientButton";

export default function HeroSection() {
  return (
    <section className="text-center py-16 md:py-24 px-4 md:px-6">
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
        Built for.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CE9D0B] via-[#EFBD54] to-[#F2D589]">
          Greatness.
        </span>{" "}
        <br className="hidden sm:block" />
        Worn by Champions.
      </h1>

      <p className="mt-4 md:mt-6 text-gray-500 text-base sm:text-lg md:text-2xl max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
        At Factory LNG, we don’t just craft jewelry – we forge enduring symbols
        of victory, pride, and legacy. Each piece is a celebration of
        achievement, designed to be worn not just today, but for generations to
        come.
      </p>

      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/rings"
          className="w-full sm:w-auto rounded-xl bg-black text-white hover:bg-[#d1a054] font-semibold py-3 px-6 shadow-md transition inline-block text-center"
        >
          Show the rings!
        </Link>

        <button className="w-full sm:w-auto rounded-xl border border-black text-black hover:bg-[#d1a054] hover:border-none hover:text-white font-semibold py-3 px-6 shadow-md transition">
          Get in touch
        </button>
      </div>
    </section>
  );
}
