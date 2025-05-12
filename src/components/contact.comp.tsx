import Heading from "./ui/heading.comp";

export default function ContactMe() {
  return (
    <div className="flex justify-between mx-24">
      <div>
        <Heading
          Titel="Let's connect"
          size="lg"
          color="primary"
          fontWeight="bold"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 rotate-45 transform"></div>
        </div>
      </div>
    </div>
  );
}
