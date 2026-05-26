// Portfolio dei progetti web app (demo + reali) — single source of truth.
// Modulo dati puro: importabile sia da Server che da Client Component.
// I mockup sono render HD generati con AI; ogni immagine include già la
// cornice (iPhone per mobile, finestra browser per desktop).

export type ProjectCategory =
  | "Ristorazione"
  | "Sport & Fitness"
  | "Beauty & Wellness"
  | "Mobilità & Servizi"
  | "Immobiliare"
  | "Pet & Animali";

export type ProjectFormat = "mobile" | "desktop";

/** Una singola schermata di un progetto, in un certo stile. */
export type Shot = {
  /** Sezione mostrata, es. "Home", "Menu", "Prenotazione". */
  label: string;
  /** Nome dello stile a cui appartiene, es. "Marble & Flame". */
  style: string;
  /** Path pubblico dell'immagine (in /public). */
  image: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** Etichetta breve di settore per il badge, es. "Steakhouse · Braceria". */
  sector: string;
  description: string;
  /** Descrizione estesa per la pagina dettaglio. */
  longDescription: string;
  client: string;
  year: string;
  platform: string;
  format: ProjectFormat;
  tags: string[];
  /** Stili disponibili, in ordine (diventano le tab della pagina dettaglio). */
  styles: string[];
  /** Immagine di copertina (card griglia + hero dettaglio). */
  cover: string;
  /** Tutte le schermate generate, raggruppabili per `style`. */
  shots: Shot[];
};

export const categories = [
  "Tutti",
  "Ristorazione",
  "Sport & Fitness",
  "Beauty & Wellness",
  "Mobilità & Servizi",
  "Immobiliare",
  "Pet & Animali",
] as const;

export type CategoryFilter = (typeof categories)[number];

