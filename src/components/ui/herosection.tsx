import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Built for.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
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
        <button className="border-1 border-[#cfa63d] hover:bg-[#d1a054] text-white font-semibold py-3 px-6 rounded shadow-md transition">
          show rings
        </button>
        <button className="border-1 border border-gray-300 rounded py-3 px-6 hover:bg-white hover:text-black font-semibold">
          get in touch
        </button>
      </div>
    </section>
  );
}
