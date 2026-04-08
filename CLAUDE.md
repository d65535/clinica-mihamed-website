# Clinica MihaMed Website

## Stack
- Static HTML/CSS/JS on Cloudflare Pages
- No build step — files in `public/` are deployed directly
- Shared header/footer via `js/components.js`
- Single stylesheet: `css/styles.css`

## Design
- Palette: verde #1B5E3B, auriu #B8860B, crem #F8F6F0, navy #2C3E50, white #FFFFFF
- Font: Plus Jakarta Sans (Google Fonts)
- Icons: Lucide SVG inline (UI), medical illustration SVGs (specializations)
- NO EMOJI anywhere
- Romanian language with diacritics (ă, â, î, ș, ț)
- Mobile-first, test at 390px

## Phone Numbers
- Display: 0770 818 368
- tel: href: +40770818368
- Always include +40 prefix in links

## Key Files
- `public/css/styles.css` — all styles, design tokens as CSS custom properties
- `public/js/components.js` — shared header + footer injection
- `public/js/main.js` — menu toggle, accordion, smooth scroll
