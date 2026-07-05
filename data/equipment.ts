export type EquipmentCategory =
  | "Összes"
  | "Kardió"
  | "Súlytárcsás"
  | "Szabadsúlyos";

export type EquipmentItem = {
  name: string;
  category: Exclude<EquipmentCategory, "Összes">;
  focus: string;
  badge: string;
  note: string;
};

export const equipment: EquipmentItem[] = [
  {
    name: "Hammer Strength Chest Press",
    category: "Súlytárcsás",
    focus: "Mellizom • Tricepsz • Váll",
    badge: "Plate-loaded",
    note: "Stabil, nagy terhelésre tervezett mellnyomó gép kontrollált mozgástartománnyal.",
  },
  {
    name: "Plate-Loaded Leg Press",
    category: "Súlytárcsás",
    focus: "Comb • Farizom • Vádli",
    badge: "Láberő",
    note: "Masszív lábtoló mély mozgástartománnyal, komoly alsótest-edzésekhez.",
  },
  {
    name: "Lat Pulldown Station",
    category: "Súlytárcsás",
    focus: "Hát • Bicepsz • Lapocka",
    badge: "Hát fókusz",
    note: "Precíz lehúzó állomás hátizom-fejlesztéshez és erőnléti alapozáshoz.",
  },
  {
    name: "Woodway Curved Treadmill",
    category: "Kardió",
    focus: "Állóképesség • Sprint • Kondíció",
    badge: "Curved",
    note: "Önhajtású futópad intervallokhoz, sprintekhez és intenzív kondicionáláshoz.",
  },
  {
    name: "Assault Bike Pro",
    category: "Kardió",
    focus: "Teljes test • HIIT • Kardió",
    badge: "HIIT",
    note: "Teljes testes kondicionáló eszköz, amely rövid idő alatt magas intenzitást ad.",
  },
  {
    name: "Stair Climber",
    category: "Kardió",
    focus: "Farizom • Comb • Állóképesség",
    badge: "Endurance",
    note: "Lépcsőző gép, amely erősíti az alsótestet és kemény kardióterhelést biztosít.",
  },
  {
    name: "Eleiko Olympic Barbells",
    category: "Szabadsúlyos",
    focus: "Erőemelés • Guggolás • Felhúzás",
    badge: "Olympic",
    note: "Versenyszintű rudak nagy alapgyakorlatokhoz és precíz technikai munkához.",
  },
  {
    name: "Dumbbell Wall 2–60 kg",
    category: "Szabadsúlyos",
    focus: "Teljes test • Izomtömeg • Kontroll",
    badge: "2–60 kg",
    note: "Prémium kézisúlyzó sorozat progresszív terheléshez, kezdőtől haladó szintig.",
  },
  {
    name: "Power Rack Zone",
    category: "Szabadsúlyos",
    focus: "Guggolás • Nyomás • Felhúzás",
    badge: "Erőzóna",
    note: "Tágas rack zóna biztonsági karokkal, padokkal és erőnléti kiegészítőkkel.",
  },
];