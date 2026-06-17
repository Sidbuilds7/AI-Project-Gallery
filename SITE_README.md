# Celestial Pathway — Website

A premium, mobile-first marketing site for **Celestial Pathway**, the spiritual
wellness practice of **Healer Vinita Raizada** (Reiki Healing, Numerology,
Palmistry). The whole site is built to drive one main action: **booking on
WhatsApp**.

Built with plain, production-ready **HTML + CSS + vanilla JS** — no build step,
no framework, no dependencies. Just open the files or drop them on any static
host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

---

## File structure

```
.
├── index.html          # Homepage (hero, services, who-it's-for, testimonials, products, CTAs)
├── about.html          # Founder story + philosophy
├── services.html       # Detailed Reiki / Numerology / Palmistry sections + booking steps
├── contact.html        # Contact channels + inquiry form (opens WhatsApp)
├── assets/
│   ├── css/
│   │   └── styles.css  # Design system + all styles (edit tokens at the top)
│   ├── js/
│   │   ├── config.js   # ← EDIT THIS: WhatsApp number, email, Instagram, messages
│   │   └── main.js     # Behaviour: nav, scroll reveal, WhatsApp wiring, form
│   └── images/         # Drop final photography here (see images/README.txt)
└── SITE_README.md      # This file
```

---

## Quick start

No tooling required. To preview locally:

```bash
# any static server works, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html`.

---

## What Himanshu needs to update (handoff checklist)

All editable spots are also marked inline with `TODO(Himanshu)` comments.

1. **Contact details** — `assets/js/config.js`
   - `WHATSAPP_NUMBER` (digits only, e.g. `919205784072`)
   - `EMAIL`, `PHONE_DISPLAY`, `INSTAGRAM_URL`, `INSTAGRAM_HANDLE`
   - Default + per-service WhatsApp messages
   - Updating this one file updates **every** WhatsApp/email/Instagram link site-wide.

2. **Photography** — `assets/images/`
   - Replace the placeholder blocks (founder portrait, service images, product
     images). Search the HTML for `placeholder` / `TODO(Himanshu)`.

3. **Testimonials** — `index.html`
   - Replace the 3 placeholder quotes with real, permission-granted client words.

4. **Products** — `index.html` (`#products` section)
   - Swap placeholder cards for real product images, names, prices and links.

5. **Credentials / stats** — `about.html` and the hero trust numbers.

6. **SEO** — update `og:image`, canonical URLs, and the JSON-LD business details
   once final domain/assets are ready.

---

## Design system (in `styles.css`)

- **Colours, fonts, spacing, radius** are all CSS custom properties in `:root`.
  Change them once there and the whole site re-skins.
- Palette: warm cream/off-white, soft beige, muted rose, deep plum, restrained gold.
- Type: `Cormorant Garamond` (display) + `Jost` (body), loaded from Google Fonts.
- Reusable components: `.btn` (+ variants), `.service-card`, `.testimonial`,
  `.product-card`, `.channel`, `.form`, `.cta-banner`, `.media` (placeholder-ready).

## Notes for the next developer

- Header & footer markup is duplicated across pages (no templating engine).
  If you migrate to Next.js/Astro/11ty later, extract them into a component.
- The inquiry form has **no backend** — it composes a message and opens WhatsApp.
  Swap `inquiryForm()` in `main.js` if you want server-side submission.
- Motion respects `prefers-reduced-motion`. Reveal animations use
  `IntersectionObserver` with a no-JS / no-IO fallback.
- Fully responsive; primary breakpoints at 960px, 720px (mobile nav), 520px.
