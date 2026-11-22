import { useEffect, useState } from 'react';
import {
  Sparkles,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Copy,
  Share2,
  RotateCcw,
  ScanSearch,
  TrendingUp,
  AlertTriangle,
  Target,
  Languages,
} from 'lucide-react';
import Reveal from './Reveal';
import {
  diagnose,
  buildReportMessage,
  buildClientMessageEn,
  buildClientMessageUr,
  type AuditInput,
  type Diagnostic,
} from '../lib/auditEngine';
import { whatsappLink, WHATSAPP_DISPLAY } from '../constants';

const INDUSTRIES = [
  'Clinic / Healthcare',
  'Clothing / Fashion Brand',
  'Restaurant / Cafe',
  'Salon / Aesthetics',
  'Real Estate / Builders',
  'Academy / Education',
  'E-Commerce / Retail',
  'Other Local Business',
];

const SITUATIONS = [
  'Posting regularly but getting zero sales/inquiries',
  'Inconsistent posting & basic template designs',
  'Boosting posts on FB/IG but wasting ad budget',
  'New brand / Need complete social media setup',
];

const GOALS = [
  'Generate More Sales & WhatsApp Leads',
  'Upgrade Feed & High-Retention Reels',
  'Scale with Targeted Meta Ads',
  'Full End-to-End Social Media Management',
];

const SCAN_STEPS = [
  'Reviewing your selected business situation...',
  'Matching possible content and campaign improvements...',
  'Preparing suggested services based on your goal...',
];

const EMPTY_FORM: AuditInput = {
  brandName: '',
  industry: '',
  pageLink: '',
  situation: '',
  goal: '',
};

type Phase = 'form' | 'scanning' | 'result';

const inputClasses =
  'w-full rounded-2xl border border-sage-200 bg-cream px-5 py-4 text-[15px] font-medium text-forest-800 placeholder:text-forest-400 placeholder:font-normal outline-none transition-all duration-300 focus:border-sage-600 focus:bg-white focus:ring-4 focus:ring-sage-100';

const labelClasses = 'mb-2 block text-sm font-semibold text-forest-800';

