# Accessibility audit — Leaving the Forces in Scotland

Status: initial audit from source/live snapshot only. Full WCAG 2.2 AA pass still requires browser keyboard and screen-reader verification after the content architecture pass.

## Scope checked

- Current homepage source: `/home/sink/projects/leaving-forces-scotland/index.html`
- Live homepage snapshot: `https://leaving-forces-scotland.netlify.app/`
- Static/no-JS state visible from source and browser snapshot

## Findings

| ID | Area | Issue | Severity | Status | Notes |
|---|---|---|---|---|---|
| a11y-001 | No-JS/static progress counters | Hidden legacy content contains three progress widgets reading "0 of 0 items checked". This is misleading to crawlers/no-JS users. | medium | fixed locally | Local CSS now hides `.progress-bar-wrap` until JS adds `.js-ready`. This avoids broken no-JS counters. |
| a11y-002 | Accordions | Legacy accordion headers are clickable `div` elements with inline `onclick`, not native buttons. They lack `aria-expanded`, `aria-controls`, and keyboard activation. | medium | open | Current primary UI mostly uses buttons, but cloned detail content still contains legacy accordion markup. Componentisation should replace headers with buttons. |
| a11y-003 | FAQ toggles | FAQ questions are clickable `div`s with no button semantics or keyboard support. | medium | open | Convert to `<button>` and manage `aria-expanded`. |
| a11y-004 | Stage switching | Stage cards are native buttons. Basic keyboard activation should work. | low | needs browser verification | Need focus movement to stage heading after selection and detail title after task selection. |
| a11y-005 | Hash route focus | JS calls `window.scrollTo(0,0)` but does not move focus to the new screen heading. | medium | open | Add `tabindex="-1"` to screen heading/title and focus it after render. |
| a11y-006 | Emoji icons | Section icons are emoji-only visual markers in headers. | low | open | Add `aria-hidden="true"` to decorative emoji or text equivalents if meaningful. Do not rely on emoji as the only label. |
| a11y-007 | Focus styles | Stage/task cards use focus-visible border changes. Links use default focus. Legacy clickable divs have no robust focus state. | medium | open | Add consistent visible focus outline. |
| a11y-008 | Crisis sections | Crisis content is present in context and text labels are readable. | high-content / low-code | needs screen-reader run-through | Must verify crisis blocks are reachable and announced clearly. |

## Minimum fix bundle for the next implementation pass

1. Convert all interactive accordion/FAQ headers from clickable `div` to `button`.
2. Add `aria-expanded` and `aria-controls` to expandable controls.
3. Add focus management in `renderStage()` and `renderDetail()`.
4. Add visible focus styling for all buttons/links.
5. Mark decorative emoji icons `aria-hidden="true"` or provide equivalent hidden text.
6. Browser test by keyboard only:
   - Tab through stage cards.
   - Enter/Space a stage.
   - Tab through task cards.
   - Enter/Space a task.
   - Return/back link works.
   - FAQ expands/collapses by keyboard.
7. Screen-reader smoke test the housing script and crisis section.

## Local change made in this pass

Only the no-JS progress-counter issue was patched locally because it is low-risk and does not alter content meaning.

Do not mark the full accessibility pass complete until the open items above are fixed and verified.
