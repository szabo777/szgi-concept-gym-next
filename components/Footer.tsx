import { Clock, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <article>
          <h3>CONCEPT GYM</h3>
          <p>Deep black. Sharp focus. Real work.</p>
        </article>

        <article>
          <MapPin />
          <span>Cím</span>
          <p>1053 Budapest, Károlyi utca 12.</p>
        </article>

        <article>
          <Phone />
          <span>Telefonszám</span>
          <p>
            <a href="tel:+36305550198">+36 30 555 0198</a>
          </p>
        </article>

        <article>
          <Clock />
          <span>Nyitvatartási idő</span>
          <p>H-P: 05:30–23:00 • Szo-V: 07:00–21:00</p>
        </article>
      </div>

      <small>© 2026 Concept Gym. Minden jog fenntartva.</small>
    </footer>
  );
}