export default function AuditForm() {
  const [phase, setPhase] = useState<Phase>('form');
  const [form, setForm] = useState<AuditInput>(EMPTY_FORM);
  const [incomplete, setIncomplete] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState<Diagnostic | null>(null);
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const [copied, setCopied] = useState(false);

  const clientMessage = result
    ? lang === 'en'
      ? buildClientMessageEn(form, result)
      : buildClientMessageUr(form, result)
    : '';
  useEffect(() => {
    if (phase !== 'scanning') return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    SCAN_STEPS.forEach((_, i) => {
      if (i > 0) timers.push(setTimeout(() => setScanStep(i), (i * 2200) / SCAN_STEPS.length));
    });
    timers.push(
      setTimeout(() => {
        setResult(diagnose(form));
        setPhase('result');
      }, 2200)
    );
    return () => timers.forEach(clearTimeout);
  }, [phase, form]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phase !== 'form') return;

    const data = new FormData(e.currentTarget);
    const input: AuditInput = {
      brandName: String(data.get('brandName') ?? '').trim(),
      industry: String(data.get('industry') ?? ''),
      pageLink: String(data.get('pageLink') ?? '').trim(),
      situation: String(data.get('situation') ?? ''),
      goal: String(data.get('goal') ?? ''),
    };

    if (
      !input.brandName ||
      !input.industry ||
      !input.pageLink ||
      !input.situation ||
      !input.goal
    ) {
      setIncomplete(true);
      return;
    }
    setIncomplete(false);
    setForm(input);
    setScanStep(0);
    setPhase('scanning');

  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setResult(null);
    setCopied(false);
    setIncomplete(false);
    setPhase('form');
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(clientMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="audit" className="relative overflow-hidden bg-forest-700 py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-forest-500/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-sage-600/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold tracking-widest2 text-gold-400">
              NEXORA BRAND GROWTH PLANNER
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              Build Your Preliminary Growth Plan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-sage-100">
              Answer five questions for a free, rule-based recommendation. This tool does not inspect your social page, advertising data or actual performance. Request a manual review for verified findings.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-3xl">
            {phase === 'form' && (
              <form
                onSubmit={handleSubmit}
                className="animate-fade-up rounded-[2rem] bg-white p-7 shadow-popular sm:p-9"
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="brand-name" className={labelClasses}>
                      Business / Brand Name
                    </label>
                    <input
                      id="brand-name"
                      type="text"
                      name="brandName"
                      maxLength={120}
                      required
                      value={form.brandName}
                      onChange={(e) => setForm({ ...form, brandName: e.target.value })}
                      placeholder="e.g. Life Care Clinic or Zara's Couture"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className={labelClasses}>
                      Business Industry / Niche
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className={`${inputClasses} appearance-none ${form.industry === '' ? 'text-forest-400 font-normal' : ''}`}
                    >
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {INDUSTRIES.map((option) => (
                        <option key={option} value={option} className="font-medium text-forest-800">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="page-link" className={labelClasses}>
                      Instagram or Facebook Page Link / @Handle
                    </label>
                    <input
                      id="page-link"
                      type="text"
                      name="pageLink"
                      maxLength={300}
                      required
                      value={form.pageLink}
                      onChange={(e) => setForm({ ...form, pageLink: e.target.value })}
                      placeholder="e.g. instagram.com/yourbrand or @yourbrand"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="situation" className={labelClasses}>
                      Current Social Media Situation
                    </label>
                    <select
                      id="situation"
                      name="situation"
                      required
                      value={form.situation}
                      onChange={(e) => setForm({ ...form, situation: e.target.value })}
                      className={`${inputClasses} appearance-none ${form.situation === '' ? 'text-forest-400 font-normal' : ''}`}
                    >
                      <option value="" disabled>
                        Select your current situation
                      </option>
                      {SITUATIONS.map((option) => (
                        <option key={option} value={option} className="font-medium text-forest-800">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="goal" className={labelClasses}>
                      Primary Business Goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      required
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className={`${inputClasses} appearance-none ${form.goal === '' ? 'text-forest-400 font-normal' : ''}`}
                    >
                      <option value="" disabled>
                        Select your primary goal
                      </option>
                      {GOALS.map((option) => (
                        <option key={option} value={option} className="font-medium text-forest-800">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-forest-700 px-7 py-4 text-sm font-semibold text-cream shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-600"
                  >
                    Generate Growth Plan
                    <Sparkles size={18} className="text-gold-400 transition-transform duration-300 group-hover:scale-125" />
                  </button>

                  {incomplete && (
                    <p className="flex items-center justify-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      <AlertCircle size={16} className="shrink-0" />
                      Please fill in all 5 fields above so the growth planner can run.
                    </p>
                  )}

                  <p className="text-center text-[13px] text-forest-400">
                    Free, no sign-up. Answers stay in your browser unless you choose to send them via WhatsApp. Do not enter sensitive information.
                  </p>
                </div>
              </form>
            )}

            {phase === 'scanning' && (
              <div className="animate-fade-up rounded-[2rem] bg-white p-9 shadow-popular sm:p-12">
                <div className="flex flex-col items-center text-center">
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-forest-700">
                    <span className="absolute inset-0 animate-ping rounded-full bg-forest-700/30" />
                    <ScanSearch size={32} className="relative text-gold-400" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-forest-700">
                    Preparing Your Growth Plan
                  </h3>
                  <p className="mt-1 text-sm font-medium text-forest-400">{form.brandName}</p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  {SCAN_STEPS.map((step, i) => {
                    const active = i === scanStep;
                    const done = i < scanStep;
                    return (
                      <div
                        key={step}
                        className={`flex items-center gap-3.5 rounded-2xl border px-5 py-4 transition-all duration-500 ${
                          done
                            ? 'border-sage-200 bg-sage-50'
                            : active
                              ? 'border-forest-300 bg-cream shadow-card'
                              : 'border-sage-100 bg-white opacity-45'
                        }`}
                      >
                        {done ? (
                          <CheckCircle2 size={20} className="shrink-0 text-sage-600" />
                        ) : (
                          <span
                            className={`h-5 w-5 shrink-0 rounded-full border-[3px] ${
                              active
                                ? 'animate-spin border-sage-200 border-t-forest-700'
                                : 'border-sage-200'
                            }`}
                          />
                        )}
                        <span
                          className={`text-left text-sm font-medium ${
                            done ? 'text-forest-500' : active ? 'text-forest-800' : 'text-forest-400'
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-sage-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sage-600 to-forest-700 transition-all duration-700 ease-linear"
                    style={{ width: `${((scanStep + 1) / SCAN_STEPS.length) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {phase === 'result' && result && (
              <div className="animate-fade-up flex flex-col gap-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <article className="flex flex-col rounded-[2rem] bg-white p-7 shadow-popular sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-xl font-semibold text-forest-700">
                        Preliminary Growth Recommendations
                      </h3>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-700 text-gold-400">
                        <TrendingUp size={19} />
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between rounded-2xl bg-forest-700 px-5 py-4">
                      <div>
                        <p className="font-serif text-xl font-bold text-cream">Based on your answers</p>
                        <p className="text-[13px] font-semibold text-gold-400">
                          {result.scoreLabel}
                        </p>
                      </div>
                      <Sparkles size={26} className="shrink-0 text-gold-400" />
                    </div>

                    <div className="mt-6">
                      <p className="flex items-center gap-2 text-sm font-bold text-forest-800">
                        <AlertTriangle size={16} className="text-gold-600" />
                        3 areas to investigate
                      </p>
                      <ul className="mt-3 flex flex-col gap-3">
                        {result.bottlenecks.map((b, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 rounded-xl border border-sage-100 bg-cream px-4 py-3"
                          >
                            <span className="mt-0.5 font-serif text-sm font-bold text-gold-600">
                              {i + 1}.
                            </span>
                            <span className="text-[14px] leading-snug text-forest-500">Potential issue to verify: {b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <p className="flex items-center gap-2 text-sm font-bold text-forest-800">
                        <Target size={16} className="text-sage-600" />
                        Recommended Nexora Growth Plan
                      </p>
                      <div className="mt-3 rounded-2xl border-2 border-sage-600 bg-sage-50 px-5 py-4">
                        <p className="font-serif text-xl font-semibold text-forest-700">
                          {result.planName}
                        </p>
                        <p className="text-sm font-bold text-sage-600">{result.planPrice}</p>
                        <ul className="mt-3 flex flex-col gap-2">
                          {result.planReasons.map((reason) => (
                            <li key={reason} className="flex items-start gap-2">
                              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-sage-600" />
                              <span className="text-[13px] leading-snug text-forest-500">
                                {reason}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href={whatsappLink(buildReportMessage(form, result))}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setCopied(false)}
                      className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 text-center text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-600"
                    >
                      <MessageCircle size={17} />
                      Send Audit Report to Nexora WhatsApp ({WHATSAPP_DISPLAY})
                    </a>
                  </article>

                  <article className="flex flex-col rounded-[2rem] border-2 border-gold-500/60 bg-white p-7 shadow-popular sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-xl font-semibold text-forest-700">
                        Draft Discussion Message
                      </h3>
                      <span className="flex items-center gap-1.5 rounded-full bg-forest-700 px-3 py-1.5 text-[11px] font-bold text-cream">
                        <Sparkles size={12} className="text-gold-400" />
                        REVIEW FIRST
                      </span>
                    </div>

                    <div className="mt-5 flex w-fit items-center gap-1 rounded-full border border-sage-200 bg-cream p-1">
                      <Languages size={14} className="ml-2 text-sage-600" />
                      {(['en', 'ur'] as const).map((code) => (
                        <button
                          key={code}
                          onClick={() => setLang(code)}
                          className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-all duration-300 ${
                            lang === code
                              ? 'bg-forest-700 text-cream'
                              : 'text-forest-500 hover:text-sage-600'
                          }`}
                        >
                          {code === 'en' ? 'Professional English' : 'Natural Roman Urdu'}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 max-h-80 flex-1 overflow-y-auto rounded-2xl border border-sage-200 bg-cream p-5">
                      <p className="whitespace-pre-line text-left text-[13.5px] leading-relaxed text-forest-500">
                        {clientMessage}
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button
                        onClick={copyMessage}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-300 bg-white px-4 py-3 text-[13px] font-semibold text-forest-700 transition-all duration-300 hover:border-sage-600 hover:text-sage-600"
                      >
                        <Copy size={15} />
                        Copy Client Response
                      </button>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(clientMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-600 px-4 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-sage-500"
                      >
                        <Share2 size={15} />
                        Share via WhatsApp
                      </a>
                    </div>

                    {copied && (
                      <p className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-sage-50 px-4 py-2.5 text-[13px] font-semibold text-sage-700">
                        <CheckCircle2 size={15} />
                        Copied to Clipboard!
                      </p>
                    )}

                    <p className="mt-4 text-center text-[12px] text-forest-400">
                      Verify the suggested issues manually before sharing this draft with a client.
                    </p>
                  </article>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sage-100 transition-colors duration-300 hover:text-gold-400"
                  >
                    <RotateCcw size={15} />
                    Reset / Audit Another Brand
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

