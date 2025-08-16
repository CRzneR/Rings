import { GradientActionButton } from "./gradientButton";

export default function HeroSection() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-8xl md:text-10xl font-bold leading-tight">
        Built for.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CE9D0B] via-[#EFBD54] to-[#F2D589]">
          Greatness.
        </span>{" "}
        <br />
        Worn by Champions.
      </h1>
      <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
        At LOTR, we don´t just craft jewelery - we forge eduring symbols of
        victory, pride, and legacy. Each piece is a celebration of archievment,
        designed to be worn not just tody, but for generations to come.
      </p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="border-1 rounded-xl bg-black text-white hover:bg-[#d1a054] font-semibold py-3 px-6 rounded shadow-md transition">
          Show the rings!
        </button>

        <button className="rounded-xl border border-black text-black hover:bg-[#d1a054] hover:border-none hover:text-white font-semibold py-3 px-6 shadow-md transition">
          Get in touch
        </button>
      </div>
    </section>
  );
}