export const projects: Project[] = [
  {
    slug: "la-brace",
    name: "La Brace",
    category: "Ristorazione",
    sector: "Steakhouse · Braceria",
    description:
      "App di ordini e prenotazione per una steakhouse premium. Menu alla brace, dettaglio piatto con grado di cottura, carrello e prenotazione tavolo.",
    longDescription:
      "App mobile per una braceria di fascia alta a Trani. Carne in evidenza con foto alla brace, selezione del grado di cottura e del peso, carrello con ritiro o tavolo, e prenotazione con calendario e scelta sala. Due direzioni di stile: una scura ed elegante (Marble & Flame) e una chiara mediterranea (Oceanside & Ember).",
    client: "La Brace · Trani",
    year: "2026",
    platform: "iOS / Android",
    format: "mobile",
    tags: ["Food Ordering", "Prenotazioni", "Mobile-first"],
    styles: ["Marble & Flame", "Oceanside & Ember"],
    cover: "/work/la-brace/marble-home.png",
    shots: [
      { label: "Home", style: "Marble & Flame", image: "/work/la-brace/marble-home.png" },
      { label: "Menu", style: "Marble & Flame", image: "/work/la-brace/marble-menu.png" },
      { label: "Dettaglio", style: "Marble & Flame", image: "/work/la-brace/marble-dettaglio.png" },
      { label: "Carrello", style: "Marble & Flame", image: "/work/la-brace/marble-carrello.png" },
      { label: "Prenotazione", style: "Marble & Flame", image: "/work/la-brace/marble-prenotazione.png" },
      { label: "Home", style: "Oceanside & Ember", image: "/work/la-brace/oceanside-home.png" },
      { label: "Menu", style: "Oceanside & Ember", image: "/work/la-brace/oceanside-menu.png" },
      { label: "Dettaglio", style: "Oceanside & Ember", image: "/work/la-brace/oceanside-dettaglio.png" },
      { label: "Carrello", style: "Oceanside & Ember", image: "/work/la-brace/oceanside-carrello.png" },
      { label: "Prenotazione", style: "Oceanside & Ember", image: "/work/la-brace/oceanside-prenotazione.png" },
    ],
  },
  {
    slug: "special-sushi-poke",
    name: "Special Sushi Poke",
    category: "Ristorazione",
    sector: "Sushi & Poke · Food Ordering",
    description:
      "Web app premium per ordini sushi & poke a Bari. 149 piatti in 22 categorie, carrello con upsell, checkout e integrazione WhatsApp.",
    longDescription:
      "Case study reale, in produzione. Web app mobile-first per ordinare sushi e poke: catalogo con 149 piatti in 22 categorie, foto reali, carrello con upsell, checkout e integrazione WhatsApp. Costruita con Next.js, React e Zustand.",
    client: "Special Sushi Poke · Bari",
    year: "2026",
    platform: "Web App",
    format: "mobile",
    tags: ["Next.js", "Zustand", "Food Ordering"],
    styles: ["Scuro", "Chiaro"],
    cover: "/work/special-sushi-poke/scuro-home.png",
    shots: [
      { label: "Home", style: "Scuro", image: "/work/special-sushi-poke/scuro-home.png" },
      { label: "Menu", style: "Scuro", image: "/work/special-sushi-poke/scuro-menu.png" },
      { label: "Dettaglio", style: "Scuro", image: "/work/special-sushi-poke/scuro-dettaglio.png" },
      { label: "Carrello", style: "Scuro", image: "/work/special-sushi-poke/scuro-carrello.png" },
      { label: "Home", style: "Chiaro", image: "/work/special-sushi-poke/chiaro-home.png" },
      { label: "Menu", style: "Chiaro", image: "/work/special-sushi-poke/chiaro-menu.png" },
      { label: "Dettaglio", style: "Chiaro", image: "/work/special-sushi-poke/chiaro-dettaglio.png" },
      { label: "Carrello", style: "Chiaro", image: "/work/special-sushi-poke/chiaro-carrello.png" },
    ],
  },
  {
    slug: "brace-kebab",
    name: "Brace Kebab",
    category: "Ristorazione",
    sector: "Kebab · Street Food",
    description:
      "App di ordini per kebab house con tracking dell'ordine in tempo reale e programma fedeltà a punti.",
    longDescription:
      "App mobile per una kebab house moderna: menu con personalizzazione (pane, salse, extra, piccantezza), carrello, tracking dell'ordine con mappa e tempo stimato, e un programma fedeltà a punti con premi. Due stili: caldo crema/arancio e dark red premium.",
    client: "Brace Kebab · Trani",
    year: "2026",
    platform: "iOS / Android",
    format: "mobile",
    tags: ["Food Delivery", "Tracking", "Loyalty"],
    styles: ["Warm Cream", "Dark Red"],
    cover: "/work/brace-kebab/warm-home.png",
    shots: [
      { label: "Home", style: "Warm Cream", image: "/work/brace-kebab/warm-home.png" },
      { label: "Menu", style: "Warm Cream", image: "/work/brace-kebab/warm-menu.png" },
      { label: "Dettaglio", style: "Warm Cream", image: "/work/brace-kebab/warm-dettaglio.png" },
      { label: "Tracking", style: "Warm Cream", image: "/work/brace-kebab/warm-tracking.png" },
      { label: "Fedeltà", style: "Warm Cream", image: "/work/brace-kebab/warm-fedelta.png" },
      { label: "Home", style: "Dark Red", image: "/work/brace-kebab/darkred-home.png" },
      { label: "Menu", style: "Dark Red", image: "/work/brace-kebab/darkred-menu.png" },
      { label: "Dettaglio", style: "Dark Red", image: "/work/brace-kebab/darkred-dettaglio.png" },
      { label: "Tracking", style: "Dark Red", image: "/work/brace-kebab/darkred-tracking.png" },
      { label: "Fedeltà", style: "Dark Red", image: "/work/brace-kebab/darkred-fedelta.png" },
    ],
  },
  {
    slug: "onda-poke",
    name: "Onda Poke",
    category: "Ristorazione",
    sector: "Poke · Healthy Food",
    description:
      "App per un poke restaurant con builder \"crea la tua bowl\", carrello e due direzioni di stile (tropicale e sunset).",
    longDescription:
      "App mobile per un poke restaurant: menu di signature bowl, builder per comporre la propria bowl, carrello e checkout. Due stili a confronto: tropicale fresco e sunset caldo.",
    client: "Onda Poke · Bari",
    year: "2026",
    platform: "iOS / Android",
    format: "mobile",
    tags: ["Food Ordering", "Bowl Builder", "Healthy"],
    styles: ["Tropical", "Sunset"],
    cover: "/work/onda-poke/tropical-home.png",
    shots: [
      { label: "Home", style: "Tropical", image: "/work/onda-poke/tropical-home.png" },
      { label: "Menu", style: "Tropical", image: "/work/onda-poke/tropical-menu.png" },
      { label: "Crea bowl", style: "Tropical", image: "/work/onda-poke/tropical-bowl.png" },
      { label: "Carrello", style: "Tropical", image: "/work/onda-poke/tropical-carrello.png" },
      { label: "Home", style: "Sunset", image: "/work/onda-poke/sunset-home.png" },
      { label: "Menu", style: "Sunset", image: "/work/onda-poke/sunset-menu.png" },
      { label: "Crea bowl", style: "Sunset", image: "/work/onda-poke/sunset-bowl.png" },
      { label: "Carrello", style: "Sunset", image: "/work/onda-poke/sunset-carrello.png" },
    ],
  },
  {
    slug: "bottega-levante",
    name: "Bottega Levante",
    category: "Ristorazione",
    sector: "Gastronomia · E-commerce",
    description:
      "E-commerce desktop per una gastronomia gourmet pugliese: catalogo, scheda prodotto e checkout.",
    longDescription:
      "Web app desktop per una bottega gastronomica gourmet: home editoriale, catalogo con filtri per categoria, scheda prodotto dettagliata e carrello/checkout. Prodotti tipici pugliesi (salumi, formaggi, taralli, olio). Due stili: blu clean e navy gold.",
    client: "Bottega Levante · Bari",
    year: "2026",
    platform: "Web App",
    format: "desktop",
    tags: ["E-commerce", "Catalogo", "Desktop"],
    styles: ["Blue Clean", "Navy Gold"],
    cover: "/work/bottega-levante/blueclean-home.png",
    shots: [
      { label: "Home", style: "Blue Clean", image: "/work/bottega-levante/blueclean-home.png" },
      { label: "Catalogo", style: "Blue Clean", image: "/work/bottega-levante/blueclean-catalogo.png" },
      { label: "Prodotto", style: "Blue Clean", image: "/work/bottega-levante/blueclean-dettaglio.png" },
      { label: "Carrello", style: "Blue Clean", image: "/work/bottega-levante/blueclean-carrello.png" },
      { label: "Home", style: "Navy Gold", image: "/work/bottega-levante/navygold-home.png" },
      { label: "Catalogo", style: "Navy Gold", image: "/work/bottega-levante/navygold-catalogo.png" },
      { label: "Prodotto", style: "Navy Gold", image: "/work/bottega-levante/navygold-dettaglio.png" },
      { label: "Carrello", style: "Navy Gold", image: "/work/bottega-levante/navygold-carrello.png" },
    ],
  },
  {
    slug: "padel-club-bari",
    name: "Padel Club Bari",
    category: "Sport & Fitness",
    sector: "Padel · Sport Booking",
    description:
      "App per un padel club: prenotazione campi a slot orari, lezioni e corsi, profilo e classifica.",
    longDescription:
      "App mobile per un circolo di padel: home con disponibilità campi in tempo reale, prenotazione a slot orari, lezioni e corsi con i maestri, profilo e classifica. Due stili: bold typographic e neon notturno.",
    client: "Padel Club Bari",
    year: "2026",
    platform: "iOS / Android",
    format: "mobile",
    tags: ["Booking", "Sport", "Community"],
    styles: ["Bold", "Neon"],
    cover: "/work/padel-club-bari/bold-home.png",
    shots: [
      { label: "Home", style: "Bold", image: "/work/padel-club-bari/bold-home.png" },
      { label: "Prenota campo", style: "Bold", image: "/work/padel-club-bari/bold-prenota.png" },
      { label: "Lezioni", style: "Bold", image: "/work/padel-club-bari/bold-lezioni.png" },
      { label: "Home", style: "Neon", image: "/work/padel-club-bari/neon-home.png" },
      { label: "Prenota campo", style: "Neon", image: "/work/padel-club-bari/neon-prenota.png" },
      { label: "Lezioni", style: "Neon", image: "/work/padel-club-bari/neon-lezioni.png" },
    ],
  },
  {
    slug: "lacca-nail-studio",
    name: "Lacca Nail Studio",
    category: "Beauty & Wellness",
    sector: "Nail Salon · Beauty",
    description:
      "App per un nail studio: catalogo servizi, dettaglio e booking con calendario e scelta operatrice.",
    longDescription:
      "App mobile per un nail studio di fascia alta: home elegante, listino servizi, dettaglio trattamento e booking con calendario, slot orari e scelta dell'operatrice. Due stili: Lavender Luxe (glassmorphism) e Blush & Beachside.",
    client: "Lacca Nail Studio · Bari",
    year: "2026",
    platform: "iOS / Android",
    format: "mobile",
    tags: ["Booking", "Beauty", "Glassmorphism"],
    styles: ["Lavender Luxe", "Blush & Beachside"],
    cover: "/work/lacca-nail-studio/lavender-home.png",
    shots: [
      { label: "Home", style: "Lavender Luxe", image: "/work/lacca-nail-studio/lavender-home.png" },
      { label: "Servizi", style: "Lavender Luxe", image: "/work/lacca-nail-studio/lavender-servizi.png" },
      { label: "Booking", style: "Lavender Luxe", image: "/work/lacca-nail-studio/lavender-booking.png" },
      { label: "Home", style: "Blush & Beachside", image: "/work/lacca-nail-studio/blush-home.png" },
      { label: "Servizi", style: "Blush & Beachside", image: "/work/lacca-nail-studio/blush-servizi.png" },
      { label: "Booking", style: "Blush & Beachside", image: "/work/lacca-nail-studio/blush-booking.png" },
    ],
  },
  {
    slug: "zampe-felici",
    name: "Zampe Felici",
    category: "Pet & Animali",
    sector: "Toelettatura · Pet Spa",
    description:
      "App per una toelettatura/pet spa: servizi, dettaglio trattamento e prenotazione con scelta dell'animale. Stile azzurro e warm, playful.",
    longDescription:
      "App mobile per un salone di toelettatura: home colorata, listino servizi (toelettatura, bagno, taglio, spa), dettaglio con taglia ed extra, e prenotazione con calendario, scelta dell'amico a quattro zampe e operatore. Stile playful azzurro + warm.",
    client: "Zampe Felici · Bari",
    year: "2026",
    platform: "iOS / Android",
    format: "mobile",
    tags: ["Booking", "Pet Care", "Playful"],
    styles: ["Azzurro", "Warm"],
    cover: "/work/zampe-felici/home.png",
    shots: [
      { label: "Home", style: "Azzurro", image: "/work/zampe-felici/home.png" },
      { label: "Servizi", style: "Azzurro", image: "/work/zampe-felici/servizi.png" },
      { label: "Dettaglio", style: "Azzurro", image: "/work/zampe-felici/dettaglio.png" },
      { label: "Prenotazione", style: "Azzurro", image: "/work/zampe-felici/prenotazione.png" },
      { label: "Home", style: "Warm", image: "/work/zampe-felici/warm-home.png" },
      { label: "Servizi", style: "Warm", image: "/work/zampe-felici/warm-servizi.png" },
      { label: "Dettaglio", style: "Warm", image: "/work/zampe-felici/warm-dettaglio.png" },
      { label: "Prenotazione", style: "Warm", image: "/work/zampe-felici/warm-prenotazione.png" },
    ],
  },
  {
    slug: "apulia-luxury-rent",
    name: "Apulia Luxury Rent",
    category: "Mobilità & Servizi",
    sector: "Autonoleggio Luxury",
    description:
      "App per autonoleggio di lusso: flotta, dettaglio auto con specifiche e booking con date e extra.",
    longDescription:
      "App mobile per un autonoleggio di lusso: home premium, flotta filtrabile, dettaglio auto con specifiche tecniche e galleria, e booking con date di ritiro/riconsegna, location ed extra. Due stili: dark gold luxury e clean minimal.",
    client: "Apulia Luxury Rent · Bari",
    year: "2026",
    platform: "iOS / Android",
    format: "mobile",
    tags: ["Booking", "Luxury", "Mobilità"],
    styles: ["Luxury", "Clean"],
    cover: "/work/apulia-luxury-rent/luxury-home.png",
    shots: [
      { label: "Home", style: "Luxury", image: "/work/apulia-luxury-rent/luxury-home.png" },
      { label: "Flotta", style: "Luxury", image: "/work/apulia-luxury-rent/luxury-flotta.png" },
      { label: "Dettaglio", style: "Luxury", image: "/work/apulia-luxury-rent/luxury-dettaglio.png" },
      { label: "Booking", style: "Luxury", image: "/work/apulia-luxury-rent/luxury-booking.png" },
      { label: "Home", style: "Clean", image: "/work/apulia-luxury-rent/clean-home.png" },
      { label: "Flotta", style: "Clean", image: "/work/apulia-luxury-rent/clean-flotta.png" },
      { label: "Dettaglio", style: "Clean", image: "/work/apulia-luxury-rent/clean-dettaglio.png" },
      { label: "Booking", style: "Clean", image: "/work/apulia-luxury-rent/clean-booking.png" },
    ],
  },
  {
    slug: "dimora-puglia",
    name: "Dimora Puglia",
    category: "Immobiliare",
    sector: "Immobiliare · Real Estate",
    description:
      "Portale immobiliare desktop: ricerca annunci con mappa, scheda immobile e richiesta visita.",
    longDescription:
      "Web app desktop per un'agenzia immobiliare di lusso in Puglia: home editoriale con ricerca, listino annunci con mappa e filtri, scheda immobile con galleria e specifiche. Due stili: Luxury Dark e Soft Colorful.",
    client: "Dimora Puglia · Bari",
    year: "2026",
    platform: "Web App",
    format: "desktop",
    tags: ["Real Estate", "Ricerca", "Desktop"],
    styles: ["Luxury Dark", "Soft Colorful"],
    cover: "/work/dimora-puglia/luxurydark-home.png",
    shots: [
      { label: "Home", style: "Luxury Dark", image: "/work/dimora-puglia/luxurydark-home.png" },
      { label: "Annunci", style: "Luxury Dark", image: "/work/dimora-puglia/luxurydark-annunci.png" },
      { label: "Dettaglio", style: "Luxury Dark", image: "/work/dimora-puglia/luxurydark-dettaglio.png" },
      { label: "Prenota visita", style: "Luxury Dark", image: "/work/dimora-puglia/luxurydark-visita.png" },
      { label: "Home", style: "Soft Colorful", image: "/work/dimora-puglia/softcolorful-home.png" },
      { label: "Annunci", style: "Soft Colorful", image: "/work/dimora-puglia/softcolorful-annunci.png" },
      { label: "Dettaglio", style: "Soft Colorful", image: "/work/dimora-puglia/softcolorful-dettaglio.png" },
      { label: "Prenota visita", style: "Soft Colorful", image: "/work/dimora-puglia/softcolorful-visita.png" },
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectSlugs = (): { slug: string }[] =>
  projects.map((p) => ({ slug: p.slug }));

/** Raggruppa gli shot di un progetto per stile, preservando l'ordine di `styles`. */
export const shotsByStyle = (project: Project): { style: string; shots: Shot[] }[] =>
  project.styles.map((style) => ({
    style,
    shots: project.shots.filter((s) => s.style === style),
  }));
