import Link from "next/link";
import { Phone } from "lucide-react";
import { trainers } from "@/data/trainers";
import { FacebookLogo, InstagramLogo } from "@/components/BrandIcons";

type TrainersSectionProps = {
  preview?: boolean;
};

export default function TrainersSection({
  preview = false,
}: TrainersSectionProps) {
  if (preview) {
    return (
      <section className="trainersHomeSection">
        <span className="eyebrow">EDZŐINK</span>

        <h2>
          Tapasztalt edzők,
          <br />
          tiszta irány, valódi fejlődés.
        </h2>

        <p className="centerLead">
          Szakembereink segítenek megtalálni a számodra megfelelő edzésritmust,
          technikát és terhelést.
        </p>

        <Link className="primaryButton" href="/edzoink">
          Edzők megtekintése
        </Link>
      </section>
    );
  }

  return (
    <section className="pageSectionDark trainersPage">
      <span className="eyebrow">EDZŐINK</span>

      <h1>Szakértő figyelem, valódi fejlődés</h1>

      <div className="trainerGrid">
        {trainers.map((trainer) => (
          <article key={trainer.initials}>
            <span>{trainer.initials}</span>
            <h2>{trainer.name}</h2>
            <strong>{trainer.focus}</strong>
            <p>{trainer.bio}</p>

            <div className="trainerContacts">
              <a href={trainer.phoneHref} aria-label={`${trainer.name} hívása`}>
                <Phone size={17} /> {trainer.phone}
              </a>

              <a
                href={trainer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${trainer.name} Instagram oldala`}
              >
                <InstagramLogo /> Instagram: {trainer.instagram}
              </a>

              <a
                href={trainer.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${trainer.name} Facebook oldala`}
              >
                <FacebookLogo /> Facebook: {trainer.facebook}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}