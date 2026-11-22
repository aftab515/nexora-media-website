import { MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { whatsappLink, WHATSAPP_MESSAGES } from '../constants';

const QUESTIONS = [
  ['Does the monthly fee include advertising spend?', 'No. Meta Ads management packages cover agency services. Advertising spend is separate and paid directly to Meta. Confirm your budget and campaign scope before starting.'],
  ['What do you need from me to get started?', 'Your business goals, public social media page link (if available), brand guidelines and available content are useful. If account access is needed, use official asset permissions rather than sending passwords.'],
  ['Can you work with businesses outside Faisalabad?', 'Nexora Media serves businesses in Faisalabad and remotely. Discuss content production, approvals and any location-specific requirements before booking.'],
  ['Will you guarantee leads, sales or a particular ROAS?', 'No. Outcomes depend on the offer, market, audience, creative, budget and follow-up. We recommend agreeing on measurable goals and reviewing results regularly.'],
  ['Does the growth planner analyze my actual page?', 'No. It uses your questionnaire answers and preset recommendations. It does not connect to Meta, inspect posts or read analytics. Contact Nexora for a manual review.'],
  ['How do I request a consultation?', 'Choose a package or use the growth planner, then send an inquiry through WhatsApp. The message is prepared for you, but you decide whether to send it.'],
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading eyebrow="BEFORE WE START" title="Frequently Asked Questions" subtitle="Clear answers about pricing, access and expectations." />
        <div className="mt-10 space-y-3">
          {QUESTIONS.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-sage-200 bg-cream px-6 py-5">
              <summary className="cursor-pointer font-semibold text-forest-700">{question}</summary>
              <p className="mt-3 text-[15px] leading-relaxed text-forest-500">{answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a href={whatsappLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-7 py-4 text-sm font-semibold text-cream hover:bg-forest-600">
            <MessageCircle size={18} aria-hidden="true" /> Ask Nexora on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
