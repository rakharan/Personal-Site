import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  coverImage?: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(blogDirectory)) return []

  const files = fs.readdirSync(blogDirectory).filter(f => f.endsWith('.mdx'))

  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(blogDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
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
    ...(data.coverImage && { coverImage: data.coverImage }),
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return []

  return fs.readdirSync(blogDirectory)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}
