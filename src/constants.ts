export const WHATSAPP_NUMBER = '923097631038';

export const WHATSAPP_DISPLAY = '+92 309 7631038';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Hi Nexora Media! I would like to know more about your services.',
  freeAudit: 'Hi Nexora Media! I would like to request a manual review of my social media page.',
  package: (name: string, price: string) =>
    `Hi Nexora Media! I'm interested in the ${name} (${price}) package.`,
};

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
}
