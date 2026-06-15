import { render, screen } from '@testing-library/react'
import Photography, { photos } from '@/pages/photography'

describe('Photography page', () => {
  it('renders gallery heading', () => {
    render(<Photography />)
    expect(screen.getByText('GALLERY')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'PHOTOGRAPHY' })).toBeInTheDocument()
  })

  it('renders photo album', () => {
    render(<Photography />)
    expect(screen.getByRole('group', { name: /photo album/i })).toBeInTheDocument()
  })

  it('uses curated image sources with descriptive alt text', () => {
    expect(photos.every((photo) => !photo.src.includes('picsum.photos'))).toBe(true)
    expect(photos.every((photo) => !/^Photo \d+$/.test(photo.alt))).toBe(true)
    expect(photos.every((photo) => photo.alt.length > 10)).toBe(true)
  })
})
