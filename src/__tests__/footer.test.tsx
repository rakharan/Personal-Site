import { render, screen } from '@testing-library/react'
import Footer from '@/components/footer'

describe('Footer', () => {
  it('renders location', () => {
    render(<Footer />)
    expect(screen.getByText('Indonesia')).toBeInTheDocument()
  })

  it('renders local time section', () => {
    render(<Footer />)
    expect(screen.getByText('Local Time')).toBeInTheDocument()
  })

  it('renders social links with correct hrefs', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const hrefs = links.map(l => l.getAttribute('href'))
    expect(hrefs).toContain('https://www.linkedin.com/in/rakha-randhikatama/')
    expect(hrefs).toContain('https://github.com/rakharan')
    expect(hrefs).toContain('https://www.instagram.com/rakharan/')
  })

  it('external links have noopener noreferrer', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      if (link.getAttribute('target') === '_blank') {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      }
    })
  })
})
