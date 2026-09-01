# OpenPrompt — The home for every AI prompt

Welcome to the official pre-launch landing page for **OpenPrompt**. 

OpenPrompt is a tool being built to give users a single, dedicated place to save, organize, discover, and share their best AI prompts, instead of leaving them scattered across chats, notes, documents, and bookmarks. 

This repository contains the high-performance, minimalist, and premium landing page designed to explain the product, build anticipation, and collect waitlist signups.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Validation**: [Zod](https://zod.dev/)
- **Email Delivery**: [Resend](https://resend.com/)

## ✨ Key Features

- **Premium Design**: A highly editorial, calm, and sophisticated UI. Avoids generic AI visual tropes in favor of clean typography, subtle animations, and bespoke geometric SVGs.
- **Animated ASCII Art**: A custom-built, lightweight Canvas ASCII wave background that adds a creative "hacker-meets-luxury" feel.
- **Fully Functional Waitlist API**: Complete serverless route (`/api/waitlist`) handling form submissions.
- **Spam Protection & Validation**: Includes a hidden honeypot field and robust Zod schema validation to keep your database clean.
- **Transactional Emails**: Integrates with the Resend API to automatically send beautifully formatted HTML welcome emails to waitlist subscribers.

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed, as well as access to a PostgreSQL database (e.g., Supabase, Neon, or local Postgres) and a Resend account.

### 1. Clone the repository
```bash
git clone https://github.com/ShikharCodex/Landing-Page--OP.git
cd Landing-Page--OP
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add the following keys:
```env
# Your PostgreSQL connection string
DATABASE_URL="postgres://user:password@host:port/database"

# Your Resend API key for sending emails
RESEND_API_KEY="re_123456789"
```

### 4. Sync the database schema
Push the Prisma schema to your database to create the `Waitlist` table:
```bash
npx prisma db push
```
*(Also generates the local Prisma client)*

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚀 Deployment (Vercel)

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new).

1. Import your GitHub repository to Vercel.
2. In the project settings, add the `DATABASE_URL` and `RESEND_API_KEY` to the **Environment Variables**.
3. Click **Deploy**. Vercel will automatically detect Prisma, run the required generate commands, build the Next.js app, and publish it live!

## 📄 License

This project is proprietary and built for OpenPrompt. All rights reserved.
