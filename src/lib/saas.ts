export type SaasStatus = "live" | "coming-soon";

export type Saas = {
  slug: string;
  name: string;
  tagline: string;
  audience: string;
  description: string;
  features: string[];
  signupUrl?: string;
  status: SaasStatus;
  accent: string;
};

export const saasList: Saas[] = [
  {
    slug: "sejoura",
    name: "Séjoura",
    tagline: "La gestion simple des résidences meublées et petits hôtels.",
    audience: "Résidences meublées, studios, petits hôtels et locations de courte durée.",
    description:
      "Séjoura aide les gestionnaires de résidences meublées et de petits hôtels à suivre leurs réservations, leurs clients et leurs revenus, sans tableur compliqué. Tout se passe en ligne, depuis un navigateur.",
    features: [
      "Gestion des réservations et des disponibilités",
      "Fiches clients et historique de séjour",
      "Suivi des revenus et statistiques d'occupation",
      "Tableau de bord clair, utilisable sans formation",
    ],
    signupUrl: "https://sejoura-lemon.vercel.app/",
    status: "live",
    accent: "from-sky-500 to-blue-700",
  },
  {
    slug: "docly",
    name: "Docly",
    tagline: "La gestion des cliniques et cabinets médicaux, simplifiée.",
    audience: "Cliniques, cabinets médicaux et professionnels de santé.",
    description:
      "Docly centralise les informations des patients et le fonctionnement courant d'une clinique : rendez-vous, dossiers et suivi de l'activité, pour un établissement plus organisé au quotidien.",
    features: [
      "Gestion des rendez-vous et de l'agenda des praticiens",
      "Dossiers patients centralisés",
      "Suivi de l'activité et des consultations",
      "Accès simple depuis un navigateur",
    ],
    status: "live",
    accent: "from-emerald-500 to-teal-700",
  },
  {
    slug: "schooly",
    name: "Schooly",
    tagline: "La gestion scolaire pour les écoles et établissements d'enseignement.",
    audience: "Écoles, collèges, lycées et centres de formation.",
    description:
      "Schooly accompagne les établissements scolaires dans la gestion de leurs élèves, de leurs paiements et de leur communication, afin de réduire les tâches administratives répétitives.",
    features: [
      "Gestion des élèves et des inscriptions",
      "Suivi des paiements de scolarité",
      "Communication avec les parents",
      "Tableaux de bord par classe et par niveau",
    ],
    status: "live",
    accent: "from-violet-500 to-purple-700",
  },
];

export function getSaasBySlug(slug: string) {
  return saasList.find((s) => s.slug === slug);
}
