export type PriceMode = "full" | "discount";

export type PricingItem = {
  title: string;
  full: string;
  discount: string;
  short: string;
  description: string;
  points: string[];
};

export const pricing: PricingItem[] = [
  {
    title: "Napijegy",
    full: "3 500 Ft",
    discount: "3 500 Ft",
    short:
      "Egyszeri belépés teljes teremhasználattal, öltözővel, gépparkkal és wellness hozzáféréssel.",
    description:
      "A napijegy ideális választás, ha szeretnéd kipróbálni a Concept Gym hangulatát, gépparkját és prémium környezetét. Egy alkalomra biztosít teljes hozzáférést az edzőtérhez, a szabadsúlyos zónához, a gépekhez, az öltözőkhöz, valamint a wellness és szauna részleghez.",
    points: [
      "Egyszeri belépés az edzőtérbe",
      "Teljes géppark és szabadsúlyos zóna használata",
      "Wellness és szauna használat",
      "Öltöző, zuhanyzó és szekrény",
    ],
  },
  {
    title: "Havi bérlet",
    full: "24 900 Ft",
    discount: "19 990 Ft",
    short:
      "Rendszeres edzéshez, korlátlan látogatással és teljes Concept Gym hozzáféréssel.",
    description:
      "A havi bérlet azoknak szól, akik következetesen szeretnének fejlődni. Harminc napon keresztül korlátlan belépést ad a Concept Gym edzőterébe, gépparkjába, szabadsúlyos zónájába, öltözőibe, valamint a wellness és szauna szolgáltatásokhoz.",
    points: [
      "Korlátlan látogatás 30 napig",
      "Prémium géppark és erőzóna használata",
      "Wellness és szauna használat",
      "Ingyenes parkolási lehetőség",
    ],
  },
  {
    title: "Éves bérlet",
    full: "204 900 Ft",
    discount: "199 200 Ft",
    short:
      "Hosszú távú fejlődéshez, teljes éves hozzáféréssel és extra személyi edzéssel.",
    description:
      "Az éves bérlet a hosszú távú, tudatos fejlődésre épít. Egy teljes évre biztosít korlátlan hozzáférést a teremhez, a prémium gépparkhoz, a wellness szolgáltatásokhoz, valamint ajándék személyi edzést is tartalmaz.",
    points: [
      "Korlátlan látogatás 365 napig",
      "Teljes terem- és géphasználat",
      "Wellness és szauna használat",
      "Ajándék személyi edzés 2 alkalommal",
    ],
  },
];