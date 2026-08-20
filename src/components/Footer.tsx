import Link from "next/link";
import { Logo } from "@/components/Logo";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const saasLinks = [
  { href: "/saas/sejoura", label: "Séjoura" },
  { href: "/saas/docly", label: "Docly" },
  { href: "/saas/schooly", label: "Schooly" },
];

const companyLinks = [
  { href: "/a-propos", label: "À propos de Refontiq" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-6 text-slate-600">
              Des logiciels en ligne (SaaS) et des services sur mesure pour les entreprises
              d'Afrique de l'Ouest.
            </p>
            <WhatsAppButton
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-whatsapp px-4 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon />
              {siteConfig.phoneDisplay}
            </WhatsAppButton>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Nos logiciels
            </h3>
            <ul className="mt-4 space-y-2.5">
              {saasLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-brand-700">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/saas" className="text-sm text-slate-600 hover:text-brand-700">
                  Voir tout le catalogue
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/sur-mesure" className="text-sm text-slate-600 hover:text-brand-700">
                  Création sur mesure
                </Link>
              </li>
              <li>
                <Link href="/paiement-en-ligne" className="text-sm text-slate-600 hover:text-brand-700">
                  Paiement en ligne
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Entreprise
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-brand-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-500">
            Fait en Côte d'Ivoire — conçu pour l'Afrique de l'Ouest.
          </p>
        </div>
      </div>
    </footer>
  );
}
