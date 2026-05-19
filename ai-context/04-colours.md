# Colours

## Core palette

| Name | Hex | Use |
| --- | --- | --- |
| Hero gradient | `#C040D0` → `#4A1A8A` | App icon, splash screen, hero moments, marketing |
| Purple mid | `#6B4A9A` | Primary interactive, buttons, links, active states |
| Purple light | `#9B7FC0` | Accents, hover states, decorative elements |
| Purple deep | `#4A2080` | Headings, emphasis, dark UI elements |
| Near black | `#1E1128` | Body copy, nav background, dark surfaces |
| Warm white | `#F7F4FC` | Page backgrounds, card surfaces |
| Purple tint | `#F0EAF8` | Callout backgrounds, hover fills, subtle highlights |

## Gradients

All gradients run at **135°**.

| Name | Stops | Use |
| --- | --- | --- |
| Hero | `#C040D0 → #7B2FC0 → #4A1A8A` | App icon, splash, marketing hero |
| Brand | `#9B7FC0 → #6B4A9A` | UI highlights, cards, subtle brand moments |
| Night | `#2D1B4E → #150A2A` | Dark mode, active ride screen |
| Green accent | `#078B22 → #12B30D` | Success states, gait active indicators |

## Gait colours

Used in the app for gait state indicators. Calm and data-led. Intensity maps to
speed. Not used for text — graphic and UI fill elements only.

| Gait | Hex | Description |
| --- | --- | --- |
| Halt | `#8FA8C8` | No movement |
| Walk | `#5B8DB8` | 4-beat, slow |
| Trot | `#2E6EA6` | 2-beat, regular |
| Canter | `#6B4A9A` | 3-beat + float |
| Gallop | `#4A2080` | 4-beat, full speed |

### Example gait bar (45-minute schooling session)

`Halt 6% · Walk 18% · Trot 45% · Canter 28% · Gallop 3%`

## Accessibility

All text combinations must meet **WCAG AA** at minimum. Use purple deep or near
black for any text on light backgrounds.

| Combination | Contrast | Rating |
| --- | --- | --- |
| `#4A2080` on white | 7.2:1 | AAA ✓ |
| `#6B4A9A` on white | 4.6:1 | AA ✓ |
| `#1E1128` on white | 17.8:1 | AAA ✓ |
| `#9B7FC0` on white | 2.8:1 | Fail for text |

`#9B7FC0` and the hero gradient are for graphic and decorative use only. Never
use them for text.

## CSS variables

```css
:root {
  --purple-hero: #8B2FC9;
  --purple-deep: #4A2080;
  --purple-mid: #6B4A9A;
  --purple-light: #9B7FC0;
  --purple-tint: #F0EAF8;
  --purple-tint-2: #E8DDF5;
  --near-black: #1E1128;
  --body-text: #3D2B52;
  --mid-grey: #7A6A8A;
  --warm-white: #F7F4FC;
  --white: #FFFFFF;
  --border: #E2D8F0;
  --gradient-hero: linear-gradient(135deg, #C040D0 0%, #7B2FC0 50%, #4A1A8A 100%);
  --gradient-subtle: linear-gradient(135deg, #9B7FC0 0%, #6B4A9A 100%);
}
```
