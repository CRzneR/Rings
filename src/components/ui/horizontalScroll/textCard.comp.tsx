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
      <Button variant="outline" size="lg" className="mt-4">
        Outline Button
      </Button>
    </div>
  );
}
