import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch({ headless: true });
try {
  await mkdir('test-artifacts', { recursive: true });
  for (const width of [360, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
    await page.locator('h1').waitFor();
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('#showcase article').count(), 6);
    await page.getByRole('button', { name: 'Healthcare', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 2);
    await page.getByRole('button', { name: 'Beauty & Wellness', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 1);
    await page.getByRole('button', { name: 'International Brands', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 1);
    await page.getByRole('button', { name: 'All', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 7);
    assert.equal(await page.locator('#about').count(), 1);
    assert.equal(await page.locator('#contact').count(), 1);
    assert.equal(await page.locator('#contact a[href^="https://wa.me/"]').count(), 2);
    if (width < 1280) {
      await page.getByRole('button', { name: 'Toggle menu' }).click();
      assert.equal(await page.getByRole('button', { name: 'Toggle menu' }).getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await page.getByRole('button', { name: 'Toggle menu' }).getAttribute('aria-expanded'), 'false');
    }
    await page.getByRole('button', { name: 'Strategic Reels Production', exact: true }).click();
    await page.getByRole('heading', { name: 'Growth Reels', exact: true }).waitFor();
    await page.getByRole('button', { name: 'Meta Ads Management', exact: true }).click();
    await page.getByRole('heading', { name: 'Advanced Growth', exact: true }).waitFor();
    await page.locator('#brand-name').fill('Sample business');
    await page.locator('#industry').selectOption('Other Local Business');
    await page.locator('#situation').selectOption('New brand / Need complete social media setup');
    await page.locator('#goal').selectOption('Generate More Sales & WhatsApp Leads');
    await page.getByRole('button', { name: 'Generate Growth Plan' }).click();
    await page.getByRole('heading', { name: 'Preliminary Growth Recommendations' }).waitFor();
    const link = await page.getByRole('link', { name: /Send Growth Plan to Nexora WhatsApp/ }).getAttribute('href');
    const url = new URL(link);
    assert.equal(url.pathname, '/923097631038');
    assert.ok(url.searchParams.get('text').includes('Sample business'));
    await page.getByRole('button', { name: 'Natural Roman Urdu' }).click();
    await page.getByText(/Assalam-o-Alaikum Sample business team/).waitFor();
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'Result overflows at ' + width);
    await page.screenshot({ path: 'test-artifacts/planner-' + width + '.png', fullPage: true });
    await page.getByRole('button', { name: 'Start Another Growth Plan' }).click();
    assert.equal(await page.locator('#brand-name').inputValue(), '');
    await page.locator('#faq summary').first().click();
    assert.equal(await page.locator('#faq details').first().getAttribute('open'), '');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'Page overflows at ' + width);
    assert.deepEqual(errors, []);
    await page.close();
  }
} finally {
  await browser.close();
}
