import { Clapperboard, Megaphone, CalendarCheck, Compass, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { scrollToId } from '../constants';

const SERVICES = [
  {
    icon: Clapperboard,
    title: 'Reels Production',
    description:
      'High-retention vertical videos with scriptwriting, strong 3-second hooks, voiceover sync, and dynamic captions.',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads Management',
    description:
      'Targeted Facebook & Instagram campaigns with audience research, A/B split testing, and retargeting funnels.',
  },
  {
    icon: CalendarCheck,
    title: 'Social Media Management',
    description:
      'Custom branded posters, full profile optimization, niche hashtags, and end-to-end scheduled publishing.',
  },
  {
    icon: Compass,
    title: 'Brand Strategy & Growth',
    description:
      'Full-funnel positioning built to turn passive profile visitors into qualified WhatsApp & DM inquiries.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Core Services Built for Revenue"
          subtitle="Every deliverable is engineered around one question: does it move your brand closer to sales and authority?"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="group flex h-full flex-col rounded-3xl border border-sage-200 bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-card">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-forest-700 p-3.5 text-cream transition-colors duration-300 group-hover:bg-sage-600">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-forest-700">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-forest-500">
                  {description}
                </p>
                <button
                  onClick={() => scrollToId('packages')}
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-sage-600 transition-colors hover:text-forest-700"
                >
                  View packages
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
