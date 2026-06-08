# Theme Analysis

## Source Summary
The provided UI mockup is for a veterinary clinic website. The design style is clean, approachable, and heavily leans into a warm, "friendly" aesthetic suitable for pet care. It features generous white space, softly rounded UI elements (pill buttons, rounded cards), and a distinctive tri-color palette consisting of a muted crimson/magenta (primary), a warm yellow-gold (accent), and a soft leaf green (secondary). 

## Core Palette
| Token | HEX | Semantic Role | Where It Appears | Confidence | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `primary.DEFAULT` | `#B64A5F` | Primary Action / Highlight | Primary filled buttons, large central banner background, key emphasized words in headings ("família", "num só lugar"), outline button strokes, bottom-most footer banner | High | Observed |
| `primary.hover` | `#9F4052` | Interaction State | Hover state for primary buttons and links | Medium | Derived |
| `secondary` | `#93B649` | Secondary Accent | Specific prominent heading text ("CUIDAMOS", "CUIDA") | High | Observed |
| `accent` | `#F2B84B` | Tertiary / Warm Accent | Topmost contact bar, small decorative checkmarks, review stars, statistic numbers (+20, +2.500) | High | Observed |
| `background` | `#FFFFFF` | Page Background | Main page background, interior of service cards | High | Observed |
| `surface.DEFAULT` | `#FFF9F0` | Offset Surface | Background of the testimonial/statistics block | High | Observed |
| `foreground` | `#333333` | Primary Text | Main headings, stat labels, standard dark text | High | Observed |
| `muted` | `#666666` | Secondary Text | Paragraph body copy, subtle lists, smaller footer text | High | Observed |
| `border` | `#EAEAEA` | Subtle UI Dividers | Borders around the white service cards in the grid | Medium | Observed |

## Semantic Theme Tokens
- **Primary:** The muted crimson (`#B64A5F`) acts as the core brand color. Use it for high-emphasis call-to-action buttons (both solid and outline variations) and large structural banners to break up the white space. It is also used to selectively highlight key emotional words within dark text headings.
- **Secondary / Accent:** The green (`#93B649`) and gold (`#F2B84B`) act as supporting characters to soften the palette. The gold is highly utilitarian (top bar, ratings, stats), while the green is used sparingly for typographic impact.
- **Surfaces:** The design relies predominantly on a plain white background, making layout spacing do the structural work. A pale, warm surface color (`#FFF9F0`) is used specifically to group the social proof/statistics section without introducing harsh borders.
- **Borders:** Borders are used very lightly, primarily to define interactive cards against a white background. They should remain subtle (`#EAEAEA`).

## Typography
| Role | Most Likely Font | Fallback Stack | Evidence | Confidence |
| :--- | :--- | :--- | :--- | :--- |
| Headings | Geometric Sans (e.g., Poppins, Montserrat) | `ui-sans-serif, system-ui, sans-serif` | Circular "O", straight terminal "C", uniform stroke width on varied weights. | Medium |
| Body & Labels | Neutral Sans (e.g., Inter, Roboto) | `ui-sans-serif, system-ui, sans-serif` | Clean, highly legible, structurally standard letterforms for dense contact info and paragraphs. | Medium |

## Usage Notes
- **Corner Radii:** Buttons are deeply rounded (fully pill-shaped, likely Tailwind's `rounded-full`). Structural containers and cards use a moderate rounded corner (likely `rounded-xl` or `rounded-2xl`).
- **Card Styling:** The service cards in the middle section use a white background with a thin, subtle border and no heavy drop shadow, relying on spacing to separate them.
- **Iconography:** Icons feature thin, line-art styling, often rendered in the primary crimson or accent yellow, sometimes placed inside circles or faint outline boxes.

## Tailwind Config
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B64A5F',
          hover: '#9F4052', // derived
        },
        secondary: '#93B649',
        accent: '#F2B84B',
        background: '#FFFFFF',
        surface: {
          DEFAULT: '#FFF9F0',
        },
        foreground: '#333333',
        muted: '#666666',
        border: '#EAEAEA',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```