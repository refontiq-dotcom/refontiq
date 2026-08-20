import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SaasCard } from "@/components/SaasCard";
import { ButtonLink } from "@/components/Button";
import { saasList } from "@/lib/saas";

export const metadata: Metadata = {
  title: "Nos SaaS",
  description:
    "Découvrez les logiciels en ligne développés par Refontiq : Séjoura, Docly, Schooly et les solutions à venir.",
};

export default function SaasCataloguePage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Nos logiciels en ligne (SaaS)"
        description="Des solutions métiers développées par Refontiq pour répondre à des problèmes concrets de gestion. Chaque logiciel dispose d'une fiche dédiée et d'un accès direct pour créer votre compte."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saasList.map((saas) => (
            <SaasCard key={saas.slug} saas={saas} />
          ))}

          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center">
            <p className="font-display text-lg font-bold text-slate-700">Et bientôt d'autres…</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Refontiq développe de nouvelles solutions pour différents secteurs. Des idées ?
              Proposons-les ensemble.
            </p>
            <div className="mt-5">
              <ButtonLink href="/sur-mesure" variant="secondary" size="sm">
                Proposer une idée
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
