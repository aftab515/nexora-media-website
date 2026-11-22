import { ArrowRight, Instagram, MessageCircle, Play, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';
import { scrollToId, whatsappLink, WHATSAPP_MESSAGES } from '../constants';

const PILLARS = ['STRATEGY', 'CONTENT', 'ADS', 'GROWTH'];

const METRICS = [
  { icon: TrendingUp, value: 'Strategy', label: 'Conversion-focused planning' },
  { icon: Play, value: 'Creative', label: 'Reels and content production' },
  { icon: Instagram, value: 'Meta Ads', label: 'Campaign testing & optimization' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-sage-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-300/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white px-4 py-2 text-[11px] font-bold tracking-widest2 text-sage-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              DIGITAL &amp; SOCIAL MEDIA MARKETING AGENCY
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 font-serif text-[2.6rem] font-semibold leading-[1.12] text-forest-700 sm:text-5xl lg:text-[3.6rem]">
              Grow Your <em className="italic text-sage-600">Brand Online</em> — We
              Don&rsquo;t Chase Likes, We Build Sales &amp; Authority.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-500">
              High-retention Reels production, scroll-stopping brand content, and
              measurable Meta Ads campaigns designed to help turn digital attention into qualified inquiries.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-bold tracking-widest2 text-forest-800">
              {PILLARS.map((pillar, i) => (
                <span key={pillar} className="flex items-center gap-4">
                  {i > 0 && <span className="text-gold-500">&bull;</span>}
                  {pillar}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#audit"
                className="group inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-4 text-sm font-semibold text-cream shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-600"
              >
                Get Your Free Growth Plan
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <button
                onClick={() => scrollToId('packages')}
                className="inline-flex items-center gap-2 rounded-full border border-forest-300 bg-white px-7 py-4 text-sm font-semibold text-forest-700 transition-all duration-300 hover:border-sage-600 hover:text-sage-600"
              >
                Explore Packages
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="relative mx-auto w-full max-w-md animate-float-slow">
            <div className="rounded-[2rem] border border-sage-200 bg-white p-8 shadow-elevated">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold tracking-widest2 text-sage-600">
                    OUR APPROACH
                  </p>
                  <p className="mt-1 font-serif text-xl font-semibold text-forest-700">
                    The Nexora Growth System
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700 text-cream">
                  <TrendingUp size={22} />
                </span>
              </div>

              <div className="gold-hairline my-7" />

              <ul className="flex flex-col gap-4">
                {METRICS.map(({ icon: Icon, value, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-sage-100 bg-cream px-5 py-4 transition-colors duration-300 hover:border-sage-300"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-serif text-2xl font-semibold text-forest-700">
                        {value}
                      </p>
                      <p className="text-sm font-medium text-forest-500">{label}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center justify-between rounded-2xl bg-forest-700 px-5 py-4">
                <p className="text-sm font-medium leading-snug text-cream">
                  A clear strategy for{' '}
                  <span className="font-semibold text-gold-400">better inquiries.</span>
                </p>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-forest-900 transition-transform duration-300 hover:scale-110"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
