import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Paiement en ligne",
  description:
    "Intégration directe des paiements Mobile Money et PI-SPI via l'API des opérateurs, sans agrégateur. Sous condition de registre de commerce valide.",
};

const moyens = [
  {
    name: "Mobile Money",
    description:
      "Orange Money, MTN MoMo, Wave et autres : vos clients paient directement depuis leur téléphone, en toute sécurité.",
  },
  {
    name: "PI-SPI",
    description:
      "Paiement via le système PI-SPI de la Côte d'Ivoire, directement relié aux opérateurs.",
  },
];

const conditions = [
  "Disposer d'un registre de commerce valide en votre nom (entreprise légalement enregistrée)",
  "Disposer d'une plateforme ou d'un site où intégrer le paiement (ou en faire créer un par Refontiq)",
  "Les documents nécessaires pour ouvrir l'accès au paiement auprès des opérateurs",
];

export default function PaiementEnLignePage() {
  return (
    <>
      <PageHeader
        eyebrow="Paiement en ligne"
        title="Encaisser vos clients sur internet, sans intermédiaire"
        description="Nous intégrons les paiements Mobile Money et PI-SPI directement sur votre plateforme, via l'API des opérateurs. Vos clients règlent en ligne, vous recevez vos fonds en toute simplicité."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Comment ça fonctionne ?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Contrairement aux solutions qui passent par un agrégateur (un intermédiaire qui
              centralise plusieurs moyens de paiement), Refontiq connecte votre plateforme
              directement à l'API des opérateurs. Résultat : moins de dépendance, une intégration
              adaptée à votre besoin.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {moyens.map((m) => (
                <div key={m.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-display font-bold text-slate-900">{m.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{m.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
              Conditions d'éligibilité
            </h2>
            <ul className="mt-5 space-y-4">
              {conditions.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white text-balance">
            Vous remplissez ces conditions ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-300">
            Faites une demande : nous étudions votre dossier et revenons vers vous rapidement
            pour lancer l'intégration.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              message="Bonjour Refontiq, je souhaite faire une demande pour l'intégration de paiement en ligne (Mobile Money / PI-SPI). Je dispose d'un registre de commerce."
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon />
              Faire une demande
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
