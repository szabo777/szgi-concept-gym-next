export type WorkoutGroup = {
    muscle: string;
    exercises: string[];
  };
  
  export type WorkoutDay = {
    name: string;
    groups: WorkoutGroup[];
  };
  
  export type WorkoutPlan = {
    title: string;
    tag: string;
    description: string;
    days: WorkoutDay[];
  };
  
  export const workoutPlans: WorkoutPlan[] = [
    {
      title: "Push / Pull / Legs",
      tag: "Ajánlott edzésterv",
      description:
        "Heti 3–6 edzéshez ideális felosztás, ahol külön napokra kerülnek a nyomó, húzó és lábgyakorlatok.",
      days: [
        {
          name: "Push nap",
          groups: [
            {
              muscle: "Mell",
              exercises: [
                "Fekvenyomás 4x6–8",
                "Ferdepados nyomás 3x8–10",
                "Tárogatás gépen 3x12–15",
              ],
            },
            {
              muscle: "Váll",
              exercises: [
                "Vállból nyomás 4x6–8",
                "Oldalemelés 3x12–15",
                "Hátsó váll gépen 3x12–15",
              ],
            },
            {
              muscle: "Tricepsz",
              exercises: [
                "Csigás letolás 3x10–12",
                "Francia nyomás 3x8–10",
                "Tolódzkodás gépen 3x10",
              ],
            },
          ],
        },
        {
          name: "Pull nap",
          groups: [
            {
              muscle: "Hát",
              exercises: [
                "Lehúzás mellhez 4x8–10",
                "Evezés gépen 4x8–10",
                "Merev karos lehúzás 3x12",
              ],
            },
            {
              muscle: "Bicepsz",
              exercises: [
                "Rudas bicepsz 3x8–10",
                "Kalapács bicepsz 3x10–12",
                "Scott pad 3x12",
              ],
            },
            {
              muscle: "Törzs",
              exercises: ["Hasprés gépen 3x15", "Plank 3x45 mp", "Lábemelés 3x12"],
            },
          ],
        },
        {
          name: "Legs nap",
          groups: [
            {
              muscle: "Comb",
              exercises: ["Guggolás 4x6–8", "Lábtoló 4x10", "Combfeszítő gép 3x12"],
            },
            {
              muscle: "Hajlító",
              exercises: ["Román felhúzás 4x8", "Combhajlító gép 3x12", "Hip thrust 3x10"],
            },
            {
              muscle: "Vádli",
              exercises: ["Álló vádli 4x12–15", "Ülő vádli 4x15", "Lépcsőző 8–10 perc"],
            },
          ],
        },
      ],
    },
    {
      title: "Upper / Lower",
      tag: "Ajánlott edzésterv",
      description:
        "Letisztult felsőtest–alsótest bontás, amely kezdőknek és középhaladóknak is jól átlátható fejlődési rendszert ad.",
      days: [
        {
          name: "Upper A",
          groups: [
            {
              muscle: "Mell",
              exercises: ["Fekvenyomás 4x6–8", "Gépes mellnyomás 3x10", "Tárogatás 3x12"],
            },
            {
              muscle: "Hát",
              exercises: ["Lehúzás 4x8", "Evezés 4x8–10", "Pullover gép 3x12"],
            },
            {
              muscle: "Kar",
              exercises: ["Bicepsz rúddal 3x10", "Tricepsz letolás 3x10", "Kalapács bicepsz 3x12"],
            },
          ],
        },
        {
          name: "Lower A",
          groups: [
            {
              muscle: "Comb",
              exercises: ["Guggolás 4x6", "Lábtoló 4x10", "Kitörés 3x10/láb"],
            },
            {
              muscle: "Hajlító",
              exercises: ["Román felhúzás 4x8", "Combhajlító 3x12", "Hip thrust 3x10"],
            },
            {
              muscle: "Vádli / törzs",
              exercises: ["Vádli gépen 4x15", "Plank 3x45 mp", "Hasprés 3x15"],
            },
          ],
        },
        {
          name: "Pihenő / regeneráció",
          groups: [
            {
              muscle: "Regeneráció",
              exercises: ["Könnyű séta 20 perc", "Mobilitás 10 perc", "Szauna vagy nyújtás"],
            },
          ],
        },
        {
          name: "Upper B",
          groups: [
            {
              muscle: "Váll",
              exercises: ["Vállból nyomás 4x8", "Oldalemelés 3x15", "Hátsó váll 3x15"],
            },
            {
              muscle: "Hát",
              exercises: ["Evezés rúddal 4x8", "Lehúzás szűken 3x10", "Face pull 3x15"],
            },
            {
              muscle: "Mell / kar",
              exercises: ["Ferdepados nyomás 3x10", "Tolódzkodás 3x8", "Csigás kar 3x12"],
            },
          ],
        },
        {
          name: "Lower B",
          groups: [
            {
              muscle: "Farizom",
              exercises: ["Hip thrust 4x8", "Bolgár guggolás 3x10/láb", "Tárogató gép 3x15"],
            },
            {
              muscle: "Comb",
              exercises: ["Elölguggolás 4x6", "Combfeszítő 3x12", "Lábtoló 3x12"],
            },
            {
              muscle: "Hajlító / vádli",
              exercises: ["Combhajlító 4x12", "Román felhúzás 3x10", "Vádli 4x15"],
            },
          ],
        },
      ],
    },
    {
      title: "Arnold Split",
      tag: "Ajánlott edzésterv",
      description:
        "Klasszikus, magasabb volumenű bontás haladóbb vendégeknek, ahol a fő izomcsoportok külön hangsúlyt kapnak.",
      days: [
        {
          name: "Mell / hát",
          groups: [
            {
              muscle: "Mell",
              exercises: ["Fekvenyomás 4x6–8", "Ferdepados nyomás 4x8", "Tárogatás 3x12"],
            },
            {
              muscle: "Hát",
              exercises: ["Húzódzkodás vagy lehúzás 4x8", "Evezés 4x8", "Pullover 3x12"],
            },
            {
              muscle: "Törzs",
              exercises: ["Hasprés 3x15", "Lábemelés 3x12", "Plank 3x45 mp"],
            },
          ],
        },
        {
          name: "Váll / kar",
          groups: [
            {
              muscle: "Váll",
              exercises: ["Vállból nyomás 4x8", "Oldalemelés 4x12", "Hátsó váll 3x15"],
            },
            {
              muscle: "Bicepsz",
              exercises: ["Rudas bicepsz 4x8", "Scott pad 3x10", "Kalapács bicepsz 3x12"],
            },
            {
              muscle: "Tricepsz",
              exercises: ["Szűknyomás 4x8", "Csigás letolás 3x12", "Francia nyomás 3x10"],
            },
          ],
        },
        {
          name: "Láb",
          groups: [
            {
              muscle: "Comb",
              exercises: ["Guggolás 4x6", "Lábtoló 4x10", "Combfeszítő 3x12"],
            },
            {
              muscle: "Hajlító",
              exercises: ["Román felhúzás 4x8", "Combhajlító 3x12", "Hip thrust 3x10"],
            },
            {
              muscle: "Vádli",
              exercises: ["Álló vádli 4x15", "Ülő vádli 4x15", "Lépcsőző 10 perc"],
            },
          ],
        },
      ],
    },
  ];