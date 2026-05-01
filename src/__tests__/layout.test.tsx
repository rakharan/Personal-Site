import { render, screen } from '@testing-library/react'
import Layout from '@/components/layout'

describe('Layout', () => {
  it('renders children content', () => {
    render(<Layout title='Test Page'><p>Hello World</p></Layout>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders navbar and footer', () => {
    render(<Layout title='Test'><div>content</div></Layout>)
    expect(screen.getByText('R')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
  })
})
