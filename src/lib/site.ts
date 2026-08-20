export const siteConfig = {
  name: "Refontiq",
  tagline: "Des logiciels en ligne qui simplifient la gestion de votre structure",
  description:
    "Refontiq conçoit des logiciels en ligne (SaaS) pour la gestion des résidences, cliniques, écoles et plus encore. Création de sites et de logiciels sur mesure, intégration de paiement Mobile Money et PI-SPI.",
  url: "https://refontiq.com",
  phoneDisplay: "+225 01 00 372 900",
  phoneE164: "+2250100372900",
  whatsappNumber: "2250100372900",
  email: "contact@refontiq.com",
  location: "Abidjan, Côte d'Ivoire",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
