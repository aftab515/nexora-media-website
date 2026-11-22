import { MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { whatsappLink, scrollToId, WHATSAPP_MESSAGES } from '../constants';

const QUICK_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Showcase', id: 'showcase' },
  { label: 'Packages', id: 'packages' },
  { label: 'Our System', id: 'system' },
  { label: 'Growth Planner', id: 'audit' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-800 pb-28 pt-16 text-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-sage-100">
              A digital &amp; social media marketing agency engineering digital
              attention into sales and authority — not just likes.
            </p>
            <div className="gold-hairline mt-7 max-w-xs" aria-hidden="true" />
            <p className="mt-5 text-sm font-medium text-sage-100">
              Faisalabad, Pakistan &bull; Serving Brands Nationwide &amp; Globally
            </p>
            <a className="mt-4 inline-block text-sm font-medium text-gold-400 underline" href="https://www.instagram.com/nexoramedia792/" target="_blank" rel="noopener noreferrer">Instagram @nexoramedia792</a>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-widest2 text-gold-400">
              QUICK LINKS
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-[15px] font-medium text-sage-100 transition-colors duration-300 hover:text-gold-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-widest2 text-gold-400">
              START TODAY
            </h4>
            <p className="mt-5 text-[15px] leading-relaxed text-sage-100">
              Get a free preliminary growth plan based on your business goals, or contact Nexora for a manual page review.
            </p>
            <a
              href="#audit"
              className="mt-6 inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-forest-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Get a Free Growth Plan
            </a>
          </div>
        </div>

        <details id="privacy" className="mt-10 rounded-2xl border border-forest-500 p-5 text-sm leading-relaxed text-sage-100">
          <summary className="cursor-pointer font-semibold text-cream">Privacy notice</summary>
          <p className="mt-3">The growth planner uses your business name, public page link, industry and answers in your browser to prepare recommendations. It does not automatically submit your answers to Nexora. If you choose to send a WhatsApp message, those details are shared with the recipient through WhatsApp. Nexora may use messages sent to Nexora to respond to your inquiry. Copying a draft places it on your device clipboard. Please do not include passwords, patient details or other sensitive information. Contact Nexora via WhatsApp with questions about your inquiry or requests concerning your information.</p>
        </details>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-forest-500 pt-8 sm:flex-row">
          <p className="text-sm text-sage-100">
            &copy; {year} Nexora Media. All rights reserved.
          </p>
          <p className="text-[13px] italic text-gold-400">
            We don&rsquo;t chase likes — we build sales &amp; authority.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nexora Media on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sage-600 text-white shadow-popular transition-all duration-300 hover:scale-110 hover:bg-sage-500"
    >
      <MessageCircle size={26} className="transition-transform duration-300 group-hover:scale-110" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-forest-800 px-4 py-2 text-sm font-semibold text-cream opacity-0 shadow-card transition-all duration-300 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
