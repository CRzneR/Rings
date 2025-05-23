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
      <button className="mt-8 border-1 border-[#cfa63d] hover:bg-[#d1a054] text-white font-semibold py-3 px-6 rounded shadow-md transition">
        show rings
      </button>
    </div>
  );
}
