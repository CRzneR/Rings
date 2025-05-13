import { Button } from "../button";
import Heading from "../heading.comp";

export default function TextCard() {
  return (
    <div className="w-full h-[580px] pr-8">
      <Heading
        Titel="See the History"
        size="lg"
        color="primary"
        fontWeight="bold"
      />
      <p>
        The tradition has been maintained for more than eight years now. <br />{" "}
        Check out all the rings so far.{" "}
      </p>
      <button className="mt-8 border-1 border-[#cfa63d] hover:bg-[#d1a054] text-white font-semibold py-3 px-6 rounded shadow-md transition">
        show rings
      </button>
    </div>
  );
}
