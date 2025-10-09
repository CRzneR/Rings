import HeroSection from "../components/ui/herosection";
import { GradientHeading } from "@/components/ui/gradientHeading";

import ScrollWindow from "@/components/ui/ScrollWindow";
import ImageGrid from "@/components/ui/pictureGrid/grid";
import ThreeScene from "@/components/ui/threeJs/ThreeScene";
import { TextElement } from "../components/ui/textElement";
import XScrollComp from "@/components/ui/XScrollComp";
import Parallax from "@/components/ui/parallax";

import Contact from "@/components/contact.comp";
import BlurredScrollText from "@/components/BlurredScrollText";
import XScrollCompMobile from "@/components/ui/XScrollCompMobile";
import { TextElement2 } from "@/components/TextElement2";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => <div>Item {i + 1}</div>);
  const SECTION_HEIGHT = 1500;
  return (
    <>
      <section className="my-24">
        <HeroSection />
      </section>
      <TextElement
        top="Leidenschaft bekam eine Plattform um Sie zu zeigen"
        text="Hier präsentiere ich eine Auswahl selbst erstellter 3D-Modelle – gestaltet, gerendert und eingebunden in eine von mir entwickelte Webanwendung. Diese Seite dient nicht nur zur Präsentation meiner Modelle, sondern zeigt auch meine Fähigkeiten in Webentwicklung und 3D-Visualisierung. Viel Spaß beim Stöbern!"
      />
      <BlurredScrollText />
      <XScrollCompMobile className="block md:hidden mt-12" />
      <XScrollComp className="hidden md:block" />

      <section className="my-24">
        <GradientHeading text={"Championship"} />
        <GradientHeading text={"Ring 2025"} className="block md:hidden" />
        <Parallax
          children={<GradientHeading text={"Ring 2025"} />}
          start={0.4}
          end={-50}
          className="hidden md:block"
        />
        <div>
          <ThreeScene />
          <TextElement2
            top="Siegen für die Ewigkeit"
            text="Jeder Ring wird in aufwendiger Handarbeit an die besonderen Ereignisse des jeweiligen Jahres angepasst und erhält dadurch seinen ganz eigenen Charakter. In die Details fließen sorgfältig Statistiken, bedeutende Namen und prägende Momente ein, die das Jahr geprägt haben. Darüber hinaus wird auch ein Bezug zum Austragungsort geschaffen, indem charakteristische Elemente der Stadt oder Region in das Design integriert werden. So entsteht ein einzigartiges Schmuckstück, das nicht nur als Trophäe dient, sondern auch eine emotionale Erinnerung an Geschichte, Leistungen und Atmosphäre des jeweiligen Jahres verkörpert."
          />
          <ImageGrid />
        </div>
      </section>
      <section className="hidden md:flex">
        <ScrollWindow />
      </section>

      <Contact />
    </>
  );
}
