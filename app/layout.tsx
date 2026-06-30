import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackHomeButton from "@/components/BackHomeButton";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.founderRole}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.founderRole}`,
    description: site.description,
    type: "website",
    locale: "it_IT",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-bg text-text antialiased">
        <Navbar />
        <BackHomeButton />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
