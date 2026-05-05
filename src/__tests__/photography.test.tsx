import { render, screen } from '@testing-library/react'
import Photography from '@/pages/photography'

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
})
