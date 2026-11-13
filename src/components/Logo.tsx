export default function Logo({ light = false }: { light?: boolean }) {
  const wordmark = light ? 'text-cream' : 'text-forest-700';
  const swoosh = light ? '#C5A059' : '#4D6E3C';

  return (
    <span className="flex items-center gap-3">
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#1E3D20" />
        <path
          d="M16 46 L16 21 Q16 17 19 20 L45 42 Q48 45 48 41 L48 18"
          stroke="#F8F8F5"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 9 A 22 22 0 0 1 56 27"
          stroke={swoosh}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="9" r="3" fill="#C5A059" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl font-semibold tracking-wide ${wordmark}`}>
          NEXORA
        </span>
        <span
          className={`text-[11px] font-semibold tracking-widest2 ${
            light ? 'text-gold-400' : 'text-sage-600'
          }`}
        >
          MEDIA
        </span>
      </span>
    </span>
  );
}
