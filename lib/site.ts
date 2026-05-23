export const site = {
  name: "Semplifica AI",
  founder: "Michele Ricco",
  location: "Trani, Puglia",
  email: "michelericco95@gmail.com",
  phone: "+39 346 248 2556",
  whatsapp: "https://wa.me/393462482556",
  url: "https://semplifica.ai",
  tagline: "L'agenzia che costruisce davvero.",
  description:
    "Web app premium, automazioni AI e creative su misura. Niente template, niente promesse vuote — solo roba che funziona.",
};

export type ServiceArea = {
  slug: string;
  label: string;
  href: string;
  short: string;
  description: string;
};

export const services: ServiceArea[] = [
  {
    slug: "web-apps",
    label: "Web Apps",
    href: "/web-apps",
    short: "Web app su misura, veloci e curate.",
    description:
      "Progettiamo e sviluppiamo web app premium — design, performance e cura del dettaglio. Come Special Sushi Poke.",
  },
  {
    slug: "ai-agents",
    label: "AI Agents",
    href: "/ai-agents",
    short: "Agenti AI che lavorano per te 24/7.",
    description:
      "ARIA e FILO: agenti WhatsApp che riattivano lead e gestiscono prenotazioni in autonomia, giorno e notte.",
  },
  {
    slug: "creative-ai",
    label: "Creative AI",
    href: "/creative-ai",
    short: "Contenuti creativi generati con AI.",
    description:
      "Immagini, video e contenuti di qualità prodotti con AI — per il tuo brand, i tuoi social, le tue campagne.",
  },
];

export const navLinks = [
  { label: "Servizi", href: "/#servizi", hasMega: true },
  { label: "Lavori", href: "/web-apps" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];
