# Speciality Homeopathy - Production Website

A medical clinic web platform built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**, optimized for deployment on **Vercel**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: Schema.org JSON-LD structured data, dynamic XML sitemaps, robots.txt, and metadata optimization

---

## 💻 Local Development & Build Commands

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Create production build**:
   ```bash
   npm run build
   ```

4. **Start production server locally**:
   ```bash
   npm run start
   ```

---

## 🚀 Step-by-Step Vercel Deployment Guide

### Option 1: Deploy via GitHub (Recommended)

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Vercel deployment"
   ```

2. **Push to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new).
   - Push your local code:
     ```bash
     git remote add origin https://github.com/<your-username>/<your-repo-name>.git
     git branch -M main
     git push -u origin main
     ```

3. **Import Project into Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) and sign in.
   - Click **Add New...** -> **Project**.
   - Select your GitHub repository and click **Import**.

4. **Project Configuration**:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. **Environment Variables**:
   - Add the following variable in the Vercel project settings:
     - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com` (or your assigned vercel domain)

6. **Deploy**:
   - Click **Deploy**. Vercel will build and launch your site with automatic SSL/HTTPS, global CDN edge caching, and instant CI/CD previews.

---

### Option 2: Deploy via Vercel CLI

```bash
npx vercel
```
Follow the interactive prompts to log in and deploy directly from your local terminal.
