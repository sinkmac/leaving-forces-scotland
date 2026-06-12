import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../content/facts.js', import.meta.url), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);
const facts = sandbox.window.LFS_FACTS;
const today = new Date().toISOString().slice(0, 10);
const items = [];
for (const fact of facts.volatileFacts || []) items.push({ type: 'claim', ...fact });
for (const contact of Object.values(facts.contacts || {})) items.push({ type: 'contact', ...contact });
const queue = items
  .filter(item => item.review_by && item.review_by <= today)
  .sort((a, b) => a.review_by.localeCompare(b.review_by));
const pending = items.filter(item => ['pending', 'pending_phone_check'].includes(item.disposition));
const output = {
  generated_at: new Date().toISOString(),
  content_last_reviewed: facts.siteMeta.contentLastReviewed,
  links_checked: facts.siteMeta.linksChecked,
  stale_or_due: queue,
  pending_verification: pending
};
writeFileSync(new URL('../review-queue.json', import.meta.url), JSON.stringify(output, null, 2) + '\n');
if (queue.length) console.warn(`Review warning: ${queue.length} volatile facts/contact routes are past review_by.`);
console.log(`Review queue written: ${queue.length} due, ${pending.length} pending.`);
