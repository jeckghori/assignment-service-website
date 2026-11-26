# Assignment Assist

A responsive marketing site for an academic support service. Students can read the services and starting prices, then send an inquiry through WhatsApp.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173`.

Production build:

```bash
npm run build
npm run preview
```

## Change the WhatsApp number

Edit `src/config/site.ts`.

- `whatsappE164` — country code plus number, digits only. Example for India: `919876543210`
- `whatsappDisplay` — the number shown on the page, for example `+91 98765 43210`

Also update `email`, `workingHours`, and `responseTime` in the same file.

## Change pricing

Edit the `prices` object at the top of `src/config/site.ts`. Service cards and pricing cards both read those numbers. Editing and formatting uses `prices.report`.

## Deploy on Vercel

1. Push the project to a Git repository.
2. In Vercel, import the repository.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

`vercel.json` already rewrites routes so `/privacy` and `/terms` work on refresh.

You can also deploy with the Vercel CLI from this folder:

```bash
npx vercel
```

## Custom domain

1. In the Vercel project, open Settings → Domains and add the domain.
2. At your DNS provider, add the A or CNAME records Vercel shows.
3. Wait for the certificate to be issued.
4. Update `site.url` in `src/config/site.ts`.
5. Add these tags to `index.html` once the domain is live:

```html
<link rel="canonical" href="https://your-domain.com/" />
<meta property="og:url" content="https://your-domain.com/" />
```

Firebase Hosting is also ready: `firebase.json` serves the `dist` folder and rewrites all routes to `index.html`.

```bash
npm run build
npx firebase-tools deploy --only hosting
```

## What works now

- All public pages, navigation, and responsive layout
- Form validation
- WhatsApp inquiry message, including a manual-file note
- Copy inquiry details to the clipboard
- Local file selection and filename display
- Floating WhatsApp button, contact links, and scroll-to-top
- Privacy Policy, Terms, and the academic integrity disclaimer

## What needs a backend later

- Uploading PDFs or images to a server or Google Drive
- Saving inquiries to Google Sheets or a database
- Sending email without WhatsApp
- Payments, accounts, and an admin inbox
- Replacing the placeholder testimonials with a review system

The form does not pretend that files were uploaded. Students attach selected files in the WhatsApp chat, or paste a Drive link.

To connect Google Forms, Google Sheets, or Drive later, keep `src/lib/inquiry.ts` as the source of the inquiry payload and send that payload from `src/components/InquiryForm.tsx` before `openWhatsApp` runs. Do not remove the on-page note about manual attachments until an upload actually stores the file.
