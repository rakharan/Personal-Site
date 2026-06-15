import { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * Lightweight AOS replacement using IntersectionObserver.
 * Observes all elements with a `data-aos` attribute and adds the
 * `aos-animate` class when they scroll into view. Supports
 * `data-aos-delay` for staggered animations.
 *
 * Re-runs on every client-side route change so elements animate in
 * correctly after Next.js page transitions.
 */
export function useScrollAnimations() {
  const { pathname } = useRouter()

  useEffect(() => {
    // Reset any previously animated elements so they can animate in again
    document.querySelectorAll('[data-aos].aos-animate').forEach((el) => {
      el.classList.remove('aos-animate')
    })

    // Small delay to let the new page's DOM settle before observing
    const setup = setTimeout(() => {
      const elements = document.querySelectorAll('[data-aos]')
      if (elements.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              const delay = parseInt(el.dataset.aosDelay || '0', 10)
              if (delay > 0) {
                setTimeout(() => el.classList.add('aos-animate'), delay)
              } else {
                el.classList.add('aos-animate')
              }
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1 }
      )

      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(setup)
  }, [pathname])
}
