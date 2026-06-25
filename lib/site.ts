export const site = {
  name: "Semplifica AI",
  founder: "Michele Ricco",
  location: "Trani, Puglia",
  email: "michelericco95@gmail.com",
  phone: "+39 346 248 2556",
  whatsapp: "https://wa.me/393462482556",
  linkedin: "https://www.linkedin.com/in/michelericco/",
  calendly: "https://cal.com/semplifica-ai/30min",
  url: "https://semplifica.ai",
  tagline: "Soluzioni AI su misura per la tua azienda.",
  description:
    "Costruiamo agenti AI, web app e workflow automation per PMI italiane. Una persona, non un call center. Da Trani, Puglia.",
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
    slug: "workflow-automation",
    label: "Workflow Automation",
    href: "/workflow-automation",
    short: "Connetti app e automatizza i processi.",
    description:
      "Make.com, n8n, Zapier. Eliminiamo la data entry manuale connettendo i tuoi tool con automazioni custom — recensioni, lead, preventivi.",
  },
  {
    slug: "custom-ai",
    label: "Custom AI",
    href: "/#custom-ai",
    short: "Soluzioni AI su misura per la tua attività.",
    description:
      "Modelli predittivi, OCR, agenti specifici. Strumenti AI proprietari adattati alla logica della tua azienda.",
  },
];

export const navLinks = [
  { label: "Servizi", href: "/#servizi", hasMega: true },
  { label: "Lavori", href: "/web-apps" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];
