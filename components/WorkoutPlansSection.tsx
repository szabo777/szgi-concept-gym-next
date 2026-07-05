"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { workoutPlans } from "@/data/workoutPlans";

export default function WorkoutPlansSection() {
  const [openPlan, setOpenPlan] = useState(-1);

  return (
    <section className="pageSectionDark plansPage">
      <span className="eyebrow">EDZÉSTERVEK</span>
      <h1>Ajánlott edzésterveink.</h1>

      <p className="centerLead">
        Ezek az edzéstervek iránymutatásként szolgálnak. Kezdőknek különösen
        ajánljuk, hogy a pontos terhelés, technika és gyakorlatválasztás miatt
        kérjék ki edzőink véleményét.
      </p>

      <div className="plansGrid">
        {workoutPlans.map((plan, index) => (
          <article
            key={plan.title}
            className={openPlan === index ? "planCard planCardOpen" : "planCard"}
          >
            <button
              className="planHeader"
              onClick={() => setOpenPlan(openPlan === index ? -1 : index)}
              type="button"
            >
              <span>
                <small>{plan.tag}</small>
                <strong>{plan.title}</strong>
              </span>

              <ChevronDown className={openPlan === index ? "rotate" : ""} />
            </button>

            <p>{plan.description}</p>

            {openPlan === index && (
              <div className="planDetails">
                {plan.days.map((day) => (
                  <section key={day.name} className="planDay">
                    <h3>{day.name}</h3>

                    <div className="muscleGrid">
                      {day.groups.map((group) => (
                        <div key={`${day.name}-${group.muscle}`}>
                          <h4>{group.muscle}</h4>
                          <ul>
                            {group.exercises.map((exercise) => (
                              <li key={exercise}>{exercise}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="plansContactBox">
        <p>Pontosabb, személyre szabott információért keresd fel edzőinket.</p>

        <Link className="primaryButton" href="/edzoink">
          Edzőink elérhetőségei <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}