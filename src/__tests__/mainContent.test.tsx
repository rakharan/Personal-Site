import { render, screen } from '@testing-library/react'
import MainContent from '@/components/MainContent'

describe('MainContent', () => {
  it('renders all project titles', () => {
    render(<MainContent />)
    expect(screen.getByText('Waysbeans')).toBeInTheDocument()
    expect(screen.getByText('TopUp Store')).toBeInTheDocument()
    expect(screen.getByText('Tokopaedi')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<MainContent />)
    expect(screen.getByText(/online coffee shop/i)).toBeInTheDocument()
    expect(screen.getByText(/Game top-up platform/i)).toBeInTheDocument()
    expect(screen.getByText(/E-commerce API/i)).toBeInTheDocument()
  })

  it('renders tech stacks', () => {
    render(<MainContent />)
    expect(screen.getAllByText('Go').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Redis')).toBeInTheDocument()
    expect(screen.getAllByText('Docker').length).toBeGreaterThanOrEqual(1)
  })

  it('renders project years', () => {
    render(<MainContent />)
    expect(screen.getAllByText('2023').length).toBe(1)
    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.getByText('2026')).toBeInTheDocument()
  })

  it('renders GitHub links for each project', () => {
    const { container } = render(<MainContent />)
    const githubLinks = container.querySelectorAll<HTMLAnchorElement>('a[aria-label^="GitHub repository for"]')
    expect(githubLinks).toHaveLength(3)
    const hrefs = Array.from(githubLinks).map(link => link.href)
    expect(hrefs).toContain('https://github.com/rakharan/Waysbeans')
    expect(hrefs).toContain('https://github.com/rakharan/topup-store')
    expect(hrefs).toContain('https://github.com/rakharan/Tokopaedi')
  })

  it('GitHub links open in new tab with security attributes', () => {
    const { container } = render(<MainContent />)
    const githubLinks = container.querySelectorAll<HTMLAnchorElement>('a[aria-label^="GitHub repository for"]')
    githubLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
