import { readFileSync } from 'node:fs';

const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const facts = readFileSync(new URL('../content/facts.js', import.meta.url), 'utf8');
const tracked = [
  'I am a recently discharged veteran and under the Housing (Scotland) Act 2014',
  'My Armed Forces Compensation Scheme payment and/or War Pension must be fully disregarded',
  '0800 138 1619',
  '0808 1914 218',
  '116 123',
  'Adult Disability Payment (ADP) has replaced PIP in Scotland'
];
let warnings = 0;
for (const phrase of tracked) {
  const factCount = facts.split(phrase).length - 1;
  const indexCount = index.split(phrase).length - 1;
  if (factCount !== 1 || indexCount > 0) {
    warnings += 1;
    console.warn(`Singleton warning: "${phrase}" facts=${factCount} index=${indexCount}. Legacy duplicated content remains until full componentisation.`);
  }
}
console.log(`Volatile singleton check complete with ${warnings} warning(s).`);
