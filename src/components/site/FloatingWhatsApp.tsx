import { whatsappLink } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.537-1.366A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.869 9.869 0 01-5.032-1.378l-.361-.214-3.741.981 1-3.641-.235-.374A9.86 9.86 0 012.118 12c0-5.451 4.431-9.882 9.882-9.882 5.452 0 9.882 4.431 9.882 9.882 0 5.452-4.43 9.882-9.882 9.882z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span
        aria-hidden
        className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg"
      >
        Chat on WhatsApp
      </span>

      {/* Pulsing ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
      />

      <a
        href={whatsappLink("Hello Clemsam, I'd like to enquire about your services.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Clemsam on WhatsApp"
        className="relative flex items-center justify-center size-14 rounded-full bg-[#25D366] hover:bg-[#20c45a] text-white shadow-[0_8px_32px_rgba(37,211,102,0.55)] hover:shadow-[0_12px_44px_rgba(37,211,102,0.75)] hover:scale-110 transition-all duration-200"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
