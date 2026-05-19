# Thruness — AI Context Package

A compact, LLM-friendly version of the Thruness brand guidelines. Drop any of
these files (or the combined `thruness-brand-all.md`) into a system prompt,
project context window, or RAG store so an AI assistant can write, design and
build for Thruness without going off-brand.

Version 1.0 · May 2026 · Prepared by Salo Creative

---

## How to use

- **Working with one topic** (e.g. writing copy) — paste only the relevant file
  (e.g. `06-tone-of-voice.md`).
- **General-purpose assistant** — paste `thruness-brand-all.md`, which is every
  file concatenated in order.
- **Custom GPT / Claude project** — upload all the numbered files; the assistant
  will pick the right one per question.
- **Cursor / Copilot rules** — copy the relevant section into your project
  rules file (e.g. `.cursor/rules/thruness-brand.md`).

If you ever need the visual / interactive source of truth, the canonical brand
guidelines site is at <https://github.com/salocreative/thruness>.

## Files

| File | Use for |
| --- | --- |
| `01-brand-overview.md` | What Thruness is, who it's for, the positioning statement, who we are not. |
| `02-brand-story.md` | The deeper story — emotional territory, the spiritual bond, the mark explained. |
| `03-logos.md` | Logo variants, app icon, mark anatomy, clear space, what not to do. |
| `04-colours.md` | Core palette, gradients, gait colours, accessibility (WCAG) notes. |
| `05-typography.md` | Philosopher + PT Sans pairing, full type scale, usage rules. |
| `06-tone-of-voice.md` | Voice principles, do/don't pairs, words, app strings, voice prompts. |
| `07-ui-components.md` | Buttons, badges, gait bar, cards, forms, iconography (Lucide), surfaces. |
| `thruness-brand-all.md` | Every file above, concatenated. The single-file context pack. |

## Quick reference

- **Voice in four words** — Honest. Quiet. Knowing. Reverent.
- **Positioning statement** — *The app that listens while you ride.*
- **Type pairing** — Philosopher (display, Regular only) + PT Sans (body).
- **Core colours** — Purple deep `#4A2080`, Purple mid `#6B4A9A`, Near black
  `#1E1128`, Warm white `#F7F4FC`.
- **Icon library** — [Lucide](https://lucide.dev), stroke width 2.
- **Language** — UK English always.
- **Hard rules** — No exclamation marks. No emoji in UI. Horse is *he/she/they*,
  never *it*. Voice prompts under six words.
