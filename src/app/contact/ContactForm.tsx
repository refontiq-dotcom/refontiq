"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

type Fields = {
  name: string;
  subject: string;
  message: string;
};

const subjects = [
  "Question sur un logiciel (Séjoura, Docly, Schooly…)",
  "Projet sur mesure (site web ou SaaS)",
  "Demande de paiement en ligne (Mobile Money / PI-SPI)",
  "Autre demande",
];

export function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", subject: subjects[0], message: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      "Bonjour Refontiq,",
      "",
      `Nom : ${fields.name}`,
      `Objet : ${fields.subject}`,
      "",
      fields.message,
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-2 focus:outline-brand-500 focus:outline-offset-0";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Votre nom
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Ex : Aya Kouadio"
          className={inputClass}
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700">
          Objet de la demande
        </label>
        <select
          id="subject"
          className={inputClass}
          value={fields.subject}
          onChange={(e) => setFields({ ...fields, subject: e.target.value })}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Votre message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Décrivez votre besoin, votre projet ou votre question…"
          className={inputClass}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
      >
        Envoyer via WhatsApp
      </button>
      <p className="text-xs leading-5 text-slate-500">
        En envoyant, WhatsApp s'ouvrira avec votre message pré-rempli. Aucune donnée n'est
        stockée par ce site.
      </p>
    </form>
  );
}
