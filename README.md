# Mindflow Blog

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![Prismic](https://img.shields.io/badge/Prismic-CMS-purple)](https://prismic.io/)

A modern blog platform built with Next.js 15, Prismic CMS, and Tailwind CSS.

## Features

- 📝 **Content Management** - Prismic CMS integration with real-time preview
- 🎨 **Modern Design** - Responsive design with dark/light mode
- 🔍 **Search** - Full-text search functionality
- 👤 **Author Profiles** - Individual author pages
- 🏷️ **Categories** - Content organization
- 📱 **Mobile First** - Optimized for all devices
- 🚀 **Performance** - SSG/ISR with Next.js App Router

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **CMS**: Prismic headless CMS
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Quick Start

1. **Clone and install**
   ```bash
   git clone https://github.com/phanan04/mindflow.git
   cd mindflow
   npm install
   ```

2. **Environment setup**
   ```env
   # .env.local
   PRISMIC_REPOSITORY_NAME=your-repository-name
   PRISMIC_ACCESS_TOKEN=your-access-token
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Setup content**
   - Import custom types from `customtypes/` to your Prismic repository
   - Create content in Prismic dashboard
   - Content will appear on your site automatically

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── authors/[slug]/    # Author pages
│   ├── blog/[slug]/       # Blog posts
│   ├── categories/[slug]/ # Category pages
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utilities
└── slices/               # Prismic slices
```

## Deployment

Vercel: https://mindflow-pan.vercel.app/

## License

MIT License 
