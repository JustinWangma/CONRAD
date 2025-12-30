import { useEffect, useMemo, useRef, useState } from 'react'
import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'

type StyleWithVars = CSSProperties & Record<string, string | number>

type RevealProps<T extends ElementType> = {
  as?: T
  className?: string
  children: ReactNode
  style?: StyleWithVars
  /** Delay in ms (used for stagger). */
  delayMs?: number
  /** Once means it reveals only the first time it enters viewport. */
  once?: boolean
  /** IntersectionObserver rootMargin, e.g. "0px 0px -10% 0px" */
  rootMargin?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children' | 'style'>

export function Reveal<T extends ElementType = 'div'>({
  as,
  className,
  children,
  style: styleProp,
  delayMs = 0,
  once = true,
  rootMargin = '0px 0px -10% 0px',
  ...rest
}: RevealProps<T>) {
  const Tag: ElementType = as ?? 'div'
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  const style = useMemo<StyleWithVars>(() => {
    return { ...(styleProp ?? {}), ['--reveal-delay']: `${delayMs}ms` }
  }, [delayMs, styleProp])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: if IntersectionObserver is unavailable, reveal immediately
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    let obs: IntersectionObserver | null = null
    try {
      obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setInView(true)
              if (once && obs) obs.disconnect()
            } else if (!once) {
              setInView(false)
            }
          }
        },
        { root: null, threshold: 0.15, rootMargin },
      )
    } catch {
      // If observer construction fails for any reason, reveal immediately
      setInView(true)
      return
    }

    obs.observe(el)
    return () => {
      if (obs) obs.disconnect()
    }
  }, [once, rootMargin])

  const combinedClassName = `${className ?? ''} reveal${inView ? ' revealIn' : ''}`.trim()

  return (
    <Tag ref={ref} className={combinedClassName} style={style} {...rest}>
      {children}
    </Tag>
  )
}


