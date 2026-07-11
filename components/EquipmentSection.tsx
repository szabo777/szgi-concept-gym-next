"use client";

import { Dumbbell } from "lucide-react";
import {
  equipment,
  type EquipmentCategory,
} from "@/data/equipment";
import { useMemo, useState } from "react";

const categories: EquipmentCategory[] = [
  "Összes",
  "Kardió",
  "Súlytárcsás",
  "Szabadsúlyos",
];

export default function EquipmentSection() {
  const [category, setCategory] = useState<EquipmentCategory>("Összes");

  const filteredEquipment = useMemo(
    () =>
      equipment.filter(
        (item) => category === "Összes" || item.category === category
      ),
    [category]
  );

  return (
    <section className="pageSectionDark equipmentPage">
      <span className="eyebrow">GÉPPARKUNK</span>
      <h1>Professzionális gépek minden fókuszhoz</h1>

      <p className="centerLead">
        A Concept Gym gépparkja úgy lett kialakítva, hogy kezdők és haladók is
        biztonságosan, hatékonyan és magas intenzitással tudjanak dolgozni.
      </p>

      <div className="filterBar">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "filterActive" : ""}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="equipmentGrid">
        {filteredEquipment.map((item) => (
          <article key={item.name}>
            <div className="equipmentTop">
              <Dumbbell />
              <span>{item.badge}</span>
            </div>

            <small>{item.category}</small>
            <h2>{item.name}</h2>
            <strong>{item.focus}</strong>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}