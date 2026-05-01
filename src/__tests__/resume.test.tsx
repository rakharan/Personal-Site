import { render, screen } from '@testing-library/react'
import Resume from '@/pages/resume'

describe('Resume page', () => {
  it('renders download resume link', () => {
    render(<Resume />)
    expect(screen.getByText('Download Resume')).toBeInTheDocument()
  })
})
