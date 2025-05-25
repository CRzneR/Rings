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
        <GradientActionButton
          onClick={() => alert("Clicked!")}
          text="Show rings"
        />
      </div>
    </div>
  );
}
