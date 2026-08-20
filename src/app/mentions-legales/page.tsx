import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Refontiq.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader eyebrow="Légal" title="Mentions légales" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 text-sm leading-7 text-slate-600">
          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Éditeur du site</h2>
            <p className="mt-3">
              Le site {siteConfig.name} est édité par la société {siteConfig.name}, dont le siège
              est situé à {siteConfig.location}. Les informations légales complètes (dénomination
              sociale, numéro de registre de commerce, capital social) seront précisées dès que
              disponibles.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Directeur de la publication</h2>
            <p className="mt-3">Le directeur de la publication est le représentant légal de {siteConfig.name}.</p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Hébergement</h2>
            <p className="mt-3">
              Le site est hébergé sur une plateforme de déploiement cloud (type Vercel). Les
              coordonnées précises de l'hébergeur seront indiquées une fois l'hébergement
              définitif mis en place.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Pour toute question relative au site, vous pouvez nous contacter par téléphone ou
              WhatsApp au {siteConfig.phoneDisplay}, ou par email à {siteConfig.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Propriété intellectuelle</h2>
            <p className="mt-3">
              L'ensemble des contenus de ce site (textes, éléments graphiques, logos, structure)
              est la propriété de {siteConfig.name} et ne peut être reproduit sans autorisation
              écrite préalable. Les noms des logiciels présentés (Séjoura, Docly, Schooly) sont des
              marques appartenant à {siteConfig.name} ou à leurs éditeurs respectifs.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Responsabilité</h2>
            <p className="mt-3">
              {siteConfig.name} s'efforce d'assurer l'exactitude des informations diffusées sur ce
              site. La responsabilité de {siteConfig.name} ne saurait être engagée en cas
              d'inexactitude, d'omission ou d'indisponibilité temporaire du site. Les liens vers
              des sites externes ne sauraient engager la responsabilité de {siteConfig.name}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
