import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { scrollToId } from '../constants';

const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Showcase', id: 'showcase' },
  { label: 'Packages', id: 'packages' },
  { label: 'Our System', id: 'system' },
  { label: 'Growth Planner', id: 'audit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 shadow-card backdrop-blur-md border-b border-sage-200'
          : 'bg-cream/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
          className="shrink-0"
          aria-label="Back to top"
        >
          <Logo />
        </button>

        <ul className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className="group relative text-sm font-semibold text-forest-800 transition-colors hover:text-sage-600"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#audit"
            onClick={() => go('audit')}
            className="hidden rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-600 sm:inline-block"
          >
            Free Growth Plan
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage-200 bg-white text-forest-700 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-sage-200 bg-cream px-5 pb-6 pt-3 xl:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-forest-800 transition-colors hover:bg-sage-50"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#audit"
                onClick={() => go('audit')}
                className="block rounded-full bg-forest-700 px-6 py-3 text-center text-sm font-semibold text-cream"
              >
                Free Growth Plan
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
