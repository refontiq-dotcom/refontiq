import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { SaasCard, SaasLogo } from "@/components/SaasCard";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { saasList } from "@/lib/saas";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60rem 30rem at 80% -10%, rgba(99,102,241,0.12), transparent), radial-gradient(40rem 20rem at 10% 110%, rgba(139,92,246,0.10), transparent)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-semibold tracking-widest text-brand-600 uppercase">
              Logiciels en ligne &amp; services sur mesure
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
              Des logiciels qui simplifient la gestion de votre structure
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-slate-600">
              Refontiq conçoit des logiciels en ligne (SaaS) pour les résidences meublées, les
              cliniques, les écoles et bien d'autres secteurs — ainsi que des sites et logiciels
              sur mesure pour votre projet.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/saas" size="lg">
                Découvrir nos logiciels
              </ButtonLink>
              <ButtonLink href="/sur-mesure" variant="secondary" size="lg">
                Un projet sur mesure ?
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {saasList.map((saas) => (
                <Link
                  key={saas.slug}
                  href={`/saas/${saas.slug}`}
                  className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md sm:p-6"
                >
                  <SaasLogo name={saas.name} accent={saas.accent} className="h-12 w-12 rounded-2xl text-xl sm:h-14 sm:w-14" />
                  <span className="mt-3 font-display text-sm font-bold text-slate-900 sm:text-base">
                    {saas.name}
                  </span>
                  <span className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">
                    {saas.tagline}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-brand-700 opacity-0 transition-opacity group-hover:opacity-100">
                    Voir la fiche →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue teaser */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-sm font-semibold tracking-widest text-brand-600 uppercase">
              Nos SaaS
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Des solutions métiers, prêtes à l'emploi
            </h2>
          </div>
          <ButtonLink href="/saas" variant="ghost">
            Tout le catalogue →
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saasList.map((saas) => (
            <SaasCard key={saas.slug} saas={saas} />
          ))}
        </div>
      </section>

      {/* Sur mesure */}
      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm font-semibold tracking-widest text-brand-600 uppercase">
                Services sur mesure
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Votre idée de site ou de logiciel, réalisée par Refontiq
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Vous avez un besoin spécifique ? Nous concevons des sites web et des logiciels
                en ligne personnalisés (SaaS) pour les entreprises et les particuliers : site
                vitrine, plateforme métier, tableau de bord de gestion…
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Analyse de votre besoin et proposition d'une solution adaptée",
                  "Développement sur mesure, de la maquette à la mise en ligne",
                  "Accompagnement et formation à l'utilisation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="/sur-mesure">Découvrir le service sur mesure</ButtonLink>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="rounded-xl bg-slate-100 p-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-sm font-semibold text-slate-700">Exemple de tableau de bord</span>
                  <span className="rounded-md bg-brand-600 px-2 py-0.5 text-xs font-medium text-white">
                    Sur mesure
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <span className="text-xs text-slate-500">Chiffre d'affaires</span>
                    <span className="text-sm font-bold text-slate-900">+ 32 %</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <span className="text-xs text-slate-500">Nouveaux clients</span>
                    <span className="text-sm font-bold text-slate-900">128</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                    <span className="text-xs text-slate-500">Rendez-vous</span>
                    <span className="text-sm font-bold text-slate-900">46</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paiement */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 rounded-2xl bg-gradient-to-br from-slate-900 to-brand-900 p-6 text-white shadow-sm sm:p-8 lg:order-1">
            <p className="text-sm font-semibold text-brand-200">Mobile Money · PI-SPI</p>
            <p className="mt-2 font-display text-2xl font-bold">Encaisser en ligne, sans intermédiaire</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Intégration directe des paiements Mobile Money (Orange Money, MTN MoMo, Wave) et
              PI-SPI sur votre plateforme, via l'API des opérateurs.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-display text-sm font-semibold tracking-widest text-brand-600 uppercase">
              Paiement en ligne
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Vos clients paient depuis votre site, en toute simplicité
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Nous intégrons les paiements en ligne directement sur votre plateforme existante,
              sans passer par un agrégateur. Vos clients règlent avec Mobile Money ou via PI-SPI
              (CI).
            </p>
            <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <strong className="text-slate-900">Condition :</strong> disposer d'un registre de
              commerce valide pour activer le paiement.
            </p>
            <div className="mt-8">
              <ButtonLink href="/paiement-en-ligne">En savoir plus sur le paiement en ligne</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-14 text-center sm:px-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
            Une question, un projet, un besoin précis ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-300">
            Écrivez-nous directement sur WhatsApp. Nous répondons rapidement et vous orientons
            vers la bonne solution.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon />
              Discuter sur WhatsApp
            </WhatsAppButton>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Page contact
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
