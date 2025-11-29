# ✨ N‑tech — Global Solutions

A polished, modern, and performance‑focused landing page built with **Next.js (App Router)** and **TypeScript** — featuring smooth Lottie animations, accessibility‑first UI, and a secure contact form with server validation.

Whether you’re developing locally, deploying to the cloud, or reviewing code structure, this guide will help you get up and running instantly.

---

## 🚀 Tech Stack & Highlights

> Optimized for performance, accessibility, and clean developer experience

- ⚡ **Next.js + TypeScript**
- 🎨 UI with **Tailwind CSS + Radix + CVA**
- 🎞 Smooth **Lottie animations**
- 🌓 **Theming** — light & dark mode support
- 📬 **Contact API** — validation via **Zod**, rate‑limited & email sending with **Nodemailer**
- 🧹 Code quality: **Biome** (linting/formatting)

---

## 📦 Getting Started

### Prerequisites

- Node.js **18+**
- `pnpm` (recommended) or `npm`

### Install dependencies

```bash
pnpm install
# or npm install
```

### Run in development

```bash
pnpm dev
# or npm run dev
```

Open: http://localhost:3000

### Build & preview production

```bash
pnpm build
pnpm start
```

---

## 🔧 Package Scripts

| Script   | Description                  |
| -------- | ---------------------------- |
| `dev`    | Run local development server |
| `build`  | Compile production build     |
| `start`  | Serve compiled build         |
| `lint`   | Run Biome checks             |
| `format` | Auto‑format using Biome      |

Use via `pnpm run <script>` or `npm run <script>`.

---

## 🧩 Architecture Overview

```
src/
├─ app/          # Pages & layouts (App Router)
├─ components/   # UI blocks: Hero, Navbar, Footer, Lottie, Forms...
├─ lib/          # Utilities, validation, rate‑limiter, email helpers
└─ api/contact/  # Contact form API route (server only)
```

- Contact form uses **Zod** for safe parsing
- Simple in‑memory **sliding‑window rate limiter** (5 req/min)
- Emails delivered via **Nodemailer**

---

## ⚙️ Environment Variables

To enable email sending, create `.env.local`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=super-secret-password
```

If omitted, `/api/contact` will return a helpful **500** response.

---

## 🧪 Code Quality

```bash
pnpm lint     # static analysis
pnpm format   # auto-format
```

Biome ensures consistent style and fast CI checks.

---

## 📤 Deployment

Create .github\workflows\deploy.yaml

## 🤝 Contributing

Contributions are welcome! 🚀

1. Fork → create a feature branch
2. Build cool features / fix issues
3. Submit a PR with details

Open an issue for discussions, questions, or improvements.

---

## 📬 Contact

By default, contact form messages are sent to:

```
admin@ntechglobalsolution.com
```

Have ideas? Collaboration? Open an issue — we’d love to hear from you!

---

## 📜 License

No license included yet. Add one (e.g., MIT) if you plan to open‑source.

---

✨ Thanks for exploring N‑tech!
