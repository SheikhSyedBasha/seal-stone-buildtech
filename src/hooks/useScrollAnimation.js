import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = `translateY(${options.y ?? 16}px) translateX(${options.x ?? 0}px)`
    el.style.transition = `opacity ${options.duration ?? 0.6}s cubic-bezier(0.16,1,0.3,1) ${options.delay ?? 0}s, transform ${options.duration ?? 0.6}s cubic-bezier(0.16,1,0.3,1) ${options.delay ?? 0}s`

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0px) translateX(0px)'
        observer.disconnect()
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
