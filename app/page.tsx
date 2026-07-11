import Link from "next/link";
import { Dumbbell } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TrainersSection from "@/components/TrainersSection";

export default function HomePage() {
  return (
    <>
      <section className="heroSection">
        <div className="heroGrid">
          <div>
            <span className="eyebrow">BUDAPEST • ERŐ • FÓKUSZ</span>

            <h1>Hozd ki magadból a maximumot</h1>

            <p className="heroLead">
              A Concept Gym modern, lendületes edzőtér prémium gépparkkal,
              intenzív hangulattal és olyan környezettel, ahol minden edzésnek
              tétje van.
            </p>

            <Link href="/arak" className="primaryButton">
              Nézd meg a bérleteket
            </Link>
          </div>

          <aside className="statCard">
            <Dumbbell size={30} />
            <strong>1200 m² edzőtér</strong>
            <span>Premium géppark • Wellness • Személyi edzés</span>
          </aside>
        </div>

        <div className="showcaseGrid">
          <HeroCarousel />

          <article className="newsCardWhite">
            <span className="eyebrow">AKTUÁLIS HÍREINK</span>
            <h2>Új gépek, friss órarend, erősebb közösség</h2>

            <ul>
              <li>Júliustól új lábgépek és plate-loaded állomások érkeznek.</li>
              <li>Reggeli nyitás 05:30-tól hétköznapokon.</li>
              <li>Ingyenes állapotfelmérés új VIP bérleteseknek.</li>
            </ul>
          </article>
        </div>
      </section>

      <AboutSection />

      <PricingSection />

      <TrainersSection preview />
    </>
  );
}