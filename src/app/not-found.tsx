import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="font-display text-6xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-900">
        Page introuvable
      </h1>
      <p className="mt-3 text-slate-600">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
