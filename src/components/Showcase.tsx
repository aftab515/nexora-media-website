import { useState } from 'react';
import { ArrowUpRight, ImageOff } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { whatsappLink } from '../constants';

type Category = 'All' | 'Food & Restaurants' | 'Healthcare' | 'Beauty & Wellness' | 'International Brands';

type Concept = {
  title: string;
  category: Exclude<Category, 'All'>;
  niche: string;
  image: string;
  description: string;
};

const CONCEPTS: Concept[] = [
  {
    title: 'Ember & Crust',
    category: 'Food & Restaurants',
    niche: 'Pizza restaurant',
    image: '/portfolio/pizza-restaurant.webp',
    description: 'An appetite-led campaign concept combining product photography, warm lighting and an immediate order-focused message.',
  },
  {
    title: 'Pearl Dental Studio',
    category: 'Healthcare',
    niche: 'Dental clinic',
    image: '/portfolio/dental-clinic.webp',
    description: 'A welcoming dental brand concept that emphasizes comfort, clarity and professional presentation.',
  },
  {
    title: 'Velune Skincare',
    category: 'International Brands',
    niche: 'Beauty & cosmetics',
    image: '/portfolio/international-skincare.webp',
    description: 'A premium editorial direction for a global-facing skincare brand, using product-focused storytelling and restrained typography.',
  },
  {
    title: 'Stack House',
    category: 'Food & Restaurants',
    niche: 'Burger restaurant',
    image: '/portfolio/burger-restaurant.webp',
    description: 'A bold, high-contrast creative direction for a burger brand, built around cravings, texture and memorable food presentation.',
  },
  {
    title: 'Derma & Co. Skin Clinic',
    category: 'Beauty & Wellness',
    niche: 'Dermatology & skin care',
    image: '/portfolio/healthcare-clinic.webp',
    description: 'A calm, consultation-led skin clinic concept focused on clear information and a distinctive, natural visual palette.',
  },
  {
    title: 'Compassionate Care',
    category: 'Healthcare',
    niche: 'Family hospital',
    image: '/portfolio/family-hospital.webp',
    description: 'An accessible visual system for communicating family healthcare services and patient-focused information.',
  },
];

const CATEGORIES: Category[] = ['All', 'Food & Restaurants', 'Healthcare', 'Beauty & Wellness', 'International Brands'];

function ConceptImage({ concept }: { concept: Concept }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-sage-100">
      {failed ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-forest-600">
          <ImageOff size={32} aria-hidden="true" />
          <p className="text-sm font-semibold">Image pending upload</p>
          <p className="text-xs">Concept: {concept.niche}</p>
        </div>
      ) : (
        <img
          src={concept.image}
          alt={`Illustrative Nexora Media concept artwork for ${concept.niche}: ${concept.title}`}
          loading="lazy"
          decoding="async"
          width={960}
          height={1200}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}
      <span className="absolute left-4 top-4 rounded-full bg-forest-800/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cream">
        Concept Campaign
      </span>
    </div>
  );
}

export default function Showcase() {
  const [active, setActive] = useState<Category>('All');
  const visible = active === 'All' ? CONCEPTS : CONCEPTS.filter(concept => concept.category === active);

  return (
    <section id="showcase" className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="NEXORA CREATIVE PORTFOLIO"
          title="Creative Concepts Across Industries"
          subtitle="Explore sample campaigns for food, healthcare, skin care and international cosmetics. These are illustrative, fictional-brand concepts—not commissioned client projects, testimonials or verified campaign results."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter portfolio by industry">
          {CATEGORIES.map(category => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${active === category ? 'border-forest-700 bg-forest-700 text-cream' : 'border-sage-200 bg-white text-forest-700 hover:border-sage-500'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-forest-500" aria-live="polite">
          Showing {visible.length} of {CONCEPTS.length} illustrative concepts
        </p>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((concept, index) => (
            <Reveal key={concept.title} delay={Math.min(index, 3) * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sage-200 bg-white shadow-card">
                <ConceptImage concept={concept} />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-sage-600">{concept.category} · {concept.niche}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-forest-700">{concept.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-forest-500">{concept.description}</p>
                  <a
                    href={whatsappLink(`Hi Nexora Media! I would like to discuss a creative campaign for my business inspired by your ${concept.title} concept.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-forest-700 hover:underline"
                  >
                    Discuss a similar campaign <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-forest-500">
          Nexora Media develops creative directions for businesses in Faisalabad, across Pakistan and international markets. Examples on this page are creative demonstrations only; any real client work will be identified separately with permission.
        </p>
      </div>
    </section>
  );
}
