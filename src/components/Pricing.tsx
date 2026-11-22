import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { whatsappLink, WHATSAPP_MESSAGES } from '../constants';

type Package = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  note?: string;
};

type Catalog = {
  id: string;
  tab: string;
  subtitle: string;
  packages: Package[];
  banner?: string;
};

const CATALOGS: Catalog[] = [
  {
    id: 'smm',
    tab: 'Social Media Management',
    subtitle: 'Consistent Presence & Brand Authority',
    packages: [
      {
        name: 'Starter Presence',
        price: 'PKR 7,000 / Mo',
        features: [
          '4 Custom Branded Posters',
          'Captions & Hashtags',
          'Scheduled Publishing',
        ],
        note: 'No Intro Posts • No Reels',
      },
      {
        name: 'Standard Growth',
        price: 'PKR 30,000 / Mo',
        popular: true,
        features: [
          '14 Custom Premium Posters',
          '2 Video Reels Included',
          'Full Profile Optimization',
          'End-to-End Scheduling',
        ],
      },
      {
        name: 'Growth Starter',
        price: 'PKR 10,000 / Mo',
        features: [
          '5 Custom Branded Posters',
          '1 Bonus Intro Video',
          'Captions & Niche Hashtags',
          'Scheduled Publishing',
        ],
      },
    ],
  },
  {
    id: 'reels',
    tab: 'Strategic Reels Production',
    subtitle: 'High-Retention Visuals',
    packages: [
      {
        name: 'Essential Reels',
        price: 'PKR 15,000 / Mo',
        features: [
          '4 Strategic Video Reels',
          'Scriptwriting & Hooks',
          'Voiceover & Audio Sync',
        ],
      },
      {
        name: 'Growth Reels',
        price: 'PKR 20,000 / Mo',
        popular: true,
        features: [
          '6 Strategic Video Reels',
          'Trend Research & Viral Formats',
          'Dynamic Captions & Sound Design',
        ],
      },
    ],
  },
  {
    id: 'ads',
    tab: 'Meta Ads Management',
    subtitle: 'Targeted Client Acquisition',
    banner: 'Agency fee only. Ad spend paid directly to Meta. Results vary by offer, audience, creative and budget.',
    packages: [
      {
        name: 'Campaign Essentials',
        price: 'PKR 25,000 / Mo',
        features: [
          'Up to 2 Active Ad Campaigns',
          'Audience Research',
          'Converting Ad Copy',
        ],
      },
      {
        name: 'Advanced Growth',
        price: 'PKR 30,000 / Mo',
        popular: true,
        features: [
          'Up to 4 Active Ad Campaigns',
          'A/B Split Testing',
          'Retargeting Setup',
          'Weekly Optimization',
        ],
      },
    ],
  },
];

function PackageCard({ pkg }: { pkg: Package }) {
  const { name, price, features, popular, note } = pkg;

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
        popular
          ? 'bg-forest-700 text-cream shadow-popular'
          : 'border border-sage-200 bg-white shadow-card hover:shadow-elevated'
      }`}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-500 px-4 py-1.5 text-[11px] font-bold tracking-widest2 text-forest-900 shadow-card">
          RECOMMENDED
        </span>
      )}

      <h3
        className={`font-serif text-2xl font-semibold ${popular ? 'text-cream' : 'text-forest-700'}`}
      >
        {name}
      </h3>
      <p
        className={`mt-2 font-serif text-3xl font-bold ${
          popular ? 'text-gold-400' : 'text-sage-600'
        }`}
      >
        {price}
      </p>

      <div
        className={`my-6 h-px w-full ${popular ? 'bg-forest-500' : 'bg-sage-200'}`}
        aria-hidden="true"
      />

      <ul className="flex flex-1 flex-col gap-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              size={18}
              className={`mt-0.5 shrink-0 ${popular ? 'text-gold-400' : 'text-sage-600'}`}
            />
            <span
              className={`text-[15px] font-medium leading-snug ${
                popular ? 'text-sage-100' : 'text-forest-500'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {note && (
        <p className="mt-5 text-[13px] italic text-forest-400">{note}</p>
      )}

      <a
        href={whatsappLink(WHATSAPP_MESSAGES.package(name, price))}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
          popular
            ? 'bg-gold-500 text-forest-900 hover:bg-gold-400'
            : 'bg-forest-700 text-cream hover:bg-forest-600'
        }`}
      >
        Enquire About This Package
      </a>
    </article>
  );
}

export default function Pricing() {
  const [activeId, setActiveId] = useState(CATALOGS[0].id);
  const active = CATALOGS.find((c) => c.id === activeId) ?? CATALOGS[0];

  return (
    <section id="packages" className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="PACKAGES"
          title="Transparent Pricing, Clear Deliverables"
          subtitle="Choose the catalog that fits your stage — every package is delivered with agency-grade craft."
        />

        <Reveal delay={100}>
          <div
            className="mt-12 flex flex-wrap justify-center gap-2 rounded-full border border-sage-200 bg-white p-2 shadow-card sm:mx-auto sm:w-fit"
            role="tablist"
            aria-label="Service catalogs"
          >
            {CATALOGS.map((catalog) => {
              const isActive = catalog.id === activeId;
              return (
                <button
                  key={catalog.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(catalog.id)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-forest-700 text-cream shadow-elevated'
                      : 'text-forest-800 hover:bg-sage-50 hover:text-sage-600'
                  }`}
                >
                  {catalog.tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p
            key={`${active.id}-subtitle`}
            className="mt-6 animate-fade-up text-center text-sm font-semibold tracking-wide text-sage-600"
          >
            {active.subtitle}
          </p>
        </Reveal>

        <div
          key={active.id}
          className={`mt-10 grid animate-fade-up gap-6 ${
            active.packages.length === 3 ? 'md:grid-cols-3' : 'mx-auto max-w-4xl md:grid-cols-2'
          }`}
        >
          {active.packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {active.banner && (
          <div
            key={`${active.id}-banner`}
            className="mx-auto mt-10 flex w-fit max-w-full animate-fade-up items-center gap-3 rounded-2xl border border-sage-200 bg-white px-6 py-4 shadow-card"
          >
            <Info size={18} className="shrink-0 text-gold-600" />
            <p className="text-sm font-medium text-forest-500">{active.banner}</p>
          </div>
        )}
      </div>
    </section>
  );
}
