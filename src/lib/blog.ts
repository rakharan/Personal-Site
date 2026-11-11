import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugifyTag } from './tags'

export { slugifyTag }

const blogDirectory = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  coverImage?: string
  readingTime: string
  tags: string[]
}

function getReadingTime(text: string): string {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

function normalizeTags(tags: unknown): string[] {
  return Array.isArray(tags) ? tags.filter((t): t is string => typeof t === 'string') : []
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(blogDirectory)) return []

  const files = fs.readdirSync(blogDirectory).filter(f => f.endsWith('.mdx'))

  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(blogDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      readingTime: getReadingTime(content),
      tags: normalizeTags(data.tags),
      ...(data.coverImage && { coverImage: data.coverImage }),
    } as PostMeta
  })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    description: data.description || '',
    content,
    tags: normalizeTags(data.tags),
    ...(data.coverImage && { coverImage: data.coverImage }),
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return []

  return fs.readdirSync(blogDirectory)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getAllTags(): string[] {
  return Array.from(new Set(getAllPosts().flatMap(post => post.tags))).sort()
}

export function getPostsByTag(tag: string): PostMeta[] {
  const normalized = tag.toLowerCase()
  return getAllPosts().filter(post =>
    post.tags.some(t => t.toLowerCase() === normalized || slugifyTag(t) === normalized)
  )
}
