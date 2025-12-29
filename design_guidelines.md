# Design Guidelines: Professional Consulting Website Master Template

## Design Approach
**Selected System**: Hybrid approach drawing from Linear's typography excellence + Stripe's restraint + shadcn-ui's native component patterns. This consulting site requires credibility through clarity, not visual complexity.

**Core Principles**:
- Professional authority through typography hierarchy and generous whitespace
- Trust-building through clean layouts and consistent spacing
- Modern B2B aesthetic that feels premium without being corporate-stale

---

## Typography System

**Font Stack**:
- Primary: Inter (Google Fonts) - headings, UI elements, body
- Monospace: JetBrains Mono - code snippets in blog posts

**Hierarchy**:
- H1 (Hero): `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
- H2 (Section Headers): `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`
- H3 (Subsections): `text-2xl md:text-3xl font-semibold`
- H4 (Card Titles): `text-xl md:text-2xl font-semibold`
- Body Large: `text-lg md:text-xl leading-relaxed`
- Body: `text-base leading-relaxed`
- Small: `text-sm`

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** for consistency
- Component internal padding: `p-6` or `p-8`
- Section vertical spacing: `py-16 md:py-20 lg:py-24`
- Container gaps: `gap-8 md:gap-12 lg:gap-16`

**Container Strategy**:
- Full-width sections: `w-full` with inner `max-w-7xl mx-auto px-6`
- Content sections: `max-w-6xl mx-auto`
- Blog content: `max-w-3xl mx-auto` (optimal reading)

---

## Component Library

**Navigation**:
- Desktop: Horizontal navigation-menu with logo left, links center-right, CTA button right
- Mobile: Sheet component sliding from right with full menu
- Sticky header with subtle backdrop-blur on scroll
- Height: `h-16 md:h-20`

**Cards** (Services, Blog):
- Border style: `border rounded-lg` with subtle shadow on hover
- Padding: `p-6 md:p-8`
- Blog cards: Vertical layout with image top, content below
- Service cards: Icon (lucide-react, size 40-48px), title, description, optional link

**Forms** (Contact):
- Input/Textarea: Full shadcn-ui default styling
- Two-column layout on desktop (`grid-cols-1 md:grid-cols-2`)
- Labels: `text-sm font-medium`
- Button: Primary variant, full-width on mobile, auto-width desktop

**Buttons**:
- Primary CTA: Larger size (`px-8 py-6 text-lg`)
- Standard: Default shadcn button size
- When over images: Add `backdrop-blur-sm bg-background/80` to button background

---

## Page-Specific Layouts

**Homepage**:
1. Hero Section (90vh): Large background image of modern office/team collaboration, headline + subheadline + dual CTAs ("Get Started" + "View Services"), centered layout with `max-w-4xl`
2. Services Grid (3 columns desktop → 1 mobile): 6-8 service cards with icons
3. Social Proof: Stats row (`grid-cols-2 md:grid-cols-4`) showing "500+ Clients", "15 Years", etc.
4. CTA Section: Full-width with contrasting treatment, single focused action

**Services Page**:
- Hero: Smaller (50-60vh), image + headline overlay
- Service Cards: 2-column grid, detailed descriptions (150-200 words each)
- Include process/methodology section with timeline or numbered steps

**About Page**:
- Company story: Single column prose
- Team Grid: 3-4 columns, photo + name + role cards
- Values/Mission: Icon + text cards in 3-column grid

**Blog Listing** (/blog):
- Featured post: Large card at top with image
- Grid: 2-3 columns of blog post cards
- Each card: Image (16:9), category badge, title, excerpt, date, read time

**Blog Post** (/blog/[slug]):
- Hero: Title, date, author, read time, category - no image
- Content: Single column `max-w-3xl`, generous line-height
- Typography: Larger body text (`text-lg`), clear heading hierarchy
- Related posts: 3-column grid at bottom

**Contact Page**:
- Split layout: Form (60%) + Contact info sidebar (40%) on desktop
- Contact info: Address, phone, email, business hours with icons
- Map placeholder or office image

---

## Images

**Hero Image** (Homepage):
- Professional consulting scene: Modern office environment, diverse team collaborating, bright and aspirational
- Placement: Full-width background with overlay gradient (`bg-gradient-to-r from-black/60 to-black/30`)
- Dimensions: Optimize for 1920x1080, responsive srcset

**Service Cards**: Use lucide-react icons instead of images - keeps it clean and scalable

**Blog Posts**: Each post needs featured image (16:9 ratio, ~1200x675px)

**About Page**: Team photos (square headshots, ~400x400px) + office/culture images

---

## Multi-Column Strategy

**Use Multi-Columns**:
- Services: 3 columns desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Blog listing: 2-3 columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Stats/metrics: 4 columns (`grid-cols-2 md:grid-cols-4`)
- Team members: 3-4 columns (`grid-cols-1 md:grid-cols-3 lg:grid-cols-4`)

**Single Column**:
- Hero headlines
- Blog post content
- Contact form (but within 2-col layout with sidebar)

---

## Final Quality Standards

- Every section should have clear purpose - no empty filler
- Vertical rhythm: Consistent `py-16 md:py-24` between major sections
- Mobile-first: All multi-column layouts collapse to single column
- Avoid forced viewport heights except hero (use natural content flow)
- Rich, complete sections: Navigation includes CTA button, footer includes newsletter signup + social links + quick nav + copyright
- Animations: Minimal - subtle hover states only (cards lift slightly, buttons transition)