import { render, screen } from '@testing-library/react'
import MainContent from '@/components/MainContent'

describe('MainContent', () => {
  it('renders all project titles', () => {
    render(<MainContent />)
    expect(screen.getByText('Local Codebase AI')).toBeInTheDocument()
    expect(screen.getByText('TopUp Store')).toBeInTheDocument()
    expect(screen.getByText('Tokopaedi Microservices')).toBeInTheDocument()
    expect(screen.getByText('Tokopaedi')).toBeInTheDocument()
    expect(screen.getByText('Waysbeans')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<MainContent />)
    expect(screen.getByText(/Local-first RAG engine/i)).toBeInTheDocument()
    expect(screen.getByText(/Game top-up platform/i)).toBeInTheDocument()
    expect(screen.getByText(/7 microservices/i)).toBeInTheDocument()
    expect(screen.getByText(/E-commerce API/i)).toBeInTheDocument()
    expect(screen.getByText(/online coffee shop/i)).toBeInTheDocument()
  })

  it('renders tech stacks', () => {
    render(<MainContent />)
    expect(screen.getAllByText('Go').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Redis').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Docker').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('RabbitMQ')).toBeInTheDocument()
    expect(screen.getByText('MCP')).toBeInTheDocument()
  })

  it('renders project years', () => {
    render(<MainContent />)
    expect(screen.getAllByText('2026').length).toBe(2)
    expect(screen.getByText('2025')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.getByText('2023')).toBeInTheDocument()
  })

  it('renders GitHub links for each project', () => {
    const { container } = render(<MainContent />)
    const githubLinks = container.querySelectorAll<HTMLAnchorElement>('a[aria-label^="GitHub repository for"]')
    expect(githubLinks).toHaveLength(5)
    const hrefs = Array.from(githubLinks).map(link => link.href)
    expect(hrefs).toContain('https://github.com/rakharan/local-codebase-ai')
    expect(hrefs).toContain('https://github.com/rakharan/topup-store')
    expect(hrefs).toContain('https://github.com/rakharan/tokopaedi-microservices')
    expect(hrefs).toContain('https://github.com/rakharan/Tokopaedi')
    expect(hrefs).toContain('https://github.com/rakharan/Waysbeans')
  })

  it('GitHub links open in new tab with security attributes', () => {
    const { container } = render(<MainContent />)
    const githubLinks = container.querySelectorAll<HTMLAnchorElement>('a[aria-label^="GitHub repository for"]')
    githubLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders separate project and repository links', () => {
    const { container } = render(<MainContent />)
    expect(screen.getByRole('link', { name: /open waysbeans project/i })).toHaveAttribute('href', 'https://waysbeans-teal.vercel.app')
    expect(container.querySelector('a a')).not.toBeInTheDocument()
  })
})
