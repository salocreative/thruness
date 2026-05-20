# Colours

Sage green is the **primary** brand colour. Purple is retained as a **secondary**
accent — use it sparingly for contrast and warmth, not as the default UI palette.

## Primary palette — Sage green

Derived from the brand gradient (teal-green → forest green).

| Name | Hex | Use |
| --- | --- | --- |
| Hero gradient | `#12C49A` → `#034D3A` | App icon, splash screen, hero moments, marketing |
| Sage bright | `#12C49A` | Gradient top, energetic accents, active highlights |
| Sage mid | `#0B9A78` | Links, eyebrows, active states, hover on primary |
| Sage deep | `#067A60` | Primary buttons, emphasis, text on light backgrounds |
| Sage forest | `#034D3A` | Gradient bottom, dark UI, badge text |
| Sage light | `#7ACBB0` | Hover borders, decorative accents, chart fills |
| Sage tint | `#E8F5F0` | Callout backgrounds, hover fills, subtle highlights |
| Sage tint 2 | `#D4EDE4` | Badges, selected states, secondary fills |

## Secondary palette — Purple

Use sparingly — not as the default interactive colour.

| Name | Hex | Use |
| --- | --- | --- |
| Purple mid | `#6B4A9A` | Secondary accents, data contrast |
| Purple light | `#9B7FC0` | Decorative only — never for text |
| Purple deep | `#4A2080` | Legacy logo on light, secondary badge text |
| Purple tint | `#F0EAF8` | Secondary callout fills, sparingly |

## Neutrals — green-tinted

| Name | Hex | Use |
| --- | --- | --- |
| Near black | `#0F1F1A` | Sidebar, dark surfaces, highest-contrast text |
| Body text | `#1E3A32` | Paragraphs, descriptions |
| Mid grey | `#5C7268` | Secondary text, metadata, captions |
| Warm white | `#F5FAF8` | Page backgrounds, card surfaces |
| Border | `#D8E8E2` | Card borders, dividers, input outlines |

## Gradients

All gradients run at **135°**.

| Name | Stops | Use |
| --- | --- | --- |
| Hero | `#12C49A → #0B9A78 → #034D3A` | App icon, splash, marketing hero |
| Brand | `#7ACBB0 → #0B9A78` | UI highlights, cards, subtle brand moments |
| Night | `#1A3D32 → #0A1F18` | Dark mode, active ride screen |

Reference vertical master: `logos/Thruness-Gradient-Sage.png`

## Suggested shade scale

| Token | Hex | Use |
| --- | --- | --- |
| Sage 50 | `#E8F5F0` | Lightest tint, callouts |
| Sage 100 | `#D4EDE4` | Badges, selected fills |
| Sage 200 | `#A8D9C8` | Subtle charts, soft fills |
| Sage 300 | `#7ACBB0` | Light accent, hover borders |
| Sage 400 | `#12C49A` | Gradient top, energetic accent |
| Sage 500 | `#0B9A78` | Links, eyebrows, hover states |
| Sage 600 | `#067A60` | Primary buttons, text on light |
| Sage 700 | `#034D3A` | Gradient bottom, dark emphasis |
| Sage 800 | `#023528` | Night gradient, deep surfaces |
| Sage 900 | `#0F1F1A` | Near black, sidebar, nav |

## Gait colours

Each gait has its own hue for clear UI separation in bars, badges and live
indicators. Each gait includes **light**, **base** and **dark** shades. Not used
for text.

| Gait | Light | Base | Dark | Name |
| --- | --- | --- | --- | --- |
| Halt | `#D4DBD8` | `#9BA8A4` | `#6E7A76` | Stone |
| Walk | `#B8D9EC` | `#5A9FC8` | `#3A7FA8` | Sky |
| Trot | `#A8D9C8` | `#0B9A78` | `#067A60` | Sage |
| Canter | `#F0D4A8` | `#D4923A` | `#9E6218` | Amber |
| Gallop | `#D4C8E8` | `#6B4A9A` | `#4A2080` | Plum |

**Shade usage:** Light — badge backgrounds, chart fills, subtle highlights.
Base — gait bars, live indicators, primary swatches. Dark — hover/active states,
borders, legend labels on light surfaces.

```css
--gait-halt-light: #D4DBD8;
--gait-halt: #9BA8A4;
--gait-halt-dark: #6E7A76;
--gait-walk-light: #B8D9EC;
--gait-walk: #5A9FC8;
--gait-walk-dark: #3A7FA8;
--gait-trot-light: #A8D9C8;
--gait-trot: #0B9A78;
--gait-trot-dark: #067A60;
--gait-canter-light: #F0D4A8;
--gait-canter: #D4923A;
--gait-canter-dark: #9E6218;
--gait-gallop-light: #D4C8E8;
--gait-gallop: #6B4A9A;
--gait-gallop-dark: #4A2080;
```

## Accessibility

All text combinations must meet **WCAG AA** at minimum.

| Combination | Contrast | Rating |
| --- | --- | --- |
| `#067A60` on white | 5.8:1 | AA ✓ |
| `#034D3A` on white | 9.1:1 | AAA ✓ |
| `#0F1F1A` on white | 16.2:1 | AAA ✓ |
| `#7ACBB0` on white | 2.1:1 | Fail for text |

`#7ACBB0`, `#12C49A` and the hero gradient are for graphic and decorative use
only. Never use them for body text.

## CSS variables

```css
:root {
  /* Primary — Sage green */
  --sage-bright: #12C49A;
  --sage-mid: #0B9A78;
  --sage-deep: #067A60;
  --sage-forest: #034D3A;
  --sage-light: #7ACBB0;
  --sage-tint: #E8F5F0;
  --sage-tint-2: #D4EDE4;
  /* Secondary — Purple */
  --purple-deep: #4A2080;
  --purple-mid: #6B4A9A;
  --purple-light: #9B7FC0;
  --purple-tint: #F0EAF8;
  --purple-tint-2: #E8DDF5;
  /* Neutrals */
  --near-black: #0F1F1A;
  --body-text: #1E3A32;
  --mid-grey: #5C7268;
  --warm-white: #F5FAF8;
  --white: #FFFFFF;
  --border: #D8E8E2;
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #12C49A 0%, #0B9A78 50%, #034D3A 100%);
  --gradient-subtle: linear-gradient(135deg, #7ACBB0 0%, #0B9A78 100%);
  --gradient-night: linear-gradient(135deg, #1A3D32 0%, #0A1F18 100%);
  /* Gait colours */
  --gait-halt-light: #D4DBD8; --gait-halt: #9BA8A4; --gait-halt-dark: #6E7A76;
  --gait-walk-light: #B8D9EC; --gait-walk: #5A9FC8; --gait-walk-dark: #3A7FA8;
  --gait-trot-light: #A8D9C8; --gait-trot: #0B9A78; --gait-trot-dark: #067A60;
  --gait-canter-light: #F0D4A8; --gait-canter: #D4923A; --gait-canter-dark: #9E6218;
  --gait-gallop-light: #D4C8E8; --gait-gallop: #6B4A9A; --gait-gallop-dark: #4A2080;
}
```
