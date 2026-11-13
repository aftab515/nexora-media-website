export type AuditInput = {
  brandName: string;
  industry: string;
  pageLink: string;
  situation: string;
  goal: string;
};

export type Diagnostic = {
  score: number;
  scoreLabel: string;
  bottlenecks: string[];
  fixes: string[];
  planName: string;
  planPrice: string;
  planReasons: string[];
};

const SITUATION_BOTTLENECKS: Record<string, string[]> = {
  'Posting regularly but getting zero sales/inquiries': [
    'Content gets views but has no conversion path — posts do not guide viewers toward WhatsApp or DM inquiries',
    'No 3-second hook structure in Reels, so viewers scroll past before the message lands',
    'Captions end without a call-to-action, leaving engaged visitors with nowhere to go',
  ],
  'Inconsistent posting & basic template designs': [
    'Template-heavy feed reads as generic, weakening brand authority at first glance',
    'Irregular posting cadence kills algorithm momentum and audience recall',
    'No cohesive visual identity across posts, so the brand is forgettable in a crowded feed',
  ],
  'Boosting posts on FB/IG but wasting ad budget': [
    'Boosted posts target broad, unoptimized audiences instead of intent-based customer segments',
    'No retargeting funnel in Meta Ads Manager, so warm visitors are never converted',
    'No A/B split testing on creatives or copy, so ad spend repeats what does not convert',
  ],
  'New brand / Need complete social media setup': [
    'No optimized bio, highlight structure, or profile positioning to convert profile visits into leads',
    'Zero branded content library, so the launch has no visual authority behind it',
    'No niche hashtag or distribution strategy to reach the first wave of customers',
  ],
};

const SITUATION_FIXES: Record<string, string[]> = {
  'Posting regularly but getting zero sales/inquiries': [
    'Conversion-focused content with CTA scripts engineered to move viewers into WhatsApp',
    'Hook-driven Reels scripts built to hold retention in the first 3 seconds',
    'A lead-path audit of every post type so engagement has somewhere to go',
  ],
  'Inconsistent posting & basic template designs': [
    'Custom luxury-branded poster system replacing templates',
    'End-to-end scheduled publishing so cadence never breaks',
    'Full profile optimization that turns profile visits into inquiries',
  ],
  'Boosting posts on FB/IG but wasting ad budget': [
    'Meta Ads Manager campaigns with researched, intent-based audiences',
    'Retargeting funnels that convert warm visitors instead of ignoring them',
    'Continuous A/B split testing so budget scales only what converts',
  ],
  'New brand / Need complete social media setup': [
    'Complete profile setup with an authority-building bio and highlight system',
    'A launch-ready library of custom branded posters and Reels',
    'Niche hashtag and distribution strategy to reach first customers fast',
  ],
};

const INDUSTRY_BOTTLENECKS: Record<string, string> = {
  'Clinic / Healthcare':
    'Trust signals (patient results, doctor authority content) are underused, which matters most in healthcare decisions',
  'Clothing / Fashion Brand':
    'Product presentation lacks editorial-grade visuals, so perceived value drops below the price point',
  'Restaurant / Cafe':
    'Craving-driven Reels (food close-ups, ambiance, offers) are missing, the single biggest driver of walk-ins',
  'Salon / Aesthetics':
    'Before/after transformations are not packaged as high-retention Reels, losing the niche’s strongest proof',
  'Real Estate / Builders':
    'Property walkthroughs lack structured hooks and lead capture, so serious buyers scroll past listings',
  'Academy / Education':
    'Success stories and course-outcome content are missing, which is what converts parents and students',
  'E-Commerce / Retail':
    'Catalog content is not connected to a Meta funnel, so browsers never become buyers',
  'Other Local Business':
    'Local-area targeting and offer-led content are missing, so nearby customers never discover the brand',
};

const GOAL_PLANS: Record<string, { name: string; price: string; reasons: string[] }> = {
  'Generate More Sales & WhatsApp Leads': {
    name: 'Standard Growth',
    price: 'PKR 30,000 / Mo',
    reasons: [
      '14 custom premium posters keep the feed converting around the clock',
      '2 included video Reels add the motion content sales demands',
      'Full profile optimization plus end-to-end scheduling turns visitors into WhatsApp inquiries',
    ],
  },
  'Upgrade Feed & High-Retention Reels': {
    name: 'Growth Reels',
    price: 'PKR 20,000 / Mo',
    reasons: [
      '6 strategic video Reels per month rebuild the feed around retention',
      'Trend research and viral formats keep content ahead of the niche',
      'Dynamic captions and sound design maximize watch-time and shares',
    ],
  },
  'Scale with Targeted Meta Ads': {
    name: 'Advanced Growth',
    price: 'PKR 30,000 / Mo',
    reasons: [
      'Up to 4 active campaigns test multiple audiences in parallel',
      'A/B split testing and retargeting stop budget leaks fast',
      'Weekly optimization compounds ROAS instead of boosting blindly',
    ],
  },
  'Full End-to-End Social Media Management': {
    name: 'Standard Growth',
    price: 'PKR 30,000 / Mo',
    reasons: [
      'Complete feed management — posters, Reels, captions, hashtags',
      'Full profile optimization and scheduled publishing handled end-to-end',
      'Strategy call alignment so every post maps to your business goal',
    ],
  },
};

function scoreFor(input: AuditInput): number {
  let score = 38;
  if (input.situation.startsWith('Posting regularly but')) score += 12;
  if (input.situation.startsWith('Inconsistent posting')) score += 2;
  if (input.situation.startsWith('Boosting posts')) score += 8;
  if (input.situation.startsWith('New brand')) score += 0;
  if (input.pageLink.trim() !== '') score += 6;
  if (input.industry === 'E-Commerce / Retail' || input.industry === 'Clothing / Fashion Brand')
    score += 4;
  return Math.min(72, score);
}

