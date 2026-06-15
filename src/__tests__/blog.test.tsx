import { render, screen } from '@testing-library/react'
import BlogIndex from '@/pages/blog/index'
import PostPage from '@/pages/blog/[slug]'

const mockPost = {
  slug: 'test-post',
  title: 'Test Post Title',
  date: '2026-04-10',
  description: 'A test post description.',
  content: JSON.stringify({ compiledSource: '', frontmatter: {}, scope: {} }),
  readingTime: '2 min read',
}

describe('BlogIndex page', () => {
  it('renders the blog heading', () => {
    render(<BlogIndex posts={[]} />)
    expect(screen.getByText('WRITINGS')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'BLOG' })).toBeInTheDocument()
  })

  it('renders empty state when there are no posts', () => {
    render(<BlogIndex posts={[]} />)
    expect(screen.getByText(/No posts yet/i)).toBeInTheDocument()
  })

  it('renders a list of posts', () => {
    const posts = [
      { slug: 'first-post', title: 'First Post', date: '2026-05-01', description: 'First description.' },
      { slug: 'second-post', title: 'Second Post', date: '2026-04-01', description: 'Second description.' },
    ]
    render(<BlogIndex posts={posts} />)
    expect(screen.getByText('First Post')).toBeInTheDocument()
    expect(screen.getByText('Second Post')).toBeInTheDocument()
    expect(screen.getByText('First description.')).toBeInTheDocument()
  })

  it('renders cover image when provided', () => {
    const posts = [
      {
        slug: 'with-cover',
        title: 'Post With Cover',
        date: '2026-05-01',
        description: 'Has a cover image.',
        coverImage: '/images/cover.webp',
      },
    ]
    render(<BlogIndex posts={posts} />)
    const img = screen.getByAltText('Cover image for Post With Cover')
    expect(img).toBeInTheDocument()
  })

  it('renders placeholder when no cover image', () => {
    const posts = [
      { slug: 'no-cover', title: 'No Cover Post', date: '2026-05-01', description: 'No cover.' },
    ]
    render(<BlogIndex posts={posts} />)
    // heading + placeholder both render "BLOG" — confirm at least one placeholder div exists
    const blogTexts = screen.getAllByText('BLOG')
    expect(blogTexts.length).toBeGreaterThanOrEqual(2)
  })

  it('renders post links with correct hrefs', () => {
    const posts = [
      { slug: 'my-post', title: 'My Post', date: '2026-05-01', description: 'Desc.' },
    ]
    render(<BlogIndex posts={posts} />)
    const link = screen.getByRole('link', { name: /my post/i })
    expect(link).toHaveAttribute('href', '/blog/my-post')
  })
})

describe('PostPage', () => {
  it('renders post title and description', () => {
    render(<PostPage post={mockPost} />)
    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
    expect(screen.getByText('A test post description.')).toBeInTheDocument()
  })

  it('renders post date and reading time', () => {
    render(<PostPage post={mockPost} />)
    expect(screen.getByText('2026-04-10')).toBeInTheDocument()
    expect(screen.getByText('2 min read')).toBeInTheDocument()
  })

  it('renders back to blog link', () => {
    render(<PostPage post={mockPost} />)
    expect(screen.getByRole('link', { name: /back to blog/i })).toBeInTheDocument()
  })

  it('renders not found state when post is null', () => {
    render(<PostPage post={null} />)
    expect(screen.getByText('Post Not Found')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back to blog/i })).toBeInTheDocument()
  })
})
