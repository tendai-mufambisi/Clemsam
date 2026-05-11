export const WHATSAPP_NUMBER = "263783456446";
export const PHONE_DISPLAY = "+263 783 456 446";
export const PHONE_LOCAL = "0783 456 446";
export const EMAIL_INFO = "info@clemsam.co.zw";
export const EMAIL_SALES = "sales@clemsam.co.zw";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsapp(message: string) {
  if (typeof window === "undefined") return;
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
