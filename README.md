# Refontiq — Site vitrine


Site vitrine de **Refontiq**, entreprise qui conçoit des logiciels en ligne (SaaS) et des services sur mesure pour les entreprises d'Afrique de l'Ouest : gestion de résidences, cliniques, écoles, création de sites et de SaaS sur mesure, intégration de paiement Mobile Money / PI-SPI.

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil — hero, aperçu des SaaS, services sur mesure et paiement |
| `/saas` | Catalogue des logiciels Refontiq |
| `/saas/[slug]` | Fiche détaillée de chaque SaaS (Séjoura, Docly, Schooly…) |
| `/sur-mesure` | Service de création de sites / SaaS personnalisés |
| `/paiement-en-ligne` | Service d'intégration Mobile Money / PI-SPI |
| `/a-propos` | Présentation de l'entreprise |
| `/contact` | Contact (WhatsApp, téléphone, email, formulaire) |
| `/mentions-legales` · `/politique-de-confidentialite` | Pages légales |

Contact WhatsApp : +225 01 00 372 900.

## Ajouter un nouveau SaaS

Tous les logiciels sont définis dans `src/lib/saas.ts`. Pour ajouter un produit, ajoutez une entrée au tableau `saasList` : la fiche détaillée et le catalogue sont générés automatiquement.

```ts
{
  slug: "mon-saas",            // identifiant de l'URL
  name: "Mon SaaS",
  tagline: "Phrase de description",
  audience: "Public visé",
  description: "Problème résolu",
  features: ["Fonctionnalité 1", "Fonctionnalité 2"],
  signupUrl: "https://...",    // lien d'inscription
  status: "live",              // ou "coming-soon"
  accent: "from-sky-500 to-blue-700",
}
```

## Développement

Stack : [Next.js](https://nextjs.org) (App Router) + TypeScript + [Tailwind CSS](https://tailwindcss.com).

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Déploiement (Vercel)

Deux options :

1. **Intégration native Vercel** (recommandée) : connectez le dépôt GitHub depuis le tableau de bord Vercel. Chaque push sur `main` déploie en production, chaque PR génère une preview.
2. **CI via GitHub Actions** : le workflow `.github/workflows/vercel-deploy.yml` déploie automatiquement. Ajoutez ces secrets au dépôt (Settings → Secrets and variables → Actions), obtenus après un premier `vercel link` local :
   - `VERCEL_TOKEN` — token d'accès (https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` — identifiant de l'organisation
   - `VERCEL_PROJECT_ID` — identifiant du projet

Le workflow `.github/workflows/ci.yml` exécute lint, type-check et build sur chaque push et PR.

## Contenus à fournir

Logos officiels des SaaS, captures d'écran des interfaces, et liens d'inscription de Docly / Schooly sont à ajouter en remplacement des éléments provisoires actuels.
