import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home page', () => {
  it('renders the name heading', () => {
    render(<Home />)
    expect(screen.getAllByText(/Rakha/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Randhikatama/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders social media section', () => {
    render(<Home />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })

  it('renders portfolio section header', () => {
    render(<Home />)
    expect(screen.getByText('SELECTED PROJECTS')).toBeInTheDocument()
    expect(screen.getByText('THESE ARE MY FAVOURITE PROJECTS')).toBeInTheDocument()
  })
})
