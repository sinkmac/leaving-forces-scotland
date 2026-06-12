# Accessibility audit — Leaving the Forces in Scotland

Status: implementation audit updated after local accessibility pass. Full WCAG 2.2 AA sign-off still requires human screen-reader verification, but the primary keyboard/ARIA blockers found in this pass are fixed locally.

## Scope checked

- Current homepage source: `/home/sink/projects/leaving-forces-scotland/index.html`
- Live homepage snapshot: `https://leaving-forces-scotland.netlify.app/`
- Static/no-JS state visible from source and browser snapshot

## Findings

| ID | Area | Issue | Severity | Status | Notes |
|---|---|---|---|---|---|
| a11y-001 | No-JS/static progress counters | Hidden legacy content contains three progress widgets reading "0 of 0 items checked". This is misleading to crawlers/no-JS users. | medium | fixed locally | Local CSS now hides `.progress-bar-wrap` until JS adds `.js-ready`. This avoids broken no-JS counters. |
| a11y-002 | Accordions | Legacy accordion headers were clickable `div` elements with inline `onclick`, not native buttons. | medium | fixed locally | Converted section headers to `<button type="button">` controls with `aria-expanded` and `aria-controls`. Detail cloning removes legacy inline handlers, so hidden/source accordions no longer expose clickable div controls. |
| a11y-003 | FAQ toggles | FAQ questions were clickable `div`s with no button semantics or keyboard support. | medium | fixed locally | Converted FAQ questions to buttons with `aria-expanded`, `aria-controls`, and keyboard-operable activation. |
| a11y-004 | Stage switching | Stage cards are native buttons. Basic keyboard activation should work. | low | browser-smoke-tested locally | Local browser test: Tab to stage card, Enter activates, hash updates, stage screen renders. |
| a11y-005 | Hash route focus | JS called `window.scrollTo(0,0)` but did not move focus to the new screen heading. | medium | fixed locally | Added `tabindex="-1"` headings and `focusScreenHeading()` in home/stage/detail render paths. |
| a11y-006 | Emoji icons | Section icons are emoji-only visual markers in headers. | low | partially open | Section headings remain textual and emoji are not the only label. Decorative `aria-hidden` cleanup remains desirable. |
| a11y-007 | Focus styles | Stage/task cards use focus-visible border changes. Links use default focus. Legacy clickable divs had no robust focus state. | medium | fixed locally | Added visible focus styling to section/FAQ buttons and print links; stage/task cards already had focus-visible styling. |
| a11y-008 | Crisis sections | Crisis content is present in context and text labels are readable. | high-content / low-code | browser-smoke-tested locally; screen-reader sign-off still open | Print page and local browser snapshot expose crisis lines as text list. Human screen-reader run-through still required before full WCAG sign-off. |

## Remaining accessibility work

1. Human screen-reader smoke test the housing script, crisis section, FAQ, and print page.
2. Decide whether to mark decorative emoji spans `aria-hidden="true"`; current text labels do not depend on emoji.
3. Re-run browser keyboard checks after any future componentisation.

## Local changes made across passes

- Hid no-JS/static progress counters until JS initialises.
- Converted section accordion controls from clickable `div` to keyboard-operable buttons.
- Converted FAQ toggles from clickable `div` to keyboard-operable buttons.
- Added `aria-expanded` / `aria-controls` on expandable controls.
- Added route focus management for home/stage/detail screens.
- Added visible focus styling for new controls.
- Browser-smoke-tested local stage navigation and print page rendering.

Do not mark the full accessibility pass complete until human screen-reader sign-off is recorded.
