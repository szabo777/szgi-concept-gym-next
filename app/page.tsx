"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  CreditCard,
  Dumbbell,
  MapPin,
  Menu,
  Phone,
  WalletCards,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type View =
  | "home"
  | "equipment"
  | "contact"
  | "plans"
  | "pricing"
  | "trainers"
  | "news";

type PriceMode = "full" | "discount";
type EquipmentCategory = "Összes" | "Kardió" | "Súlytárcsás" | "Szabadsúlyos";

type NewsPost = {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
};

type ModalState = { type: "news"; post: NewsPost } | null;

const navItems: { label: string; view: View }[] = [
  { label: "Főoldal", view: "home" },
  { label: "Gépparkunk", view: "equipment" },
  { label: "Kapcsolat", view: "contact" },
  { label: "Edzéstervek", view: "plans" },
  { label: "Árak", view: "pricing" },
  { label: "Edzőink", view: "trainers" },
  { label: "Híreink", view: "news" },
];

const services = [
  "Prémium Wellness Részleg",
  "Kényeztető Finn Szauna",
  "Modern Szolárium",
  "Több mint X professzionális gépből álló géppark",
  "Személyre szabott edzéstervezés",
  "Szakértő táplálkozási tanácsadás",
  "Tágas szabadsúlyos övezet",
  "Motiváló csoportos órák",
];

