import { render, screen } from '@testing-library/react'
import Photography, { photos } from '@/pages/photography'

describe('Photography page', () => {
  it('renders gallery heading', () => {
    render(<Photography />)
    expect(screen.getByText('GALLERY')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'ALL PHOTOGRAPHS' })).toBeInTheDocument()
  })

  it('renders featured hero with title', () => {
    render(<Photography />)
    expect(screen.getByText('FEATURED')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Cold Fire' })).toBeInTheDocument()
  })

  it('renders clickable gallery photos', () => {
    render(<Photography />)
    const buttons = screen.getAllByRole('button')
    // 8 gallery photos (featured excluded from grid)
    expect(buttons.length).toBeGreaterThanOrEqual(8)
  })

  it('uses curated image sources with descriptive alt text', () => {
    expect(photos.every((photo) => !photo.src.includes('picsum.photos'))).toBe(true)
    expect(photos.every((photo) => !/^Photo \d+$/.test(photo.alt))).toBe(true)
    expect(photos.every((photo) => photo.alt.length > 10)).toBe(true)
  })

  it('every photo has title and location', () => {
    expect(photos.every((p) => p.title.length > 0)).toBe(true)
    expect(photos.every((p) => p.location.length > 0)).toBe(true)
  })
})