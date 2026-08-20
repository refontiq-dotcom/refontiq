import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/Button";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sur mesure",
  description:
    "Sites web et logiciels en ligne personnalisés (SaaS) conçus par Refontiq pour votre entreprise ou votre projet, de l'idée à la mise en ligne.",
};

const realisations = [
  {
    title: "Sites pour cliniques et cabinets",
    description:
      "Présence en ligne claire et moderne pour les professionnels de santé : présentation, prises de rendez-vous, informations pratiques.",
  },
  {
    title: "Tableaux de bord de gestion",
    description:
      "Des espaces en ligne sur mesure pour visualiser et suivre l'activité d'une structure : ventes, clients, indicateurs clés.",
  },
  {
    title: "Plateformes métier et SaaS",
    description:
      "Conception de logiciels en ligne entièrement personnalisés, adaptés au fonctionnement précis de votre métier.",
  },
];

const etapes = [
  {
    num: "01",
    title: "On écoute votre besoin",
    description:
      "Vous décrivez votre projet (objectif, public, contraintes) par WhatsApp, téléphone ou rencontre.",
  },
  {
    num: "02",
    title: "On propose une solution",
    description:
      "Nous concevons une maquette et un plan clair : fonctionnalités, budget, délais.",
  },
  {
    num: "03",
    title: "On développe",
    description:
      "Nous développons votre site ou votre logiciel en ligne, étape par étape, avec des allers-retours réguliers.",
  },
  {
    num: "04",
    title: "On met en ligne et on forme",
    description:
      "Votre solution est accessible sur internet et vous êtes accompagné pour bien l'utiliser.",
  },
];

export default function SurMesurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Services sur mesure"
        title="Un site ou un logiciel en ligne, conçu pour vous"
        description="Vous avez une idée de site web ou de logiciel en ligne (SaaS) pour votre entreprise ou votre projet ? Refontiq la transforme en réalité : analyse, conception, développement et mise en ligne."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Comment ça se passe ?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Chaque projet est unique. Notre méthode reste simple : comprendre votre métier,
              puis construire une solution adaptée, utile au quotidien et simple à utiliser.
            </p>

            <ol className="mt-8 space-y-6">
              {etapes.map((etape) => (
                <li key={etape.num} className="flex gap-5">
                  <span className="font-display text-lg font-bold text-brand-600">{etape.num}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{etape.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{etape.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message="Bonjour Refontiq, j'ai un projet sur mesure à vous présenter :"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon />
                Décrire mon projet
              </WhatsAppButton>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Aller à la page contact
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
              Exemples de réalisations
            </h2>
            <div className="mt-6 space-y-4">
              {realisations.map((real) => (
                <div key={real.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{real.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{real.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-lg bg-white p-4 text-xs leading-5 text-slate-500 ring-1 ring-slate-200">
              Nous mettrons prochainement en ligne des exemples concrets de nos réalisations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
