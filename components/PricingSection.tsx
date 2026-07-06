"use client";

import { Check, CreditCard, WalletCards } from "lucide-react";
import { useState } from "react";
import { pricing, type PriceMode } from "@/data/pricing";

type PricingSectionProps = {
  isStandalone?: boolean;
};

export default function PricingSection({ isStandalone = false }: PricingSectionProps) {
  const [mode, setMode] = useState<PriceMode>("full");

  return (
    <section
      className={isStandalone ? "pageSectionDark pricingPage" : "pricingHome"}
    >
      <span className="eyebrow">ÁRAK</span>
      <h1>Válassz bérletet az edzésed tempójához.</h1>

      <div className="toggle">
        <button
          className={mode === "full" ? "selectedToggle" : ""}
          onClick={() => setMode("full")}
          type="button"
        >
          Teljes árú
        </button>

        <button
          className={mode === "discount" ? "selectedToggle" : ""}
          onClick={() => setMode("discount")}
          type="button"
        >
          Diák / Nyugdíjas
        </button>
      </div>

      <div className="paymentMethods">
        <span>
          <WalletCards size={18} /> Készpénz
        </span>
        <span>
          <CreditCard size={18} /> Bankkártya
        </span>
      </div>

      <p className="paymentNote">
        Bérleteinket és napijegyeinket recepciónknál kártyával és készpénzzel
        is ki tudod fizetni.
      </p>

      <div className="priceGrid">
        {pricing.map((pass) => {
          const price = mode === "full" ? pass.full : pass.discount;

          return (
            <article key={pass.title} className="priceCard">
              <h2>{pass.title}</h2>
              <strong>{price}</strong>

              <p className="priceDescription">
                {isStandalone ? pass.description : pass.short}
              </p>

              <ul>
                {pass.points.map((point) => (
                  <li key={point}>
                    <Check size={16} /> {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}