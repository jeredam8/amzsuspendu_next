# Apex Consulting - Next.js 14 Master Template

## Overview
A professional consulting website built with Next.js 14 App Router, featuring a complete blog system, SEO optimization, and shadcn-ui components.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui (button, card, input, textarea, sheet, navigation-menu, badge, label)
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light mode support)

## Project Structure
```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and CSS variables
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── contact/page.tsx    # Contact page with form
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Dynamic blog post
│   ├── sitemap.ts          # SEO sitemap generation
│   ├── robots.ts           # SEO robots.txt
│   └── not-found.tsx       # 404 page
├── components/
│   ├── ui/                 # shadcn-ui components
│   ├── navigation.tsx      # Site navigation with mobile sheet
│   ├── footer.tsx          # Site footer with newsletter
│   ├── theme-provider.tsx  # Dark/light mode provider
│   └── theme-toggle.tsx    # Theme toggle button
├── config/
│   └── site.ts             # Centralized site configuration
├── lib/
│   ├── utils.ts            # Utility functions (cn, formatDate)
│   └── dummy-data.ts       # Blog posts data
└── design_guidelines.md    # Design system documentation
```

## Key Features
1. **Homepage**: Hero section, services grid, stats, value proposition, CTA
2. **Services Page**: Detailed service cards, process methodology, industries
3. **About Page**: Company story, values, leadership team, timeline
4. **Contact Page**: Contact form, business info, hours
5. **Blog System**: Featured post, post listing, dynamic routes, related posts
6. **SEO**: sitemap.ts, robots.ts, metadata from config/site.ts
7. **Dark Mode**: System preference with manual toggle
8. **Responsive**: Mobile-first with sheet navigation

## Configuration
Site configuration is centralized in `config/site.ts`:
- Site name, description, URL
- Contact information
- Social links
- Business hours

## Development
```bash
npm run dev     # Start development server on port 5000
npm run build   # Build for production
npm run start   # Start production server
```

## Design System
- Typography: Inter (sans), JetBrains Mono (mono)
- Colors: Blue primary (#3b82f6), neutral grays
- Spacing: Consistent 6/8/12/16/24 scale
- Components: Follow shadcn-ui patterns

## Recent Changes
- **2024-12-28**: Initial setup with Next.js 14 App Router
  - Complete project structure
  - All core pages implemented
  - Blog system with dummy data
  - SEO configuration
  - Dark mode support
