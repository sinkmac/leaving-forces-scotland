# Content architecture plan — Leaving the Forces in Scotland

Status: partial implementation exists. Do not treat volatile claims as fixed until the citation register is complete. This pass created the first shared `content/facts.js` source and local review/check scripts, but legacy static HTML still contains duplicated volatile copy until the full componentisation/generation pass is approved.

## Confirmed current stack

The repo is a plain static Netlify site. README and netlify.toml say there is no build step and index.html is the deploy root. The homepage is a single HTML file with inline CSS and JavaScript. Stage switching is hash/JS-driven.

The current source contains a hidden `#legacy-content-source` block holding all stage content, then the JavaScript clones selected sections into the detail screen. This is why the static output contains all three stage flows and why crawlers/no-JS users can see hidden repeated blocks.

## Flag 3 target shape

Create one content source for volatile facts and reusable sections, then render every stage from it.

Recommended minimal-file shape for this static repo:

- `content/facts.js` — implemented in this pass
  - `siteMeta`
  - `contacts`
  - `scripts`
  - `volatileFacts`
  - `printStages`
- `content/stages.js` — not yet implemented
  - stage definitions, task order, and document checklist IDs
- `content/sections.js`
  - reusable renderable blocks for ADP, finance rights, VISIN, crisis, VALOUR, women veterans, LGBT+ veterans, covenant, housing office script
- `tools/check-review-dates.mjs` — implemented in this pass
  - reads the content objects
  - writes `review-queue.json`
  - warns for facts past `review_by`
- `tools/check-volatile-singletons.mjs` — implemented as warning-only guard in this pass
  - asserts high-risk phrases only occur in content config and not as duplicate literals in page templates

If this repo stays no-build, the content files can be plain browser-loaded JavaScript modules and the checks can be optional local scripts. If a build step is allowed later, generate index.html and any print/source pages from the same config.

## Required metadata on volatile facts

Each volatile fact should carry:

```js
{
  id: 'afcs-time-limit',
  text: 'Claims must be made within 7 years...',
  risk: 'legal-deadline',
  source_ids: ['govuk-afcs-claim'],
  checked_at: null,
  review_by: '2026-09-30',
  disposition: 'pending'
}
```

Each source should carry:

```js
{
  id: 'govuk-afcs-claim',
  title: '...',
  url: '...',
  source_type: 'primary',
  checked_at: null,
  checked_by: null
}
```

## Reusable sections that must become singletons

- `scripts.whatToSay` — housing, GP, ADP, pension, compensation, covenant, writing request.
- `sections.adpWarning`
- `sections.financeRights`
- `sections.crisisLines`
- `sections.visin`
- `sections.valour`
- `sections.womenVeterans`
- `sections.lgbtVeterans`
- `sections.covenantFull` and `sections.covenantShort`, driven from the same covenant claim.
- `sections.housingOfficeScript`, driven from `scripts.housing`.
- `documents.pre`, `documents.recent`, `documents.settled`.

## No-JS progress fix

Current static source contains:

- `pre-count`: "0 of 0 items checked"
- `recent-count`: "0 of 0 items checked"
- `settled-count`: "0 of 0 items checked"

Because this site now uses JS/hashes for task screens, the safest no-build fix is:

```css
.progress-bar-wrap { display: none; }
.js-ready .progress-bar-wrap { display: block; }
```

and at the start of the script:

```js
document.documentElement.classList.add('js-ready');
```

If the legacy hidden content is removed during componentisation, the progress UI may be retired entirely or generated from the stage task count.

## Per-stage routes decision

Reserved for Sink. Recommended route structure if approved:

- `/still-serving/`
- `/recently-left/`
- `/left-a-while-ago/`

Static Netlify options:

1. Keep one app and add redirect/rewrite rules mapping those paths to `/` while JS reads `location.pathname`.
2. Generate three static HTML files from shared content for better no-JS/crawler output.

Recommendation: option 2 after content config exists, because it gives each stage a shareable, crawlable, printable page without duplicating facts.

## Print output

Print one-pager is now implemented at `/print.html` and renders scripts, stage document checklists, and crisis lines from `content/facts.js`. Current path shape:

- `/print.html` with optional stage hash such as `#still-serving`, `#recently-left`, `#left-a-while-ago` for future filtering.

Future enhancement after full stage config exists:

- what-to-say scripts
- selected stage document checklist
- crisis lines

Print CSS: black/white, no cards/shadows, hide nav/footer decoration, show URL/contact routes plainly.

## Footer stamps

Footer still displays the existing May 2026 public stamp. `content/facts.js` now stores the review/link dates and `tools/check-review-dates.mjs` generates `review-queue.json`; do not advance the public reviewed date while the generated queue still has pending high-risk claims.
