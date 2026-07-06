import { Clock, CreditCard, MapPin, Phone } from "lucide-react";
import { FacebookLogo, InstagramLogo } from "@/components/BrandIcons";

export default function ContactSection() {
  return (
    <section className="pageSectionDark contactPage">
      <span className="eyebrow">KAPCSOLAT</span>
      <h1>Itt találsz meg minket.</h1>

      <p className="centerLead">
        Kérdésed van a bérletekkel, gépparkkal, edzőkkel vagy nyitvatartással
        kapcsolatban? Keress minket telefonon, közösségi felületeinken, vagy
        gyere be személyesen a recepciónkra.
      </p>

      <div className="contactLayout">
        <article className="contactMainCard">
          <div className="contactMainTop">
            <span className="logoIcon">CG</span>
            <div>
              <small>CONCEPT GYM BUDAPEST</small>
              <h2>Deep black. Sharp focus. Real work.</h2>
            </div>
          </div>

          <p>
            Prémium edzőtér Astoria közelében, modern gépparkkal, szabadsúlyos
            zónával, wellness részleggel és szakértő edzői háttérrel.
          </p>

          <div className="contactHighlight">
            <strong>Recepció</strong>
            <span>
              Bérletvásárlás, napijegy, információ és általános ügyintézés a
              helyszínen.
            </span>
          </div>

          <div className="contactSocials">
            <a
              href="https://www.instagram.com/conceptgym"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo /> @conceptgym
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo /> Concept Gym Budapest
            </a>
          </div>
        </article>

        <div className="contactCards">
          <article className="contactMiniCard">
            <MapPin />
            <span>Cím</span>
            <h3>1053 Budapest, Károlyi utca 12.</h3>
            <p>Astoria közelében, könnyen megközelíthető központi lokáció.</p>
          </article>

          <article className="contactMiniCard">
            <Phone />
            <span>Telefon</span>
            <h3>
              <a href="tel:+36301234567">+36 30 123 4567</a>
            </h3>
            <p>Hívj minket bérlet, edzői kérdés vagy teremhasználat miatt.</p>
          </article>

          <article className="contactMiniCard">
            <Clock />
            <span>Nyitvatartás</span>
            <h3>H-P: 05:30–23:00</h3>
            <p>Szo-V: 07:00–21:00</p>
          </article>

          <article className="contactMiniCard">
            <CreditCard />
            <span>Fizetés</span>
            <h3>Készpénz / Bankkártya</h3>
            <p>A recepciónál mindkét fizetési mód elérhető.</p>
          </article>
        </div>
      </div>

      <div className="contactBottomStrip">
        <div>
          <strong>Első alkalommal jössz?</strong>
          <p>
            Hozz kényelmes edzőruhát, zárható szekrényt biztosítunk, a
            recepción pedig segítünk a napijegy vagy bérlet kiválasztásában.
          </p>
        </div>
      </div>
    </section>
  );
}