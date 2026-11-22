import { ArrowUpRight, Instagram, MapPin, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import { whatsappLink, WHATSAPP_MESSAGES, WHATSAPP_DISPLAY } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-forest-800 p-8 text-cream shadow-elevated md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
            <div>
              <p className="text-xs font-bold tracking-widest2 text-gold-400">START A CONVERSATION</p>
              <h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-tight sm:text-5xl">Tell us what your brand needs next.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-sage-100">Share your business type, goals and public page link. We can discuss the relevant services, expected deliverables and next steps. No account passwords or sensitive customer information are needed.</p>
              <a href={whatsappLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-forest-900 hover:bg-gold-400"><MessageCircle size={18} aria-hidden="true" /> Start a WhatsApp inquiry <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a href={whatsappLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-forest-500 p-5 transition-colors hover:border-gold-500">
                <MessageCircle size={25} className="shrink-0 text-gold-400" aria-hidden="true" />
                <span className="min-w-0"><span className="block text-xs text-sage-100">WhatsApp Business</span><span className="mt-1 block font-semibold">{WHATSAPP_DISPLAY}</span></span>
                <ArrowUpRight size={18} className="ml-auto shrink-0" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/nexoramedia792/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-forest-500 p-5 transition-colors hover:border-gold-500">
                <Instagram size={25} className="shrink-0 text-gold-400" aria-hidden="true" />
                <span className="min-w-0"><span className="block text-xs text-sage-100">Instagram</span><span className="mt-1 block break-all font-semibold">@nexoramedia792</span></span>
                <ArrowUpRight size={18} className="ml-auto shrink-0" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-forest-500 p-5">
                <MapPin size={25} className="shrink-0 text-gold-400" aria-hidden="true" />
                <span><span className="block text-xs text-sage-100">Based in</span><span className="mt-1 block font-semibold">Faisalabad, Pakistan</span></span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