const pricing = [
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

const equipment = [
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


const trainers = [
  {
    initials: "BK",
    name: "Barta Krisztián",
    focus: "Erőemelés • Technikai alapok",
    phone: "+36 30 111 2233",
    instagram: "@barta_strength",
    facebook: "Barta Krisztián Coach",
    bio: "Precíz mozgásminta, stabil alapok és mérhető erőfejlődés.",
  },
  {
    initials: "NL",
    name: "Nagy Lilla",
    focus: "Alakformálás • Mobilitás",
    phone: "+36 30 222 3344",
    instagram: "@lilla_training",
    facebook: "Nagy Lilla Trainer",
    bio: "Női erőnléti programok, mobilitás és fenntartható rutinok.",
  },
  {
    initials: "FM",
    name: "Farkas Máté",
    focus: "Izomtömeg-növelés • Táplálkozás",
    phone: "+36 30 333 4455",
    instagram: "@mate_muscle",
    facebook: "Farkas Máté Fitness",
    bio: "Tömegnövelő edzéstervezés, táplálkozási irányok és kontroll.",
  },
];

const workoutPlans = [
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
            exercises: ["Fekvenyomás 4x6–8", "Ferdepados nyomás 3x8–10", "Tárogatás gépen 3x12–15"],
          },
          {
            muscle: "Váll",
            exercises: ["Vállból nyomás 4x6–8", "Oldalemelés 3x12–15", "Hátsó váll gépen 3x12–15"],
          },
          {
            muscle: "Tricepsz",
            exercises: ["Csigás letolás 3x10–12", "Francia nyomás 3x8–10", "Tolódzkodás gépen 3x10"],
          },
        ],
      },
      {
        name: "Pull nap",
        groups: [
          {
            muscle: "Hát",
            exercises: ["Lehúzás mellhez 4x8–10", "Evezés gépen 4x8–10", "Merev karos lehúzás 3x12"],
          },
          {
            muscle: "Bicepsz",
            exercises: ["Rudas bicepsz 3x8–10", "Kalapács bicepsz 3x10–12", "Scott pad 3x12"],
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

const newsPosts: NewsPost[] = [
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

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [priceMode, setPriceMode] = useState<PriceMode>("full");
  const [category, setCategory] = useState<EquipmentCategory>("Összes");
  const [modal, setModal] = useState<ModalState>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const initialView = localStorage.getItem("view") as View || "home";
    setView(initialView);
    localStorage.setItem("view", initialView);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
  
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
  
      setScrollProgress((scrollTop / docHeight) * 100);
    };
  
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);
  
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);
  const filteredEquipment = useMemo(
    () =>
      equipment.filter(
        (item) => category === "Összes" || item.category === category
      ),
    [category]
  );

  const switchView = (nextView: View) => {
    setView(nextView);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="scrollProgress">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
  
      <CustomCursor />

      <header className="header">
        <button
          className="logoButton"
          onClick={() => switchView("home")}
          aria-label="Concept Gym főoldal"
        >
          <span className="logoIcon">CG</span>
          <span className="logoText">CONCEPT GYM</span>
        </button>

        <nav className="desktopNav" aria-label="Fő navigáció">
          {navItems.map((item) => (
            <button
              key={item.view}
              className={view === item.view ? "activeNav" : ""}
              onClick={() => switchView(item.view)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="menuButton"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Menü megnyitása"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobileMenu">
          {navItems.map((item) => (
            <button key={item.view} onClick={() => switchView(item.view)}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main key={view} className="fadeView">
        {view === "home" && (
          <HomeView
            switchView={switchView}
            priceMode={priceMode}
            setPriceMode={setPriceMode}
          />
        )}

        {view === "pricing" && (
          <PricingView mode={priceMode} setMode={setPriceMode} isStandalone />
        )}

        {view === "equipment" && (
          <EquipmentView
            category={category}
            setCategory={setCategory}
            items={filteredEquipment}
          />
        )}

        {view === "contact" && <ContactView />}

        {view === "plans" && <PlansView switchView={switchView} />}

        {view === "trainers" && <TrainersView />}

        {view === "news" && (
          <NewsView openPost={(post) => setModal({ type: "news", post })} />
        )}
      </main>

      <Footer />

      {modal?.type === "news" && (
        <div className="modalBackdrop">
          <article className="newsModal modalWide">
            <button
              type="button"
              className="modalClose"
              onClick={() => setModal(null)}
              aria-label="Bezárás"
            >
              <X size={22} />
            </button>

            <Image
              src={modal.post.image}
              alt={modal.post.title}
              width={900}
              height={420}
            />

            <div className="newsModalBody">
              <span className="eyebrow">{modal.post.category}</span>
              <small>{modal.post.date}</small>
              <h2>{modal.post.title}</h2>
              {modal.post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      )}
    </div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", moveCursor);
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  return (
    <>
      <div
        className="cursorGlow"
        style={{
          transform: `translate3d(${position.x - 34}px, ${position.y - 34}px, 0)`,
        }}
      />
      <div
        className="cursorDot"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
    </>
  );
}

function HomeView({
  switchView,
  priceMode,
  setPriceMode,
}: {
  switchView: (view: View) => void;
  priceMode: PriceMode;
  setPriceMode: (mode: PriceMode) => void;
}) {
  const heroSlides = [
    {
      src: "/images/gym-1.jpg",
      label: "INTERIOR",
      title: "Sötét, fókuszált edzőtér",
    },
    {
      src: "/images/gym-2.jpg",
      label: "GÉPPARK",
      title: "Prémium gépek minden izomcsoportra",
    },
    {
      src: "/images/gym-3.jpg",
      label: "SÚLYZÓK",
      title: "Szabadsúlyos zóna komoly munkához",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  return (
    <>
      <section className="heroSection">
        <div className="heroGrid">
          <div>
            <span className="eyebrow">BUDAPEST • ERŐ • FÓKUSZ</span>
            <h1>Hozd ki magadból a maximumot.</h1>
            <p className="heroLead">
              A Concept Gym modern, lendületes edzőtér prémium gépparkkal,
              intenzív hangulattal és olyan környezettel, ahol minden edzésnek
              tétje van.
            </p>
            <button
              className="primaryButton"
              onClick={() => switchView("pricing")}
            >
              Nézd meg a bérleteket
            </button>
          </div>

          <aside className="statCard">
            <Dumbbell size={30} />
            <strong>1200 m² edzőtér</strong>
            <span>Premium géppark • Wellness • Személyi edzés</span>
          </aside>
        </div>

        <div className="showcaseGrid">
          <div className="heroCarousel">
            {heroSlides.map((slide, index) => (
              <article
                key={slide.label}
                className={
                  index === activeSlide
                    ? "heroCarouselSlide heroCarouselSlideActive"
                    : "heroCarouselSlide"
                }
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={900}
                  height={560}
                  priority={index === 0}
                />
                <div className="heroCarouselText">
                  <span>{slide.label}</span>
                  <h3>{slide.title}</h3>
                </div>
              </article>
            ))}

            <button
              className="carouselArrow carouselArrowLeft"
              onClick={prevSlide}
              aria-label="Előző kép"
            >
              ‹
            </button>

            <button
              className="carouselArrow carouselArrowRight"
              onClick={nextSlide}
              aria-label="Következő kép"
            >
              ›
            </button>

            <div className="carouselDots">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  className={index === activeSlide ? "carouselDotActive" : ""}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`${index + 1}. kép`}
                />
              ))}
            </div>
          </div>

          <article className="newsCardWhite">
            <span className="eyebrow">AKTUÁLIS HÍREINK</span>
            <h2>Új gépek, friss órarend, erősebb közösség.</h2>
            <ul>
              <li>Júliustól új lábgépek és plate-loaded állomások érkeznek.</li>
              <li>Reggeli nyitás 05:30-tól hétköznapokon.</li>
              <li>Ingyenes állapotfelmérés új VIP bérleteseknek.</li>
            </ul>
          </article>
        </div>
      </section>

      <AboutSection />

      <PricingView
        mode={priceMode}
        setMode={setPriceMode}
        isStandalone={false}
      />

      <TrainersPromo switchView={switchView} />
    </>
  );
}

function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="twoColumn">
        <div>
          <span className="eyebrow">RÓLUNK</span>
          <h2>Nem csak terem, hanem egy közösség.</h2>
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
          {services.map((item) => (
            <p key={item}>
              <Check size={18} /> {item}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}

function PricingView({
  mode,
  setMode,
  isStandalone,
}: {
  mode: PriceMode;
  setMode: (mode: PriceMode) => void;
  isStandalone?: boolean;
}) {
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
        >
          Teljes árú
        </button>
        <button
          className={mode === "discount" ? "selectedToggle" : ""}
          onClick={() => setMode("discount")}
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

function TrainersPromo({ switchView }: { switchView: (view: View) => void }) {
  return (
    <section className="trainersHomeSection">
      <span className="eyebrow">EDZŐINK</span>
      <h2>Tapasztalt edzők,<br />
        tiszta irány, 
        valódi fejlődés.</h2>
      
      <p className="centerLead">
        Szakembereink segítenek megtalálni a számodra megfelelő edzésritmust,
        technikát és terhelést.
      </p>

      <div className="trainerPreview">
        {trainers.map((trainer) => (
          <article key={trainer.initials}>
            <span>{trainer.initials}</span>
            <h3>{trainer.name}</h3>
            <p>{trainer.focus}</p>
          </article>
        ))}
      </div>

      <button className="primaryButton" onClick={() => switchView("trainers")}>
        Edzők megtekintése
      </button>
    </section>
  );
}

function EquipmentView({
  category,
  setCategory,
  items,
}: {
  category: EquipmentCategory;
  setCategory: (category: EquipmentCategory) => void;
  items: typeof equipment;
}) {
  const categories: EquipmentCategory[] = [
    "Összes",
    "Kardió",
    "Súlytárcsás",
    "Szabadsúlyos",
  ];

  return (
    <section className="pageSectionDark equipmentPage">
      <span className="eyebrow">GÉPPARKUNK</span>
      <h1>Professzionális gépek minden fókuszhoz.</h1>
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
          >
            {item}
          </button>
        ))}
      </div>

      <div className="equipmentGrid">
        {items.map((item) => (
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



function ContactView() {
  return (
    <section className="pageSectionDark contactPage">
      <span className="eyebrow">KAPCSOLAT</span>
      <h1>Itt találsz meg minket.</h1>

      <p className="centerLead">
        Kérdésed van a bérletekkel, gépparkkal, edzőkkel vagy nyitvatartással kapcsolatban?
        Keress minket telefonon, közösségi felületeinken, vagy gyere be személyesen a recepciónkra.
      </p>

      <div className="contactLayout">
        <article className="contactMainCard">
          <div className="contactMainTop">
            
            <div>
              <small>CONCEPT GYM BUDAPEST</small>
              <h2>Deep black. Sharp focus. Real work.</h2>
            </div>
          </div>

          <p>
            Prémium edzőtér Astoria közelében, modern gépparkkal, szabadsúlyos zónával,
            wellness részleggel és szakértő edzői háttérrel.
          </p>

          <div className="contactHighlight">
            <strong>Recepció</strong>
            <span>Bérletvásárlás, napijegy, információ és általános ügyintézés a helyszínen.</span>
          </div>

          <div className="contactSocials">
            <span>
              <InstagramLogo /> @conceptgym
            </span>
            <span>
              <FacebookLogo /> Concept Gym Budapest
            </span>
          </div>
        </article>

        <div className="contactCards">
          <article className="contactMiniCard">
            <MapPin />
            <span>Cím</span>
            <h3>1053 Budapest, Károlyi utca 12.</h3>
            <p>Astoria közelében, könnyen megközelíthető központi lokáció.</p>
          </article>

          <article className="contactMiniCard">
            <Phone />
            <span>Telefon</span>
            <h3>+36 30 123 4567</h3>
            <p>Hívj minket bérlet, edzői kérdés vagy teremhasználat miatt.</p>
          </article>

          <article className="contactMiniCard">
            <Clock />
            <span>Nyitvatartás</span>
            <h3>H-P: 05:30–23:00</h3>
            <h3>Szo-V: 07:00–21:00</h3>
          </article>

          <article className="contactMiniCard">
            <CreditCard />
            <span>Fizetés</span>
            <h3>Készpénz / Bankkártya</h3>
            <p>A recepciónál mindkét fizetési mód elérhető.</p>
          </article>
        </div>
      </div>

      <div className="contactBottomStrip">
        <div>
          <strong>Első alkalommal jössz?</strong>
          <p>
            Hozz kényelmes edzőruhát, zárható szekrényt biztosítunk, a recepción pedig segítünk
            a napijegy vagy bérlet kiválasztásában.
          </p>
        </div>

        <button className="primaryButton" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Vissza az oldal tetejére
        </button>
      </div>
    </section>
  );
}


function PlansView({ switchView }: { switchView: (view: View) => void }) {
  const [openPlan, setOpenPlan] = useState(0);

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
        <p>
          Pontosabb, személyre szabott információért keresd fel edzőinket.
        </p>
        <button className="primaryButton" onClick={() => switchView("trainers")}>
          Edzőink elérhetőségei <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function TrainersView() {
  return (
    <section className="pageSectionDark trainersPage">
      <span className="eyebrow">EDZŐINK</span>
      <h1>Szakértő figyelem, valódi fejlődés.</h1>

      <div className="trainerGrid">
        {trainers.map((trainer) => (
          <article key={trainer.initials}>
            <span>{trainer.initials}</span>
            <h2>{trainer.name}</h2>
            <strong>{trainer.focus}</strong>
            <p>{trainer.bio}</p>

            <div className="trainerContacts">
              <p>
                <Phone size={17} /> {trainer.phone}
              </p>
              <p>
                <InstagramLogo /> Instagram: {trainer.instagram}
              </p>
              <p>
                <FacebookLogo /> Facebook: {trainer.facebook}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsView({ openPost }: { openPost: (post: NewsPost) => void }) {
  return (
    <section className="pageSectionDark newsPage">
      <span className="eyebrow">HÍREINK</span>
      <h1>Új gépek, friss órarend, erősebb közösség.</h1>

      <div className="newsGrid">
        {newsPosts.map((post) => (
          <article key={post.title} className="newsPostCard">
            <div className="newsImageWrap">
              <Image
                src={post.image}
                alt={post.title}
                width={640}
                height={380}
              />
              <span>{post.category}</span>
            </div>

            <div className="newsPostContent">
              <small>{post.date}</small>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>

              <button onClick={() => openPost(post)}>
                Elolvasom <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
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
          <p>+36 30 555 0198</p>
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

function InstagramLogo({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="brandIcon"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function FacebookLogo({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="brandIcon"
    >
      <path
        d="M14.4 8.2H17V4.4C16.5 4.3 15.4 4 14 4C11.1 4 9.1 5.8 9.1 9V12H6V16.2H9.1V22H13.4V16.2H16.8L17.4 12H13.4V9.4C13.4 8.6 13.7 8.2 14.4 8.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

