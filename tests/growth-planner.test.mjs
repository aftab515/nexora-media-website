import test from 'node:test';
import assert from 'node:assert/strict';
import { diagnose, buildReportMessage, buildClientMessageEn, buildClientMessageUr } from '../src/lib/auditEngine.ts';
import { whatsappLink } from '../src/constants.ts';

const industries = ['Clinic / Healthcare', 'Clothing / Fashion Brand', 'Restaurant / Cafe', 'Salon / Aesthetics', 'Real Estate / Builders', 'Academy / Education', 'E-Commerce / Retail', 'Other Local Business'];
const situations = ['Posting regularly but getting zero sales/inquiries', 'Inconsistent posting & basic template designs', 'Boosting posts on FB/IG but wasting ad budget', 'New brand / Need complete social media setup'];
const plans = [
  ['Generate More Sales & WhatsApp Leads','Standard Growth','PKR 30,000 / Mo'],
  ['Upgrade Feed & High-Retention Reels','Growth Reels','PKR 20,000 / Mo'],
  ['Scale with Targeted Meta Ads','Advanced Growth','PKR 30,000 / Mo'],
  ['Full End-to-End Social Media Management','Standard Growth','PKR 30,000 / Mo']
];
test('all 128 industry/situation/goal combinations yield valid preliminary recommendations', () => {
  for (const industry of industries) for (const situation of situations) for (const [goal, name, price] of plans) {
    const input = { brandName: 'Sample & Co', industry, situation, goal, pageLink: '' };
    const result = diagnose(input);
    assert.equal(result.planName, name);
    assert.equal(result.planPrice, price);
    for (const field of ['bottlenecks','fixes','planReasons']) {
      assert.equal(result[field].length, 3);
      assert.ok(result[field].every(item => typeof item === 'string' && item.length > 0));
    }
    for (const builder of [buildReportMessage, buildClientMessageEn, buildClientMessageUr]) {
      const message = builder(input, result);
      assert.ok(message.includes(input.brandName));
      assert.ok(message.includes(price));
      assert.ok(!message.includes('undefined'));
      assert.ok(!message.match(/\b\d{1,3}\/100\b/));
    }
  }
});
test('WhatsApp inquiry encodes special characters without changing recipient', () => {
  const message = 'Nexora: Growth & Reels? + test';
  const url = new URL(whatsappLink(message));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/923097631038');
  assert.equal(url.searchParams.get('text'), message);
});
