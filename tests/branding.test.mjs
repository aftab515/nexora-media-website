import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

// This is a guard against shipping third-party builder attribution in Nexora's
// deployed files. Legacy Bolt source metadata was removed; builder branding must not appear in dist.
const unwantedAttribution = /(?:\bbolt\.new\b|\bstackblitz\b|powered\s+by\s+bolt|bolt[-_ ]?(?:logo|badge|watermark))/i;

async function textAssets(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      output.push(...await textAssets(path));
    } else if (/\.(?:html|js|css|svg|txt|json)$/i.test(entry.name)) {
      output.push(path);
    }
  }
  return output;
}

test('built website has Nexora identity, Nexora favicon and no builder branding', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  const icon = await readFile('dist/favicon.svg', 'utf8');
  assert.match(html, /<title>Nexora Media\s*\|/);
  assert.match(html, /href="\/favicon\.svg"/);
  assert.match(icon, /<svg[\s>]/);
  assert.match(icon, /#1E3D20/i);
  const files = await textAssets('dist');
  assert.ok(files.some(file => file.endsWith('index.html')));
  assert.ok(files.some(file => file.endsWith('favicon.svg')));
  for (const file of files) {
    assert.doesNotMatch(await readFile(file, 'utf8'), unwantedAttribution, 'Builder branding in: ' + file);
  }
});
