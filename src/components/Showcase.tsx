import { ArrowUpRight, HeartPulse, ShoppingBag, Utensils } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { whatsappLink } from '../constants';

const CONCEPTS = [
  { icon: HeartPulse, category: 'HEALTHCARE', headline: 'Care starts with clarity.', tagline: 'Professional education • Appointment inquiries', title: 'Clinic communication', description: 'Doctor-led education, service explainers and appointment-focused creative, with a consistent visual system.', palette: 'bg-[#dce6dc] text-[#234436]', accent: 'bg-[#234436] text-white', number: '01' },
  { icon: ShoppingBag, category: 'FASHION & RETAIL', headline: 'Everyday. Elevated.', tagline: 'Product stories • Catalog promotion', title: 'Retail brand storytelling', description: 'Editorial product layouts, collection launches and short-form content built around the customer journey.', palette: 'bg-[#ece0d2] text-[#624636]', accent: 'bg-[#624636] text-white', number: '02' },
  { icon: Utensils, category: 'FOOD & HOSPITALITY', headline: 'Make every visit memorable.', tagline: 'Menu highlights • Local discovery', title: 'Restaurant discovery', description: 'Menu-led content, atmosphere-focused Reels and local campaigns designed to encourage inquiries and visits.', palette: 'bg-[#eee5ca] text-[#53462e]', accent: 'bg-[#53462e] text-white', number: '03' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="CREATIVE SHOWCASE" title="A Different Visual Language for Every Brand" subtitle="Illustrative creative concepts, not commissioned client work or verified results. Explore how we approach three business sectors." />
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {CONCEPTS.map(({ icon: Icon, category, headline, tagline, title, description, palette, accent, number }, i) => (
            <Reveal key={category} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-sage-200 bg-white shadow-card">
                <div className={`relative flex min-h-[280px] flex-col justify-between overflow-hidden p-7 ${palette}`}>
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-widest">
                    <span>{category}</span><span>CONCEPT {number}</span>
                  </div>
                  <div className="absolute -right-14 top-12 h-56 w-56 rounded-full border border-current opacity-15" aria-hidden="true" />
                  <div className="relative">
                    <span className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full ${accent}`}><Icon size={25} aria-hidden="true" /></span>
                    <p className="max-w-[12ch] font-serif text-4xl font-semibold leading-tight">{headline}</p>
                  </div>
                  <div className="relative border-t border-current pt-4 text-[11px] font-semibold">{tagline}</div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-xl font-semibold text-forest-700">{title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-forest-500">{description}</p>
                  <a href={whatsappLink('Hi Nexora Media! I would like to discuss a creative direction for my business, inspired by your ' + title + ' concept.')} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-forest-700 hover:underline">
                    Discuss this direction <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
