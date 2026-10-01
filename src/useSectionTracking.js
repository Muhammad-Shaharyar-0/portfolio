import { useEffect } from 'react'
import { track } from './analytics'

// Records "view/<name>" once per visit, the first time the section scrolls into view.
const useSectionTracking = (ref, name) => {
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track(`view/${name}`, `Viewed ${name}`)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -35% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, name])
}

export default useSectionTracking
