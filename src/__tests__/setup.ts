import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

vi.mock('next/font/local', () => ({
  default: () => ({ className: 'mocked-font' }),
}))

vi.mock('next/image', () => ({
  default: function MockImage({ src, alt }: { src: string; alt: string }) {
    return React.createElement('img', { src, alt, 'data-testid': 'mock-image' })
  },
}))

vi.mock('next/dynamic', () => ({
  default: (fn: () => Promise<{ default: React.ComponentType }>) => {
    return function DynamicComponentWrapper(props: Record<string, unknown>) {
      const [Component, setComponent] = React.useState<React.ComponentType | null>(null)
      React.useEffect(() => {
        fn().then((mod) => setComponent(() => mod.default))
      }, [])
      return Component ? React.createElement(Component, props) : null
    }
  },
}))

vi.mock('next/head', () => ({
  default: function MockHead({ children }: { children: React.ReactNode }) {
    return React.createElement('div', { 'data-testid': 'mock-head' }, children)
  },
}))

vi.mock('next/document', () => ({
  Html: function MockHtml({ children }: { children: React.ReactNode }) {
    return React.createElement('div', { 'data-testid': 'mock-html' }, children)
  },
  Head: function MockDocHead({ children }: { children: React.ReactNode }) {
    return React.createElement('div', { 'data-testid': 'mock-doc-head' }, children)
  },
  Main: function MockMain() {
    return React.createElement('div', { 'data-testid': 'mock-main' })
  },
  NextScript: function MockNextScript() {
    return React.createElement('div', { 'data-testid': 'mock-next-script' })
  },
}))

vi.mock('aos', () => ({
  default: {
    init: vi.fn(),
  },
}))
