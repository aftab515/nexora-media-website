import { ArrowUpRight, Compass, Layers3, MapPin, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { whatsappLink, WHATSAPP_MESSAGES } from '../constants';

const PRINCIPLES = [
  { icon: Compass, title: 'Strategy before posting', description: 'Start with a clear business goal, audience and message.' },
  { icon: Layers3, title: 'Consistent creative', description: 'Build recognizable visuals and content that fit your brand.' },
  { icon: ShieldCheck, title: 'Transparent collaboration', description: 'Agree on deliverables, access and expectations before work begins.' },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="ABOUT NEXORA" title="Independent by Design. Focused on Your Brand." subtitle="A Faisalabad-based digital marketing practice offering social media content, brand presentation and Meta advertising services." />
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-forest-700 p-8 text-cream shadow-elevated sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-sage-500/50" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-16 -left-20 h-64 w-64 rounded-full border border-gold-500/25" aria-hidden="true" />
              <p className="relative text-xs font-semibold tracking-widest2 text-gold-400">NEXORA MEDIA</p>
              <p className="relative mt-16 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Clarity.<br />Craft.<br /><em className="text-gold-400">Consistency.</em></p>
              <div className="relative mt-16 flex items-center gap-2 border-t border-forest-500 pt-5 text-sm text-sage-100"><MapPin size={17} aria-hidden="true" /> Faisalabad, Pakistan · Remote collaboration</div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-base leading-relaxed text-forest-600">Nexora Media works with businesses that want clearer brand communication and a more structured approach to social media. The practice is independently operated, so project requirements and approvals can be discussed directly without unnecessary handoffs.</p>
              <p className="mt-4 text-base leading-relaxed text-forest-600">Services range from branded posts and short-form video concepts to social media management and Meta Ads. Every engagement should begin with a defined scope, realistic goals and a clear approval process.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {PRINCIPLES.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="rounded-2xl border border-sage-200 bg-white p-5">
                    <Icon className="text-sage-600" size={22} aria-hidden="true" />
                    <h3 className="mt-4 text-sm font-semibold text-forest-800">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-500">{description}</p>
                  </div>
                ))}
              </div>
              <a href={whatsappLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-4 text-sm font-semibold text-cream hover:bg-forest-600">Discuss your project <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
