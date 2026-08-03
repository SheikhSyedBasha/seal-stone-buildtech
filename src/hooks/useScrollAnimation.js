import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const { y = 16, x = 0, duration = 0.6, delay = 0 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = `translateY(${y}px) translateX(${x}px)`
    el.style.transition = `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0px) translateX(0px)'
        observer.disconnect()
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' })

    observer.observe(el)
    return () => observer.disconnect()
  }, [y, x, duration, delay])

  return ref
}
