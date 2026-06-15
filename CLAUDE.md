# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Rakha Randhikatama built with Next.js (Pages Router) and TypeScript. The site is statically exported and deployed via FTP to sagameda.com. It features project showcases, a blog with MDX support, a photography gallery, and a resume page.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (outputs to out/ directory and generates sitemap.xml)
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint

# Run tests (Vitest)
npm run test

# Run tests in watch mode
npm run test:watch
```

## Architecture & Key Patterns

### Routing & Pages
- Uses Next.js Pages Router (not App Router)
- Static export mode (`output: 'export'` in next.config.js)
- All pages in `src/pages/`:
  - `index.tsx` - Homepage with intro and project cards
  - `blog/index.tsx` - Blog listing page
  - `blog/[slug].tsx` - Dynamic blog post pages (MDX content)
  - `photography/index.tsx` - Photo gallery with lightbox
  - `resume/index.tsx` - Resume display with download link
  - `_app.tsx` - App wrapper with global font and analytics
  - `_document.tsx` - Custom HTML document structure

### Data Layer
All content is managed through typed data files in `src/data/`:
- `projects.ts` - Project list with title, year, image, description, tech stacks, live URL, and GitHub link
- `photos.ts` - Photo gallery data with Unsplash URLs and dimensions

Blog posts are MDX files in `content/blog/` with frontmatter (title, date, description, coverImage). The `src/lib/blog.ts` module handles reading and parsing blog posts at build time.

### Component Structure
- `Layout.tsx` - Page wrapper with Navbar, Footer, and Head
- `Navbar.tsx` - Responsive navigation with mobile hamburger menu
- `Footer.tsx` - Site footer with social links
- `MainContent.tsx` - Project cards grid (used on homepage)
- `SocialLinks.tsx` - Social media icon links

### Styling & Animations
- Tailwind CSS for all styling (no CSS modules)
- Custom scroll animations via `useScrollAnimations` hook (replaces AOS library)
  - Uses IntersectionObserver to add `aos-animate` class when elements scroll into view
  - Elements need `data-aos` attribute (e.g., `data-aos="fade-up"`)
  - Optional `data-aos-delay` for staggered animations
- Custom font (Pala) loaded via `next/font/local` in `_app.tsx`
- Typography plugin for blog post prose styling

### Image Handling
- All project images are WebP format in `src/assets/projects/`
- Use Next.js `Image` component with `StaticImageData` imports for project images
- Photography gallery uses external Unsplash URLs
- Images are unoptimized (`images: { unoptimized: true }`) for static export

### Testing
- Vitest + Testing Library for component tests
- Test files in `src/__tests__/` with `.test.tsx` extension
- `setup.ts` mocks Next.js modules (Image, Head, router, dynamic, fonts)
- Run tests before committing changes

### Blog System
- Blog posts are `.mdx` files in `content/blog/` directory
- Frontmatter fields: `title`, `date`, `description`, `coverImage` (optional)
- Posts rendered with `next-mdx-remote` and `remark-gfm` for GitHub Flavored Markdown
- Reading time calculated automatically (200 words/min)
- Static generation at build time via `getStaticProps` and `getStaticPaths`

### Build Process
1. `next build` - Builds and exports static HTML to `out/`
2. `node scripts/generate-sitemap.mjs` - Generates `sitemap.xml` in `out/` with static pages and discovered blog posts

## Important Constraints

- **Static Export Mode**: No server-side rendering, no API routes, no dynamic runtime features
- **Node Version**: Requires Node.js 22.x (see engines in package.json)
- **PostCSS Override**: PostCSS locked at 8.5.13 via overrides (compatibility requirement)
- **Image Optimization**: Disabled for static export compatibility
- **Case Sensitivity**: File imports use lowercase (e.g., `layout.tsx`, `navbar.tsx`, `footer.tsx`) - match exactly

## Path Aliases

TypeScript and build tools configured with `@/*` alias mapping to `src/*`:
```typescript
import Layout from '@/components/layout'
import { projectList } from '@/data/projects'
```

## When Adding New Features

- **New Project**: Add entry to `src/data/projects.ts` with WebP image in `src/assets/projects/`
- **New Photo**: Add to `src/data/photos.ts` with proper dimensions
- **New Blog Post**: Create `.mdx` file in `content/blog/` with required frontmatter
- **New Page**: Add to `src/pages/`, ensure it uses Layout component, add to `scripts/generate-sitemap.mjs`
- **New Component**: Create in `src/components/`, use TypeScript interfaces for props
- **Animations**: Use `data-aos` and `data-aos-delay` attributes on elements

## Testing Checklist

Before pushing changes:
1. Run `npm run lint` - Must pass without errors
2. Run `npm run test` - All tests must pass
3. Run `npm run build` - Must complete without errors
4. Verify `out/` directory contains expected static files
5. Check `out/sitemap.xml` is generated correctly

## Accessibility

This site follows accessibility best practices:
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support (focus-visible states)
- Alt text on all images
- Proper heading hierarchy
- Screen reader friendly navigation
