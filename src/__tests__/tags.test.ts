import { slugifyTag } from '@/lib/tags'

describe('slugifyTag', () => {
  it('lowercases and hyphenates tags', () => {
    expect(slugifyTag('DevOps')).toBe('devops')
    expect(slugifyTag('Backend')).toBe('backend')
  })

  it('collapses non-alphanumeric runs', () => {
    expect(slugifyTag('C++ & Rust')).toBe('c-rust')
    expect(slugifyTag('  Go  ')).toBe('go')
  })

  it('trims leading and trailing hyphens', () => {
    expect(slugifyTag('--Go--')).toBe('go')
  })
})
