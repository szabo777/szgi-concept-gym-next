import { Check } from "lucide-react";
import { services } from "@/data/services";

export default function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="twoColumn">
        <div>
          <span className="eyebrow">RÓLUNK</span>

          <h2>Nem csak terem, hanem egy közösség</h2>

          <p>
            A Concept Gym egy nagy intenzitású, modern edzőtér Astoria
            közelében, Budapest egyik legjobban megközelíthető pontján. A terem
            története a klasszikus erőedzés tiszteletéből indul, de a mai napig
            a fejlődés, a precíz géppark és a motiváló közösségi hangulat viszi
            előre.
          </p>

          <div className="pills">
            <span>Központi lokáció</span>
            <span>Erőzóna</span>
            <span>Wellness regeneráció</span>
          </div>
        </div>

        <article className="serviceCard">
          <h3>Prémium szolgáltatások</h3>

          {services.map((service) => (
            <p key={service}>
              <Check size={18} /> {service}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}