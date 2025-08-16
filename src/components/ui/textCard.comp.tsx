import { GradientActionButton } from "./gradientButton";
import Heading from "./heading.comp";

export default function TextCard() {
  return (
    <div className="w-[800px] h-[580px] pr-8">
      <Heading
        Titel="Liebe im Detail"
        size="lg"
        color="primary"
        fontWeight="bold"
      />
      <p>
        Die Tradition währt nun schon fast ein Jahrzehnt lang und wird
        mindestens genau so <br /> lange bestehen. Sehen Sie sich die einzelnen
        Schritte bis zum fertigen Ring an.
      </p>
      <div>
        <button className="border-1 rounded-xl mt-4 bg-black text-white hover:bg-[#d1a054] font-semibold py-3 px-6 rounded shadow-md transition">
          To the history
        </button>
      </div>
    </div>
  );
}
