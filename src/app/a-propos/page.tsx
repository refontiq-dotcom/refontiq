import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/Button";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { saasList } from "@/lib/saas";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Refontiq : une entreprise ivoirienne qui conçoit des logiciels en ligne (SaaS) et des solutions sur mesure pour l'Afrique de l'Ouest.",
};

const valeurs = [
  {
    title: "Simplicité",
    description:
      "Des logiciels faciles à prendre en main, qui résolvent de vrais problèmes sans complexité inutile.",
  },
  {
    title: "Proximité",
    description:
      "Nous restons accessibles, on vous répond, et on vous accompagne après la mise en service.",
  },
  {
    title: "Fiabilité",
    description:
      "Des solutions conçues pour durer, hébergées en ligne et pensées pour votre activité réelle.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Refontiq, la tech utile pour les entreprises de la région"
        description="Refontiq conçoit des logiciels en ligne (SaaS) et des services sur mesure pour simplifier la gestion des structures : résidences, cliniques, écoles, commerces et bien d'autres."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Notre mission
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Trop de structures gèrent encore leur activité avec des tableurs ou des cahiers.
              Notre mission est de leur donner des logiciels en ligne simples, adaptés à leur
              métier et accessibles depuis n'importe quel navigateur — sans installation ni
              matériel coûteux.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Chaque logiciel que nous développons répond à un besoin concret rencontré sur le
              terrain, en Côte d'Ivoire et en Afrique de l'Ouest.
            </p>

            <div className="mt-10">
              <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                Nos valeurs
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {valeurs.map((v) => (
                  <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="font-display font-bold text-slate-900">{v.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
              Nos logiciels en ligne
            </h2>
            <div className="mt-6 space-y-4">
              {saasList.map((saas) => (
                <div key={saas.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-display font-bold text-slate-900">{saas.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{saas.tagline}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/saas" variant="secondary" className="w-full">
                Découvrir nos logiciels
              </ButtonLink>
            </div>
            <div className="mt-4">
              <WhatsAppButton
                message="Bonjour Refontiq, j'aimerais en savoir plus sur votre entreprise."
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon />
                Échanger avec Refontiq
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
