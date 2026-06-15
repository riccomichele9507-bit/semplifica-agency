import { MapPin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

/** Sezione contatti homepage in stile Innoin: card bento con form Resend + dati. */
export default function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden w-full border-t border-border pt-24 pb-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-2xl p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-10 md:gap-12 relative">
            <div className="md:max-w-md">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
                Hai un&apos;idea? <span className="text-gradient">Costruiamola.</span>
              </h2>
              <p className="text-sm text-text-dim mb-8 leading-relaxed">
                Raccontaci il tuo progetto. Ti rispondiamo da persona a persona, di solito entro 24 ore.
              </p>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center gap-3 text-text-dim">
                  <MapPin className="size-4 text-lime shrink-0" />
                  <span>{site.location}</span>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-text-dim hover:text-lime transition-colors"
                >
                  <Mail className="size-4 text-lime shrink-0" />
                  {site.email}
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-dim hover:text-lime transition-colors"
                >
                  <MessageCircle className="size-4 text-lime shrink-0" />
                  WhatsApp · {site.phone}
                </a>
              </div>
            </div>

            <div className="flex-1 max-w-md mx-auto md:mx-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
