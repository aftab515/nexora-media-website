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
    assert.equal(await page.locator('link[rel="icon"]').getAttribute('href'), '/favicon.svg');
    assert.equal(await page.locator('a[href*="bolt.new"], a[href*="stackblitz"], [src*="bolt.new"], [src*="stackblitz"]').count(), 0, 'No builder badge or builder link in the rendered DOM');
    assert.doesNotMatch(await page.locator('body').innerText(), /(?:powered\\s+by\\s+bolt|built\\s+with\\s+bolt)/i);
    assert.equal(await page.locator('#showcase article').count(), 6);
    const conceptImages = await page.locator('#showcase article').evaluateAll(nodes => nodes.map(node => node.getAttribute('data-concept-image')));
    assert.equal(conceptImages.length, 6);
    assert.equal(new Set(conceptImages).size, 6, 'Duplicate image path in showcase');
    assert.ok(conceptImages.every(src => src?.startsWith('/portfolio/') && !src.includes('overview')), 'Portfolio must use individual campaigns, not collage');
    await page.locator('#showcase').scrollIntoViewIfNeeded();
    await page.locator('#showcase img').evaluateAll(images => images.forEach(image => { image.loading = 'eager'; }));
    await page.waitForFunction(
      () => {
        const images = [...document.querySelectorAll('#showcase img')];
        return images.length === 6 && images.every(img => img.complete && img.naturalWidth > 0);
      },
      undefined,
      { timeout: 20000 }
    );
    assert.equal(await page.locator('#showcase .group img').count(), 6, 'All portfolio artwork must render');
    for (let i = 0; i < 6; i++) {
      await page.locator('#showcase article').nth(i).scrollIntoViewIfNeeded();
      await page.waitForFunction(
        index => document.querySelectorAll('#showcase article')[index]?.closest('.reveal')?.classList.contains('is-visible'),
        i,
        { timeout: 10000 }
      );
    }
    await page.locator('#showcase').screenshot({
      path: 'test-artifacts/portfolio-' + width + '.png',
      style: 'header, a[aria-label="Chat with Nexora Media on WhatsApp"] { visibility: hidden !important; }',
    });
    await page.getByRole('button', { name: 'Healthcare', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 2);
    await page.getByRole('button', { name: 'Beauty & Wellness', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 1);
    await page.getByRole('button', { name: 'International Brands', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 1);
    await page.getByRole('button', { name: 'All', exact: true }).click();
    assert.equal(await page.locator('#showcase article').count(), 6);
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
