import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const exists = (path) => existsSync(new URL(`../${path}`, import.meta.url));

const index = read('index.html');

assert.ok(exists('content/facts.js'), 'Flag 3/6: content/facts.js should exist as the shared source for scripts, contacts, claim metadata, and review dates');
assert.ok(exists('tools/check-review-dates.mjs'), 'Flag 6: review-date checker should exist');
assert.ok(exists('review-queue.json'), 'Flag 6: generated review queue should exist');
assert.ok(exists('print.html'), 'Flag 4: printable scripts/checklist page should exist');

assert.equal(/<div class="section-header"[^>]*onclick=/.test(index), false, 'Flag 5: accordion headers should not be clickable divs');
assert.equal(/<div class="faq-q"[^>]*onclick=/.test(index), false, 'Flag 5: FAQ questions should not be clickable divs');
assert.equal(index.includes('function toggleSection'), true, 'Flag 5: section toggle function should exist for keyboard-accessible buttons');
assert.equal(index.includes('function toggleFaq'), true, 'Flag 5: FAQ toggle function should exist for keyboard-accessible buttons');
assert.equal(index.includes('aria-expanded'), true, 'Flag 5: expandable controls should expose aria-expanded');
assert.equal(index.includes('focusScreenHeading'), true, 'Flag 5: stage/detail route changes should move focus');
assert.equal(index.includes('Print these'), true, 'Flag 4: script/task pages should link to print output');
assert.equal(index.includes('content/facts.js'), true, 'Flag 3: homepage should load shared facts config');

const facts = read('content/facts.js');
assert.equal(facts.includes('review_by'), true, 'Flag 6: volatile facts should carry review_by dates');
assert.equal(facts.includes('housing-local-connection-script'), true, 'Flag 1/3: statutory housing script should be tracked by claim id');
assert.equal(facts.includes('noMonetisation'), true, 'Standing rule: no monetisation should be captured in config');

const print = read('print.html');
assert.equal(print.includes('content/facts.js'), true, 'Flag 4: print page should render from shared facts config');
assert.equal(print.includes('Print these'), true, 'Flag 4: print page should be visibly labelled');

console.log('brief acceptance static checks passed');
