# padmijas.org

Website for [PAD](https://padmijas.org) — Protectora de Animales Domésticos, a non-profit animal shelter in Mijas Costa, Spain.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [Directus](https://directus.io) as the headless CMS. Supports Spanish (default) and English.

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/8451dee7-1342-478d-8a92-41b8cb519b99" />


---

## Local development

```bash
# Install dependencies
npm install

# Copy the example env file and fill in the values
cp .env.example .env

# Start the dev server at http://localhost:4321
npm run dev
```

---

## Environment variables

Create a `.env` file at the root of the project with the following variables:

```env
# Directus CMS
DIRECTUS_URL=https://admin.padmijas.org
DIRECTUS_TOKEN=your-static-token

# Contact form (Brevo)
BREVO_API_URL=https://api.brevo.com/v3/smtp/email
BREVO_API_KEY=your-brevo-api-key
RECIPIENT_EMAIL=shelter@example.com
BCC_EMAIL=yourpersonal@example.com

# Google reCAPTCHA v3
RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

| Variable | Description |
|---|---|
| `DIRECTUS_URL` | URL of the Directus instance |
| `DIRECTUS_TOKEN` | Static access token for the Directus API |
| `BREVO_API_URL` | Brevo transactional email API endpoint |
| `BREVO_API_KEY` | Brevo API key |
| `RECIPIENT_EMAIL` | Email address that receives contact form submissions |
| `BCC_EMAIL` | Email address added as BCC on every contact form submission |
| `RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 public site key (used in the browser) |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v3 secret key (used server-side) |

---

## Build and deployment

The site uses Astro's hybrid output: most pages are pre-rendered as static HTML at build time, while the contact form and dog listing pages are server-rendered (they handle POST requests and search filters).

```bash
# Type-check and build
npm run build

# Preview the production build locally
npm run preview
```

The build produces a `dist/` directory. The Node.js adapter serves the server-rendered pages. To run in production:

```bash
node ./dist/server/entry.mjs
```

Set `HOST` and `PORT` to control where the server listens:

```env
HOST=0.0.0.0
PORT=3000
```

---

## Directus CMS

All content is managed through the Directus admin panel at `DIRECTUS_URL/admin`.

The following collections are used by the website:

| Collection | Purpose |
|---|---|
| `animals` | Dog profiles (name, breed, gender, birth date, status, photos) |
| `animals_translations` | Translated descriptions for each dog (ES / EN) |
| `pages` | Flexible content pages for the volunteer section |
| `events` | Adoption fairs and activities |
| `testimonials` | Volunteer testimonials shown on the home page |
| `faq` | Frequently asked questions |
| `global` | Site-wide settings, including the announcement banner |

### Dog status values

| Status | Meaning |
|---|---|
| `published` | Available for adoption — shown on the listing page |
| `reserved` | A family is being evaluated — shown with a badge |
| `adopted` | Already adopted — can be shown in the full listing |
| `draft` | Hidden from the website |

### Image transformation keys

Directus image transformation presets used by the frontend:

| Key | Usage |
|---|---|
| `profile` | Dog profile picture (square thumbnail) |
| `hero` | Dog cover image (wide banner) |
| `og-dog` | Open Graph image for dog profile pages |

These presets must be configured in Directus under **Settings → Presets & Defaults → Image transformations**.

---

## Internationalization

The site has two locales. Spanish (`es`) is the default.

- Spanish URLs: `/es/nuestros-perros`, `/es/contacto`, etc.
- English URLs: `/en/our-dogs`, `/en/contact`, etc.

Static UI strings are defined in `src/consts.ts` and `src/i18n.ts` as `Multilingual` objects (`{ es: "...", en: "..." }`). Dynamic content (dog descriptions, page content, events) is translated inside Directus using the `translations` relation on each collection.

---

## Contact form

The contact form uses [Brevo](https://brevo.com) to send emails and [Google reCAPTCHA v3](https://www.google.com/recaptcha) to filter spam.

**Troubleshooting: emails not being sent**

If the contact form stops working, check these common causes:

1. **Brevo IP whitelist** — Brevo requires the server's outbound IP to be on the authorized list. If the server IP changes (e.g. after a redeploy), add the new IP at [app.brevo.com/security/authorised\_ips](https://app.brevo.com/security/authorised_ips).
2. **API key inactive** — Check that the Brevo API key is active in the Brevo dashboard.
3. **Missing env vars** — Confirm `BREVO_API_KEY`, `RECIPIENT_EMAIL`, and `RECAPTCHA_SECRET_KEY` are set in the production environment.

---

## Project structure

```
src/
├── api/            # Directus SDK queries, typed with Schema interface
├── assets/         # Static assets (images, fonts, global CSS)
├── components/
│   ├── forms/      # Button, contact form
│   ├── i18n/       # Language selector
│   ├── layout/     # Header, footer, warning banner
│   ├── navigation/ # Navbar, breadcrumbs
│   └── ui/         # Cards, testimonials, pet meta, social share
├── layouts/        # Base layout (SEO, header, footer)
├── pages/
│   ├── es/         # Spanish pages
│   └── en/         # English pages
├── config.ts       # Site metadata, menus, footer links, social links
├── consts.ts       # Translatable UI strings
├── i18n.ts         # Translation helpers and locale routing
└── locales.ts      # Locale definitions (es, en)
```
