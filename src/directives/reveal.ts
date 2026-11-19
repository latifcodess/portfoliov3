import type { Directive } from 'vue'

let observer: IntersectionObserver | null = null

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  )
  return observer
}

/** Apparition douce au scroll. Inactif si prefers-reduced-motion. */
export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  beforeUnmount(el) {
    observer?.unobserve(el)
  },
}
