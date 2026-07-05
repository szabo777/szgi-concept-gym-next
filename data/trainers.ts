export type Trainer = {
    initials: string;
    name: string;
    focus: string;
    phone: string;
    phoneHref: string;
    instagram: string;
    instagramUrl: string;
    facebook: string;
    facebookUrl: string;
    bio: string;
  };
  
  export const trainers: Trainer[] = [
    {
      initials: "BK",
      name: "Barta Krisztián",
      focus: "Erőemelés • Technikai alapok",
      phone: "+36 30 111 2233",
      phoneHref: "tel:+36301112233",
      instagram: "@barta_strength",
      instagramUrl: "https://www.instagram.com/barta_strength",
      facebook: "Barta Krisztián Coach",
      facebookUrl: "https://www.facebook.com/",
      bio: "Precíz mozgásminta, stabil alapok és mérhető erőfejlődés.",
    },
    {
      initials: "NL",
      name: "Nagy Lilla",
      focus: "Alakformálás • Mobilitás",
      phone: "+36 30 222 3344",
      phoneHref: "tel:+36302223344",
      instagram: "@lilla_training",
      instagramUrl: "https://www.instagram.com/lilla_training",
      facebook: "Nagy Lilla Trainer",
      facebookUrl: "https://www.facebook.com/",
      bio: "Női erőnléti programok, mobilitás és fenntartható rutinok.",
    },
    {
      initials: "FM",
      name: "Farkas Máté",
      focus: "Izomtömeg-növelés • Táplálkozás",
      phone: "+36 30 333 4455",
      phoneHref: "tel:+36303334455",
      instagram: "@mate_muscle",
      instagramUrl: "https://www.instagram.com/mate_muscle",
      facebook: "Farkas Máté Fitness",
      facebookUrl: "https://www.facebook.com/",
      bio: "Tömegnövelő edzéstervezés, táplálkozási irányok és kontroll.",
    },
  ];