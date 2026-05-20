# UI Components

Core patterns for the app and website. Built on the brand palette and type
system.

## Buttons

All buttons share the same anatomy: full pill shape (`border-radius: 999px`),
PT Sans Bold 14px, 10px × 22px padding, 8px gap to icon, no border for primary,
1–1.5px border for secondary/ghost.

| Variant | Style | Use |
| --- | --- | --- |
| **Primary** | Background `#067A60` (Sage deep), white text | Main CTA. One per screen. |
| **Secondary** | Transparent, `#067A60` 1.5px border + text | Supporting actions. |
| **Ghost** | Transparent, `#D8E8E2` 1px border, mid-grey text | Tertiary actions, settings, cancel. |

Hover states:

- Primary → background shifts to Sage mid `#0B9A78`.
- Secondary → background fills with Sage tint `#E8F5F0`.
- Ghost → border becomes Sage light `#7ACBB0`, text becomes Sage mid.

Buttons usually pair with a Lucide icon (16px, stroke 2) on the left of the
label — e.g. `play` for *Start ride*, `bar-chart-3` for *View session*,
`settings` for *Settings*, `check` for *Save*.

## Badges and labels

Pill-shaped (`border-radius: 20px`), PT Sans Bold 11px, padding 3px × 10px.

| Variant | Background | Text | Use |
| --- | --- | --- | --- |
| Sage | `#D4EDE4` | `#034D3A` | Gait names, neutral categories |
| Purple | `#E8DDF5` | `#4A2080` | Secondary accents only |
| Green | `#E6F4EA` | `#1b5e20` | Success states (e.g. *Session saved*) |
| Amber | `#FFF3CD` | `#7a4a00` | Warnings (e.g. *Calibration needed*) |

## Gait bar

Horizontal stacked bar showing time spent in each gait across a session. 10–12px
tall, 6px radius, no gaps between segments. Use the **base** shade in bars; use
**light** for badge backgrounds and **dark** for hover/active states.

On the **active ride screen**, the current gait card and map marker use the base
colour for the active gait. The session breakdown bar below shows all five gaits
across the ride. Reference: `images/Thruness-App-Screens.png`.

- Halt `#9BA8A4` (light `#D4DBD8`, dark `#6E7A76`)
- Walk `#5A9FC8` (light `#B8D9EC`, dark `#3A7FA8`)
- Trot `#0B9A78` (light `#A8D9C8`, dark `#067A60`)
- Canter `#D4923A` (light `#F0D4A8`, dark `#9E6218`)
- Gallop `#6B4A9A` (light `#D4C8E8`, dark `#4A2080`)

## Session card

A summary card representing one ride.

```
WEDNESDAY · MORNING HACK            (eyebrow — PT Sans Bold 11px caps, Sage mid)
Something shifted in that last canter.   (Heading 2 — Philosopher 20–26px)
[gait bar]                               (8–10px tall)
45 min · Bella                  View →   (PT Sans 12px, mid grey · sage link)
```

## Form inputs

- Font: PT Sans 14px.
- Padding: 10px × 14px.
- Border: 1.5px solid `#D8E8E2`, radius 8px.
- Focus: border becomes Sage mid `#0B9A78`.
- Background: white.
- Max width: 280–340px in form layouts.
- Labels: PT Sans Bold 12px, near black, 5px above the input.

## Iconography — Lucide

We use [Lucide](https://lucide.dev) for all UI iconography.

- **Default stroke width:** 2.
- **At 28px+:** use stroke width 1.5 for a softer feel.
- **Colour:** icons inherit colour from their parent text by default.

**Size scale**

- 16px — inline with body text
- 20px — dense UI, table rows
- 24px — buttons, primary actions
- 32px+ — feature illustrations

**Starter set:** `mic` · `play` · `pause` · `square` · `activity` ·
`bar-chart-3` · `heart` · `clock` · `calendar` · `compass` · `map-pin` ·
`user` · `bell` · `settings` · `check` · `chevron-right`

## Surface treatments

| Surface | Hex | Use |
| --- | --- | --- |
| Warm white | `#F5FAF8` | Default page and app background |
| White | `#FFFFFF` | Cards, modals, input fields |
| Sage tint | `#E8F5F0` | Callouts, selected states, highlights |
| Near black | `#0F1F1A` | Sidebar, active ride screen, dark mode |
| Hero gradient | `#12C49A → #034D3A` (135°) | Splash, app icon, marketing moments only |

## Layout system

- Sidebar width: **240px**, fixed left, near-black background.
- Page header: white, with eyebrow + Philosopher H1 + intro paragraph.
- Content area max-width: **960px**, 48px × 56px padding.
- Standard radius: **12px** for cards, **8px** for inputs and small elements.
- Breakpoint: **768px**. Below this the sidebar becomes a hamburger menu.

## Callout

Quote-style block for emphasis.

- Background: Sage tint `#E8F5F0`.
- Left border: 3px solid Sage mid `#0B9A78`.
- Padding: 18px × 22px.
- Font: PT Sans Italic 15px, near black.
- Border radius: 0 on the left edge, 8px on the right.
- Max width: 640px.
