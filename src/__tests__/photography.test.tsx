import { render, screen } from '@testing-library/react'
import Photography from '@/pages/photography'

describe('Photography page', () => {
  it('renders placeholder message', () => {
    render(<Photography />)
    expect(screen.getByText(/no photograph is to be shown/i)).toBeInTheDocument()
  })
})
