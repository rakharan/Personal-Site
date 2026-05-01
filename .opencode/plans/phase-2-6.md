# Phase 2-6 Implementation Plan

## Phase 2: Add Tests (Vitest + RTL)
- Add `test` and `test:watch` scripts to package.json
- Create `vitest.config.ts` with jsdom environment and @vitejs/plugin-react
- Create `src/__tests__/setup.ts` importing @testing-library/jest-dom
- Write tests for: Layout, Navbar, Footer, MainContent, pages (index, resume, photography)

## Phase 3: Add Vercel Analytics
- Install `@vercel/analytics`
- Add `<Analytics />` to `_app.tsx`

## Phase 4: Photography Page (Masonry + Lightbox)
- Install `react-photo-album` + `yet-another-react-lightbox`
- Replace placeholder with masonry grid
- Click photo opens fullscreen lightbox with navigation
- Use placeholder images for now

## Phase 5: MDX Blog
- Install `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`
- Configure `next.config.js` for MDX
- Create `/blog` index page, `/blog/[slug]` dynamic page
- Create `/content/blog/` for .mdx files
- Add sample blog post

## Phase 6: More Projects
- Await project details from user
