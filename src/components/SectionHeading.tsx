import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <p
          className={`text-[11px] font-bold tracking-widest2 ${
            light ? 'text-gold-400' : 'text-sage-600'
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl ${
            light ? 'text-cream' : 'text-forest-700'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-base leading-relaxed ${
              light ? 'text-sage-100' : 'text-forest-500'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
