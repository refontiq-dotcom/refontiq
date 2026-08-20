import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <WhatsAppButton
      message="Bonjour Refontiq, j'ai une question."
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105"
      aria-label="Contacter Refontiq sur WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </WhatsAppButton>
  );
}
