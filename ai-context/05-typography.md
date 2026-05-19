# Typography

**Philosopher** for display and headings. **PT Sans** for body, UI and all
digital copy. Both are free, hosted on Google Fonts.

## Type pairing

- **Display — Philosopher** (serif, Regular only — never Bold). Voice for
  headlines, hero moments, the human side of the product.
  > *The feeling you ride for.*
- **Body — PT Sans** (sans-serif, Regular + Bold + Italic). Voice for paragraphs,
  app strings, UI labels.

> Philosopher is used at **Regular weight (400) only**. Never Bold. The display
> face should feel soft and editorial, not heavy.

## Type scale

| Level | Font | Size | Use |
| --- | --- | --- | --- |
| Display | Philosopher Regular | 48px / 3rem | Hero headlines, splash screen |
| Heading 1 | Philosopher Regular | 32px / 2rem | Page titles, section headers |
| Heading 2 | Philosopher Regular | 22px / 1.375rem | Sub-sections, card titles |
| Body | PT Sans Regular | 16px / 1rem | Body copy, descriptions |
| Small / UI | PT Sans Regular | 13px / 0.8125rem | UI labels, app strings, captions |
| Label / Eyebrow | PT Sans Bold | 11px, uppercase, 0.1em tracking | Section labels, gait names, categories |

## Line heights

- Display 48px → line-height **1.1**
- Heading 1 32px → line-height **1.2**
- Heading 2 22px → line-height **1.3**
- Body 16px → line-height **1.65**
- Small 13px → line-height **1.5**

## Google Fonts import

```css
@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;1,400&family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap');
```

Note Philosopher is imported at Regular + Italic only. The Bold weight is not
loaded.

## CSS variables

```css
--font-display: 'Philosopher', Georgia, serif;
--font-body: 'PT Sans', system-ui, sans-serif;
```

## In use (example session card)

```
WEDNESDAY · MORNING HACK            (eyebrow, PT Sans Bold 11px caps)
Something shifted in that last canter.   (Heading 2, Philosopher 26px)
Bella's trot showed more regularity      (body, PT Sans 15px)
across the session. Three consistent
canter transitions. The rhythm held for
longer than last week.
View full session →                      (link, PT Sans Bold 13px purple)
```
