import { render, screen } from '@testing-library/react'
import MainContent from '@/components/MainContent'

describe('MainContent', () => {
  it('renders all project titles', () => {
    render(<MainContent />)
    expect(screen.getByText('Waysbeans')).toBeInTheDocument()
    expect(screen.getByText('LandTick')).toBeInTheDocument()
    expect(screen.getByText('Tokopaedi')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<MainContent />)
    expect(screen.getByText(/online coffee shop/i)).toBeInTheDocument()
    expect(screen.getByText(/railway ticket/i)).toBeInTheDocument()
    expect(screen.getByText(/E-commerce API/i)).toBeInTheDocument()
  })

  it('renders tech stacks', () => {
    render(<MainContent />)
    expect(screen.getAllByText('React JS').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Go').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThanOrEqual(1)
  })

  it('renders project years', () => {
    render(<MainContent />)
    expect(screen.getAllByText('2023').length).toBe(2)
    expect(screen.getByText('2024')).toBeInTheDocument()
  })
})
