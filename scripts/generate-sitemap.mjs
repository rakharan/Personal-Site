import { writeFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join } from 'path'

const BASE_URL = 'https://sagameda.com'
const today = new Date().toISOString().split('T')[0]

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/photography', priority: '0.7', changefreq: 'monthly' },
  { path: '/resume', priority: '0.6', changefreq: 'yearly' },
]

// Dynamically discover blog posts
const blogDir = join(process.cwd(), 'content', 'blog')
const blogPosts = []
if (existsSync(blogDir)) {
  const files = readdirSync(blogDir).filter(f => f.endsWith('.mdx'))
  for (const file of files) {
    const slug = file.replace('.mdx', '')
    const stat = statSync(join(blogDir, file))
    const lastmod = stat.mtime.toISOString().split('T')[0]
    blogPosts.push({ path: `/blog/${slug}`, priority: '0.6', changefreq: 'yearly', lastmod })
  }
}

const allPages = [...staticPages, ...blogPosts]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${p.lastmod || today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('out/sitemap.xml', sitemap)
console.log(`Generated sitemap.xml with ${allPages.length} URLs`)
