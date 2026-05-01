import { render, screen } from '@testing-library/react'
import Navbar from '@/components/navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('R')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('PHOTOGRAPHY')).toBeInTheDocument()
    expect(screen.getByText('RESUME')).toBeInTheDocument()
  })

  it('links point to correct routes', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link')
    expect(links.find(l => l.getAttribute('href') === '/')).toBeInTheDocument()
    expect(links.find(l => l.getAttribute('href') === '/photography')).toBeInTheDocument()
    expect(links.find(l => l.getAttribute('href') === '/resume')).toBeInTheDocument()
  })
})
