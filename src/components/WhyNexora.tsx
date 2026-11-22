import { Check, X, User, Crown, Search, PenTool, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STEPS = [
  {
    icon: Search,
    step: 'STEP 01',
    title: 'Free Audit & Research',
    description:
      'We review your page, niche, and competitors to find exactly where attention is leaking away from your brand.',
  },
  {
    icon: PenTool,
    step: 'STEP 02',
    title: 'Content & Funnel Build',
    description:
      'Hook-driven scripts, cohesive luxury branding, and data-backed Meta funnels are built around your offer.',
  },
  {
    icon: Rocket,
    step: 'STEP 03',
    title: 'Publish, Test & Scale',
    description:
      'We publish, track, and optimize weekly — turning digital attention into qualified WhatsApp & DM inquiries.',
  },
];

const FREELANCER_POINTS = [
  'Basic templates',
  'Random posting',
  'Unmeasured boosting',
];

const NEXORA_POINTS = [
  'Hook-driven scripts',
  'Cohesive luxury branding',
  'Data-backed Meta funnels',
];

export default function WhyNexora() {
  return (
    <section id="system" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="WHY NEXORA"
          title="A Structured Approach to Growth"
          subtitle="A clear process connects brand positioning, content and campaign measurement."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-3xl border border-sage-200 bg-cream p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-200 text-forest-800">
                  <User size={22} />
                </span>
                <h3 className="font-serif text-xl font-semibold text-forest-500">
                  Unplanned Marketing
                </h3>
              </div>
              <div className="my-6 h-px w-full bg-sage-200" aria-hidden="true" />
              <ul className="flex flex-1 flex-col gap-4">
                {FREELANCER_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-200 text-forest-500">
                      <X size={14} />
                    </span>
                    <span className="text-[15px] font-medium text-forest-500">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-forest-400">
                Without defined goals, it is harder to evaluate performance.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative flex h-full flex-col rounded-3xl bg-forest-700 p-8 shadow-popular">
              <span className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-forest-900">
                <Crown size={17} />
              </span>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-500 text-cream">
                  <Crown size={22} />
                </span>
                <h3 className="font-serif text-xl font-semibold text-cream">
                  The Nexora Revenue System
                </h3>
              </div>
              <div className="my-6 h-px w-full bg-forest-500" aria-hidden="true" />
              <ul className="flex flex-1 flex-col gap-4">
                {NEXORA_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-forest-900">
                      <Check size={14} />
                    </span>
                    <span className="text-[15px] font-medium text-sage-100">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-gold-400">
                Strategy, craft, and data pointed at one goal: paying clients.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <Reveal>
            <p className="text-center text-[11px] font-bold tracking-widest2 text-sage-600">
              HOW IT WORKS
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, step, title, description }, i) => (
              <Reveal key={step} delay={i * 110}>
                <article className="group relative h-full rounded-3xl border border-sage-200 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-card">
                  <span className="absolute right-6 top-6 font-serif text-5xl font-semibold text-sage-100 transition-colors duration-300 group-hover:text-gold-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700 text-cream transition-colors duration-300 group-hover:bg-sage-600">
                    <Icon size={22} />
                  </span>
                  <p className="mt-5 text-[11px] font-bold tracking-widest2 text-gold-600">
                    {step}
                  </p>
                  <h4 className="mt-2 font-serif text-lg font-semibold text-forest-700">
                    {title}
                  </h4>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-forest-500">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
