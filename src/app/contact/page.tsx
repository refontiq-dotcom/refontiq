import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Refontiq pour toute question ou demande : WhatsApp, téléphone ou formulaire. Nous répondons rapidement.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une question sur nos logiciels, un besoin sur mesure, une demande de paiement en ligne ? Écrivez-nous, nous vous répondons rapidement."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Vos canaux pour nous joindre
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">WhatsApp (recommandé)</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Le moyen le plus simple et le plus rapide de nous écrire.
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="mt-1 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">Téléphone</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Appelez-nous au numéro ci-dessous.
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-700">{siteConfig.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Pour les demandes écrites et les dossiers.
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white">Le plus rapide : WhatsApp</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Écrivez-nous directement, décrivez votre besoin et recevez une réponse en
                quelques minutes.
              </p>
              <WhatsAppButton
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon />
                Ouvrir WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
              Ou décrivez votre demande ici
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Remplissez ce formulaire : votre demande sera envoyée directement à notre WhatsApp.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