export function diagnose(input: AuditInput): Diagnostic {
  const score = scoreFor(input);
  const plan = GOAL_PLANS[input.goal] ?? GOAL_PLANS['Generate More Sales & WhatsApp Leads'];
  const situationPoints = SITUATION_BOTTLENECKS[input.situation] ?? SITUATION_BOTTLENECKS['Inconsistent posting & basic template designs'];
  const industryPoint =
    INDUSTRY_BOTTLENECKS[input.industry] ?? INDUSTRY_BOTTLENECKS['Other Local Business'];

  return {
    score,
    scoreLabel: 'High Untapped Revenue Potential',
    bottlenecks: [situationPoints[0], situationPoints[1], industryPoint],
    fixes: [situationFixesOf(input)[0], situationFixesOf(input)[1], industryFixOf(input)],
    planName: plan.name,
    planPrice: plan.price,
    planReasons: plan.reasons,
  };
}

function situationFixesOf(input: AuditInput): string[] {
  return (
    SITUATION_FIXES[input.situation] ?? SITUATION_FIXES['Inconsistent posting & basic template designs']
  );
}

function industryFixOf(input: AuditInput): string {
  const fixes: Record<string, string> = {
    'Clinic / Healthcare':
      'Authority-building doctor/patient-result content system to earn trust before the inquiry',
    'Clothing / Fashion Brand':
      'Editorial-grade product Reels and poster system that lifts perceived brand value',
    'Restaurant / Cafe':
      'Craving-driven food Reels with offer-led CTAs to drive walk-ins and orders',
    'Salon / Aesthetics':
      'Before/after transformation Reels packaged for maximum saves and shares',
    'Real Estate / Builders':
      'Hook-structured property walkthroughs wired into a WhatsApp lead funnel',
    'Academy / Education':
      'Outcome-focused success-story content that converts parents and students',
    'E-Commerce / Retail':
      'Catalog-connected Meta funnel turning browsers into repeat buyers',
    'Other Local Business':
      'Area-targeted, offer-led campaigns that make nearby customers choose you',
  };
  return fixes[input.industry] ?? fixes['Other Local Business'];
}

export function buildReportMessage(input: AuditInput, d: Diagnostic): string {
  return [
    'Hi Nexora Media! I just generated my AI Brand Audit and would like to proceed.',
    '',
    `*Brand:* ${input.brandName}`,
    `*Industry:* ${input.industry}`,
    `*Page:* ${input.pageLink}`,
    `*Current Situation:* ${input.situation}`,
    `*Primary Goal:* ${input.goal}`,
    '',
    `*AI Growth Readiness Score:* ${d.score}/100 — ${d.scoreLabel}`,
    '',
    '*Top Bottlenecks Detected:*',
    `1. ${d.bottlenecks[0]}`,
    `2. ${d.bottlenecks[1]}`,
    `3. ${d.bottlenecks[2]}`,
    '',
    `*Recommended Package:* ${d.planName} — ${d.planPrice}`,
    'Please share the next steps to get started.',
  ].join('\n');
}

export function buildClientMessageEn(input: AuditInput, d: Diagnostic): string {
  return [
    `Hello ${input.brandName} team, this is Nexora Media.`,
    '',
    `We ran a quick complimentary audit of your page (${input.pageLink}) and wanted to share what we found.`,
    '',
    `Growth Readiness Score: ${d.score}/100 — there is significant untapped revenue potential here.`,
    '',
    '3 things holding the page back right now:',
    `1. ${d.bottlenecks[0]}`,
    `2. ${d.bottlenecks[1]}`,
    `3. ${d.bottlenecks[2]}`,
    '',
    'How Nexora fixes this:',
    `— ${d.fixes[0]}`,
    `— ${d.fixes[1]}`,
    `— ${d.fixes[2]}`,
    '',
    `Recommended plan: ${d.planName} (${d.planPrice}). It is built specifically for businesses in your situation and includes everything above, handled end-to-end by our team.`,
    '',
    'Would you be open to a quick 10-minute call this week to walk through the audit? No obligation at all.',
    '',
    '— Nexora Media | Digital & Social Media Marketing',
  ].join('\n');
}

export function buildClientMessageUr(input: AuditInput, d: Diagnostic): string {
  return [
    `Assalam-o-Alaikum ${input.brandName} team! Nexora Media se baat kar rahe hain.`,
    '',
    `Hum ne aap ke page (${input.pageLink}) ki free audit ki hai aur kuch important cheezein mili hain jo bataana chahte hain.`,
    '',
    `Growth Score: ${d.score}/100 — matlab kaafi potential hai jo abhi use nahi ho raha.`,
    '',
    'Filhal 3 cheezein page ko rok rahi hain:',
    `1. ${d.bottlenecks[0]}`,
    `2. ${d.bottlenecks[1]}`,
    `3. ${d.bottlenecks[2]}`,
    '',
    'Nexora ye kaise theek karega:',
    `— ${d.fixes[0]}`,
    `— ${d.fixes[1]}`,
    `— ${d.fixes[2]}`,
    '',
    `Humara suggested plan: ${d.planName} (${d.planPrice}). Ye plan aap jaise businesses ke liye design kiya gaya hai — sab kuch hamari team end-to-end handle karti hai.`,
    '',
    'Kya is week ek quick 10-minute call rakh sakte hain audit discuss karne ke liye? Koi zabardasti nahi hai.',
    '',
    '— Nexora Media | Digital & Social Media Marketing',
  ].join('\n');
}
