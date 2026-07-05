export type NewsPost = {
    image: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    content: string[];
  };
  
  export const newsPosts: NewsPost[] = [
    {
      image: "/images/gym-2.jpg",
      category: "GÉPPARK",
      date: "2026. július 2.",
      title: "Új lábgépek és plate-loaded állomások érkeznek",
      excerpt:
        "Négy vadonatúj állomással bővül a súlytárcsás zóna — nagyobb terhelhetőség, kíméletesebb mozgáspálya, gyorsabb súlyváltás edzés közben.",
      content: [
        "Júliustól több új alsótest-fókuszú géppel bővül a Concept Gym gépparkja. A fejlesztés célja, hogy a lábedzések még hatékonyabbak, biztonságosabbak és változatosabbak legyenek.",
        "Az új plate-loaded állomások nagy terhelhetőséget, stabil mozgáspályát és prémium edzésérzetet biztosítanak.",
        "A bővítés része annak a hosszú távú célunknak, hogy a Concept Gym mindig modern, fejlődésorientált és motiváló edzőkörnyezet maradjon.",
      ],
    },
    {
      image: "/images/gym-1.jpg",
      category: "NYITVATARTÁS",
      date: "2026. június 24.",
      title: "Mostantól 05:30-tól nyitva vagyunk hétköznap",
      excerpt:
        "A kora reggeli edzők kérésére korábbra hoztuk a nyitást, hogy a munkanap előtt is nyugodtan, tömeg nélkül tudj edzeni.",
      content: [
        "A visszajelzéseitek alapján hétköznapokon már 05:30-tól várunk benneteket.",
        "A reggeli időszak nyugodtabb, fókuszáltabb légkört ad, így tökéletes választás azoknak, akik szeretik csendesebben kezdeni a napot.",
        "A hétvégi nyitvatartás változatlanul 07:00–21:00 között marad.",
      ],
    },
    {
      image: "/images/gym-3.jpg",
      category: "AKCIÓ",
      date: "2026. június 15.",
      title: "Ingyenes állapotfelmérés minden új éves bérletesnek",
      excerpt:
        "Testösszetétel-mérés, célkitűzés és egy rövid konzultáció szakértő edzőinkkel — mindezt ajándékba adjuk minden új éves bérlet mellé.",
      content: [
        "Az éves bérletet választó új tagok számára ajándék állapotfelmérést biztosítunk.",
        "A felmérés része egy rövid konzultáció, ahol átbeszéljük az edzésmúltadat, a céljaidat és az esetleges korlátaidat.",
        "A cél nem egy sablonprogram átadása, hanem egy jó kiindulópont megteremtése a hosszú távú fejlődéshez.",
      ],
    },
  ];