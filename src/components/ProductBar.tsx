import { useEffect, useState } from 'react'
import { products } from '../data/products'

/* Stays at the top while the four cases scroll past, and marks the one being read */
export default function ProductBar() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = products.map((p) => document.getElementById(p.id)).filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Products"
      className="sticky top-0 z-40 mt-[clamp(72px,8vw,112px)] border-y border-line bg-[#0b1210]/85 backdrop-blur-md"
    >
      <ul className="max-w-[calc(80rem+6rem)] mx-auto px-6 md:px-12 flex gap-6 md:gap-10 overflow-x-auto [scrollbar-width:none]">
        {products.map((p) => {
          const on = active === p.id
          return (
            <li key={p.id} className="shrink-0">
              <a
                href={`#${p.id}`}
                aria-current={on ? 'true' : undefined}
                className={`flex items-baseline gap-2 py-4 border-b-2 -mb-px transition-colors duration-200 ${
                  on ? 'border-accent text-white' : 'border-transparent text-white/55 hover:text-white'
                }`}
              >
                <span className="text-[13px] font-semibold">{p.name}</span>
                <span className={`font-mono text-[10.5px] uppercase tracking-[0.1em] ${on ? 'text-accent' : 'text-white/35'}`}>
                  {p.model}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
