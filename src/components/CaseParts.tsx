import type { ReactNode } from 'react'
import { Caption, Tbd } from './ui'

export function Questions({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((it) => (
        <li key={it.q}>
          <b className="block mb-1 font-semibold text-white">{it.q}</b>
          {it.a}
        </li>
      ))}
    </ul>
  )
}

/* Stand-ins for three pages from the business plan, until the real pages are added */
const planPages = [
  {
    label: 'Placeholder for the market-sizing figure',
    art: (
      <>
        <rect x="30" y="38" width="240" height="132" fill="#1d2a26" />
        <rect x="62" y="72" width="176" height="98" fill="#3b4c46" />
        <rect x="100" y="108" width="100" height="62" fill="#d9e2df" />
      </>
    ),
    caption: '[Market sizing from the plan, page N: restaurants in the three areas, and how many we thought would list.]',
  },
  {
    label: 'Placeholder for the pricing table',
    art: (
      <>
        {[40, 86, 132].map((y) => (
          <g key={y}>
            <rect x="30" y={y} width="170" height="28" fill="#1d2a26" />
            <rect x="214" y={y} width="56" height="28" fill="#d9e2df" />
          </g>
        ))}
      </>
    ),
    caption: '[What restaurants would pay, from the plan, page N.]',
  },
  {
    label: 'Placeholder for the breakeven chart',
    art: (
      <>
        <rect x="30" y="28" width="4" height="142" fill="#5d6d68" />
        <rect x="30" y="166" width="240" height="4" fill="#5d6d68" />
        <polyline points="34,118 265,82" fill="none" stroke="#3b4c46" strokeWidth="6" />
        <polyline points="34,158 265,40" fill="none" stroke="#d9e2df" strokeWidth="6" />
      </>
    ),
    caption: '[Breakeven from the plan, page N: how many restaurants, at what price, covered the costs.]',
  },
]

export function PlanPages() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5" aria-label="Three pages from the plan, to be added">
      {planPages.map((p) => (
        <li key={p.label}>
          <figure className="grid grid-cols-[112px_minmax(0,1fr)] gap-4 items-start sm:block">
            <svg viewBox="0 0 300 200" role="img" aria-label={p.label} className="w-full h-auto bg-panel">
              {p.art}
            </svg>
            <Caption className="mt-0 sm:mt-3">
              <Tbd>{p.caption}</Tbd>
            </Caption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
