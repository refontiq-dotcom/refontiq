import Link from "next/link";
import type { Saas } from "@/lib/saas";

export function SaasLogo({
  name,
  accent,
  className = "h-12 w-12 rounded-xl text-lg",
}: {
  name: string;
  accent: string;
  className?: string;
}) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <span
      className={`inline-flex items-center justify-center bg-gradient-to-br ${accent} font-display font-bold text-white shadow-sm ${className}`}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

export function SaasCard({ saas }: { saas: Saas }) {
  return (
    <Link
      href={`/saas/${saas.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <SaasLogo name={saas.name} accent={saas.accent} />
        {saas.status === "live" ? (
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 ring-inset">
            Disponible
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 ring-inset">
            À venir
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-slate-900">{saas.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{saas.tagline}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">{saas.audience}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Découvrir {saas.name}
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </Link>
  );
}
