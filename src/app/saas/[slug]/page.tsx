import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { SaasLogo } from "@/components/SaasCard";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { getSaasBySlug, saasList } from "@/lib/saas";

export function generateStaticParams() {
  return saasList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/saas/[slug]">) {
  const { slug } = await params;
  const saas = getSaasBySlug(slug);
  if (!saas) return { title: "Logiciel introuvable" };
  return {
    title: saas.name,
    description: saas.tagline,
  };
}

function ScreenshotMockup({ accent, title }: { accent: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate rounded-md bg-white px-2 py-0.5 text-xs text-slate-500">
          app.{title.toLowerCase()}.refontiq.app
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-sm font-bold text-white`}>
              {title.charAt(0)}
            </span>
            <div className="h-2.5 w-24 rounded bg-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-16 rounded bg-slate-100" />
            <div className={`h-6 w-16 rounded ${accent.split(" ")[0]} bg-gradient-to-r opacity-90`} />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
              <div className="h-2 w-12 rounded bg-slate-200" />
              <div className="mt-2 h-3 w-16 rounded bg-slate-300" />
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-slate-100 p-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="h-2 w-20 rounded bg-slate-200" />
            <div className="h-2 w-8 rounded bg-slate-200" />
          </div>
          <div className="mt-2 space-y-2">
            <div className="h-2 w-full rounded bg-slate-100" />
            <div className="h-2 w-3/4 rounded bg-slate-100" />
            <div className="h-2 w-5/6 rounded bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function SaasDetailPage({ params }: PageProps<"/saas/[slug]">) {
  const { slug } = await params;
  const saas = getSaasBySlug(slug);

  if (!saas) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-slate-900">
          Ce logiciel n'existe pas encore
        </h1>
        <p className="mt-3 text-slate-600">
          La fiche que vous cherchez n'est pas disponible. Retournez au catalogue pour
          découvrir nos solutions.
        </p>
        <div className="mt-6">
          <ButtonLink href="/saas">Retour au catalogue</ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link href="/saas" className="text-sm font-medium text-brand-700 hover:text-brand-800">
            ← Retour au catalogue
          </Link>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <SaasLogo name={saas.name} accent={saas.accent} className="h-16 w-16 rounded-2xl text-2xl" />
                <div>
                  <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {saas.name}
                  </h1>
                  <p className="mt-1 text-base text-slate-500">{saas.audience}</p>
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-600">{saas.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {saas.signupUrl ? (
                  <ButtonLink href={saas.signupUrl} external size="lg">
                    Créer un compte {saas.name}
                  </ButtonLink>
                ) : (
                  <WhatsAppButton
                    message={`Bonjour Refontiq, je souhaite créer un compte sur ${saas.name}.`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
                  >
                    <WhatsAppIcon />
                    Demander l'accès sur WhatsApp
                  </WhatsAppButton>
                )}
              </div>
            </div>

            <div className="w-full max-w-md">
              <ScreenshotMockup accent={saas.accent} title={saas.name} />
              <p className="mt-3 text-center text-xs text-slate-400">
                Aperçu illustratif de l'interface (captures d'écran réelles à venir).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
              Fonctionnalités clés
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {saas.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-900">
              Prêt à commencer ?
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              Créez votre compte sur {saas.name} pour commencer à gérer votre activité en ligne.
            </p>
            {saas.signupUrl ? (
              <ButtonLink href={saas.signupUrl} external className="w-full">
                S'inscrire sur {saas.name}
              </ButtonLink>
            ) : (
              <WhatsAppButton
                message={`Bonjour Refontiq, je souhaite créer un compte sur ${saas.name}.`}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon />
                Demander l'accès
              </WhatsAppButton>
            )}
            <p className="text-xs leading-5 text-slate-500">
              Une question avant de vous lancer ? Écrivez-nous sur WhatsApp.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
