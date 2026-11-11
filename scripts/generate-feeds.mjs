import { writeFileSync, readdirSync, existsSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const BASE_URL = 'https://sagameda.com'
const SITE_TITLE = 'Rakha Randhikatama'
const SITE_DESCRIPTION =
  'Backend development, Go, and DevOps writings by Rakha Randhikatama.'

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/photography', priority: '0.7', changefreq: 'monthly' },
  { path: '/resume', priority: '0.6', changefreq: 'yearly' },
]

const blogDir = join(process.cwd(), 'content', 'blog')
const posts = []

if (existsSync(blogDir)) {
  const files = readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))
  for (const file of files) {
    const slug = file.replace('.mdx', '')
    const { data } = matter(readFileSync(join(blogDir, file), 'utf8'))
    posts.push({
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
    })
  }
}

posts.sort((a, b) => (a.date > b.date ? -1 : 1))

// Sitemap: posts use frontmatter date, not checkout mtime
const blogPages = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  priority: '0.6',
  changefreq: 'yearly',
  lastmod: p.date || undefined,
}))

// Tag pages
const slugifyTag = (tag) =>
  tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort()
const tagPages = allTags.map((tag) => ({
  path: `/blog/tag/${slugifyTag(tag)}`,
  priority: '0.4',
  changefreq: 'weekly',
}))

const today = new Date().toISOString().split('T')[0]
const allPages = [...staticPages, ...blogPages, ...tagPages]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${p.lastmod || today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

writeFileSync(join('out', 'sitemap.xml'), sitemap)
console.log(`Generated sitemap.xml with ${allPages.length} URLs`)

// RSS 2.0 feed
const toRfc822 = (date) => {
  const d = date ? new Date(`${date}T00:00:00Z`) : new Date()
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString()
}

const rssItems = posts
  .map(
    (p) => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${BASE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>
      <pubDate>${toRfc822(p.date)}</pubDate>
      <description><![CDATA[${p.description}]]></description>
    </item>`
  )
  .join('\n')

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${BASE_URL}/blog</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>`

writeFileSync(join('out', 'rss.xml'), rss)
console.log(`Generated rss.xml with ${posts.length} items`)
