# EZOV Environmental Services — Website Redesign

A modern, fully responsive website for **EZOV Environmental Services**, Ghana's dedicated plastic waste recycling company based in Pokuase, Accra.

**Live slogan:** *Recovering Value, Reducing Waste*

---

## Project Structure

```
EZOV_Addo_Redesign/
├── index.html          # Home page
├── about.html          # About, Our Story, Team, Why Choose Us
├── css/
│   └── ezov.css        # Full custom stylesheet (design tokens, layout, components)
├── js/
│   └── ezov.js         # Navigation, scroll animations, counters, back-to-top
└── images/
    ├── slider/         # Hero background
    ├── misc/           # Section imagery
    ├── team/           # Team member photos
    ├── icons/          # Process step icons
    ├── gallery/        # Gallery assets
    └── logo-*.png      # Logo variants (white + black)
```

---

## Pages

### Home (`index.html`)
- Fixed glassmorphism navigation — transparent over hero, solid on scroll
- Hero section — EZOV logo + *"Recovering Value, Reducing Waste"* headline + dual CTAs
- Animated impact stats — 28,950+ kg recycled · 25+ collection points · 100+ collectors · 20+ clients
- 4-step How It Works process cards
- Mission overview with checklist and authentic EZOV imagery
- CTA banner driving traffic to the About page
- Contact form + embedded Google Map + footer

### About (`about.html`)
- Company overview with impact badge
- *How It All Started* — 4-stage founding timeline
- Plastics We Recycle — HDPE · PP · PET · LDPE · Crates · Chairs
- Vision & Mission side-by-side
- Why Choose Us — 6 differentiator cards
- Our Team — Ludwig Adjakloe (CEO), Robert Adjakloe (Co-Founder), Reginald Samuel Agyei (Operations Manager)
- *Join Us Today* CTA banner → Contact form

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Custom CSS (design tokens) + Tailwind CSS Play CDN |
| Fonts | Inter (headings) · Open Sans (body) via Google Fonts |
| JavaScript | Vanilla JS — no frameworks |
| Form handling | [@formspree/ajax](https://github.com/formspree/formspree-js) CDN (AJAX, inline errors, success state) |
| Maps | Google Maps embed (lat: 5.7022649, lng: -0.2861058) |

---

## Design System

| Token | Value |
|---|---|
| Primary pastel green | `#B8D8B8` |
| Deep accent green | `#2D6A4F` |
| Dark section | `#1A3D28` |
| Blush pink | `#F5C6CC` |
| Sand / tan | `#E8D5B0` |
| Page background | `#FAFDF9` |
| Heading font | Inter |
| Body font | Open Sans |

---

## Contact Form Setup

The forms on both pages are wired to **Formspree** (endpoint `mvzyjygk`).  
Submissions are delivered to `info@ezovrecycling.com`.

The `@formspree/ajax` CDN library handles:
- AJAX submission (no page reload)
- Inline server-side field error messages
- Automatic success state reveal
- Submit button disable during in-flight request

---

## Location

**Defunct State Farms Premises, Pokuase-Mayera Road, Ga North Municipal, Accra, Ghana**  
Coordinates: `5.7022649, -0.2861058`

---

## Social

- Instagram: [@ezov_gh](https://www.instagram.com/ezov_gh/)
- Facebook: [EZOV Environmental Services](https://www.facebook.com/profile.php?id=100069533405256)

---

*Built with precision for EZOV Environmental Services — 2026*
