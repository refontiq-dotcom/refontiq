import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site Refontiq.",
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      <PageHeader eyebrow="Légal" title="Politique de confidentialité" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 text-sm leading-7 text-slate-600">
          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Principe général</h2>
            <p className="mt-3">
              {siteConfig.name} attache une grande importance à la protection de vos données
              personnelles. La présente politique décrit comment ce site vitrine collecte et
              utilise vos informations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Données collectées</h2>
            <p className="mt-3">
              Ce site vitrine ne collecte aucune donnée personnelle via formulaire : les demandes
              de contact sont transmises directement à nos canaux de communication (WhatsApp et
              email), sans stockage intermédiaire. Des données de navigation anonymes (pages
              visitées, durée de consultation) peuvent être collectées via des outils de
              mesure d'audience pour améliorer le site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Utilisation des données</h2>
            <p className="mt-3">
              Les informations que vous nous transmettez via WhatsApp, téléphone ou email sont
              utilisées uniquement pour traiter votre demande et vous répondre. Elles ne sont
              jamais revendues ni transmises à des tiers, sauf obligation légale.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Liens externes</h2>
            <p className="mt-3">
              Le site contient des liens vers les plateformes de nos logiciels et vers WhatsApp.
              {siteConfig.name} n'est pas responsable des pratiques de confidentialité de ces
              plateformes externes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Pour toute question relative à cette politique de confidentialité ou à vos données,
              contactez-nous au {siteConfig.phoneDisplay} ou par email à {siteConfig.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
