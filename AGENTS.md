# Personal-Site

Personal Next.js site deployed on Vercel. Email: `randhikatamar@gmail.com`.

## Session 2026-06-16 summary

### Fixes done
- Vercel build failure: git tracked component files as lowercase (`navbar.tsx`, `footer.tsx`, `layout.tsx`) but imports used PascalCase → fixed via `git mv --force` to correct casing in git index.
- Blog post page layout: removed `max-w-3xl` constraint clamping content width.
- Added cover images (Unsplash) to all 3 blog posts.

### UI/UX improvements (15 tasks)
- Photography masonry column breakpoints adjusted.
- Reading time added to blog index cards (`getReadingTime` moved to `blog.ts`).
- Cover image display inside blog post page.
- Scroll-to-top button on blog posts.
- Next/previous post navigation on blog post pages.
- `og:image` + `og:title` meta tags on blog post pages.
- Reduced homepage hero dead space.
- Latest blog posts section on homepage.
- Email added to footer.
- Custom 404 page created.
- Heading hierarchy fixed in homepage projects section.
- `og:title` + updated meta descriptions on homepage.
- Active state for home route in navbar.
- Hover scale effect on blog cards.

### Photography page fix
- Problem: masonry layout rendered single-column on laptop because `data-aos` wrapper (`opacity: 0`) caused `PhotoAlbum` to measure container width as 0.
- Fix: added `mounted` state via `useEffect` — PhotoAlbum only renders after hydration so it measures width correctly.

### Grid background issue (UNRESOLVED as of 2026-06-16)
- Original blueprint-style grid worked at commit `08ae9f01`.
- Broke after UI/UX improvements commit. Tried `@layer base`, `html` element, `!important`, inline style in `_document.tsx`.
- Root cause: Tailwind Preflight resets `body` background in production.
- Current state: `globals.css` and `_document.tsx` reverted to working state from commit `08ae9f0`.
- Grid CSS confirmed present in production CSS chunk but Vercel still showed blank — suspected Vercel build cache issue.
- Forced empty commit `6d9b68d` to trigger fresh Vercel deploy.
- Status: waiting for Vercel to redeploy with cleared cache. **Verify on next session whether grid reappeared.**

## How to apply
- When touching layout/CSS, remember Tailwind Preflight can silently reset body styles in prod but not dev.
- When renaming component files (especially casing changes), use `git mv --force` — plain rename won't update the git index on case-insensitive filesystems.
