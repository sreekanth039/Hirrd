# Full Stack Job Portal with React JS, Tailwind CSS, Supabase, Clerk, Shadcn UI Tutorial 🔥🔥

## Hirrd – Job Portal (React + Vite + Supabase + Clerk)

A modern job marketplace where candidates can browse/apply/save jobs and recruiters can post and manage jobs. Built with React (Vite), Supabase (DB + storage + REST), Clerk (auth), Tailwind CSS v4, and shadcn/ui.

## ✨ Demo

- Production (Vercel): https://hirrd-phi.vercel.app/
- Example routes: /jobs, /job/:id, /saved-job, /my-jobs
- SPA routes work thanks to vercel.json rewrites.

## 🧱 Tech Stack

- Frontend: React 18, Vite, React Router
- UI: Tailwind v4, shadcn/ui, lucide-react
- Markdown: react-markdown (@tailwindcss/typography)
- Auth: Clerk
- Backend: Supabase (Postgres, RLS, Storage)
- Deploy: Vercel

## 🔥 Features

- Browse latest jobs with filters (search, location, company)
- Job detail page with company logo, requirements (markdown), status (Open/Closed)
- Apply to jobs with resume upload (PDF/DOC/DOCX), education, skills, experience
- Save/unsave jobs (favorites)
- Recruiter dashboard: post jobs, view applicants, change hiring status
- Protected routes via Clerk
- SPA-friendly routing on Vercel

## 📦 Project Structure

- src/
 - api/                 // Supabase API helpers (jobs, companies, applications)
 - components/          // Reusable UI + feature components (JobCard, Header, etc.)
 - hooks/               // use-fetch, etc.
 - layouts/             // App layout
 - pages/               // landing, job-listing, job, post-job, saved-job, my-jobs
 - utils/               // supabase client, helpers
 - index.css            // Tailwind v4 + custom layers
  
## ⚙️ Environment Variables

- Create .env.local (and set the same on Vercel):
- VITE_CLERK_PUBLISHABLE_KEY=pk_***
- VITE_SUPABASE_URL=https://xxxx.supabase.co
- VITE_SUPABASE_ANON_KEY=eyJhbGciOi***
- Only variables prefixed with VITE_ are available to the browser.

## 🚀 Getting Started

## install
npm i

## dev
npm run dev


## production build
npm run build
npm run preview
