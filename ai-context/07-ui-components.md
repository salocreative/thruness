# UI Components

Core patterns for the app and website. Built on the brand palette and type
system.

## Buttons

All buttons share the same anatomy: full pill shape (`border-radius: 999px`),
PT Sans Bold 14px, 10px × 22px padding, 8px gap to icon, no border for primary,
1–1.5px border for secondary/ghost.

| Variant | Style | Use |
| --- | --- | --- |
| **Primary** | Background `#4A2080` (Purple deep), white text | Main CTA. One per screen. |
| **Secondary** | Transparent, `#4A2080` 1.5px border + text | Supporting actions. |
| **Ghost** | Transparent, `#E2D8F0` 1px border, mid-grey text | Tertiary actions, settings, cancel. |

Hover states:

- Primary → background shifts to Purple mid `#6B4A9A`.
- Secondary → background fills with Purple tint `#F0EAF8`.
- Ghost → border becomes Purple light `#9B7FC0`, text becomes Purple mid.

Buttons usually pair with a Lucide icon (16px, stroke 2) on the left of the
label — e.g. `play` for *Start ride*, `bar-chart-3` for *View session*,
`settings` for *Settings*, `check` for *Save*.

## Badges and labels

Pill-shaped (`border-radius: 20px`), PT Sans Bold 11px, padding 3px × 10px.

| Variant | Background | Text | Use |
| --- | --- | --- | --- |
| Purple | `#E8DDF5` | `#4A2080` | Gait names, neutral categories |
| Green | `#E6F4EA` | `#1b5e20` | Success states (e.g. *Session saved*) |
| Amber | `#FFF3CD` | `#7a4a00` | Warnings (e.g. *Calibration needed*) |

## Gait bar

Horizontal stacked bar showing time spent in each gait across a session. 10–12px
tall, 6px radius, no gaps between segments. Colours follow the gait palette:

- Halt `#8FA8C8`
- Walk `#5B8DB8`
- Trot `#2E6EA6`
- Canter `#6B4A9A`
- Gallop `#4A2080`

Beneath the bar, list each gait with a 10×10 swatch, the gait name, and the
percentage — small PT Sans, mid-grey.

## Session card

A summary card representing one ride.

```
WEDNESDAY · MORNING HACK            (eyebrow — PT Sans Bold 11px caps, Purple mid)
Something shifted in that last canter.   (Heading 2 — Philosopher 20–26px)
[gait bar]                               (8–10px tall)
45 min · Bella                  View →   (PT Sans 12px, mid grey · purple link)
```

## Form inputs

- Font: PT Sans 14px.
- Padding: 10px × 14px.
- Border: 1.5px solid `#E2D8F0`, radius 8px.
- Focus: border becomes Purple mid `#6B4A9A`.
- Background: white.
- Max width: 280–340px in form layouts.
- Labels: PT Sans Bold 12px, near black, 5px above the input.

## Iconography — Lucide

We use [Lucide](https://lucide.dev) for all UI iconography. A single
open-source set keeps us consistent across the app, marketing site and product
UI.

- **Default stroke width:** 2.
- **At 28px+:** use stroke width 1.5 for a softer feel.
- **Colour:** icons inherit colour from their parent text by default.

**Size scale**

- 16px — inline with body text
- 20px — dense UI, table rows
- 24px — buttons, primary actions
- 32px+ — feature illustrations

**Starter set** (covers the app's core vocabulary):

`mic` · `play` · `pause` · `square` · `activity` · `bar-chart-3` · `heart` ·
`clock` · `calendar` · `compass` · `map-pin` · `user` · `bell` · `settings` ·
`check` · `chevron-right`

Browse the full library at <https://lucide.dev/icons>.

**Usage**

```html
<script src="https://unpkg.com/lucide@latest"></script>

<i data-lucide="play"></i>

<script>lucide.createIcons();</script>
```

## Surface treatments

| Surface | Hex | Use |
| --- | --- | --- |
| Warm white | `#F7F4FC` | Default page and app background |
| White | `#FFFFFF` | Cards, modals, input fields |
| Purple tint | `#F0EAF8` | Callouts, selected states, highlights |
| Near black | `#1E1128` | Sidebar, active ride screen, dark mode |
| Hero gradient | `#C040D0 → #4A1A8A` (135°) | Splash, app icon, marketing moments only |

## Layout system

- Sidebar width: **240px**, fixed left, near-black background.
- Page header: white, with eyebrow + Philosopher H1 + intro paragraph.
- Content area max-width: **960px**, 48px × 56px padding.
- Standard radius: **12px** for cards, **8px** for inputs and small elements.
- Standard shadows: `0 1px 3px rgba(74,32,128,0.08)` small,
  `0 4px 16px rgba(74,32,128,0.12)` medium,
  `0 8px 32px rgba(74,32,128,0.16)` large.
- Breakpoint: **768px**. Below this the sidebar becomes a hamburger menu.

## Callout

Quote-style block for emphasis.

- Background: Purple tint `#F0EAF8`.
- Left border: 3px solid Purple mid `#6B4A9A`.
- Padding: 18px × 22px.
- Font: PT Sans Italic 15px, near black.
- Border radius: 0 on the left edge, 8px on the right.
- Max width: 640px.
