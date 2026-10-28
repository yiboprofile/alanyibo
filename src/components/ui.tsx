import type { ReactNode } from 'react'

export function Tbd({ children }: { children: ReactNode }) {
  return <mark className="tbd">{children}</mark>
}

export function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MoreLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200"
    >
      {children}
      <Arrow />
    </a>
  )
}

export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-white underline decoration-white/35 underline-offset-[0.2em] hover:decoration-white"
    >
      {children}
    </a>
  )
}

/* The two small captions that sit at either side, as in the hero */
export function Captions({ left, right, className = '' }: { left: string; right: string; className?: string }) {
  return (
    <div className={`flex items-start justify-between gap-6 ${className}`} aria-hidden="true">
      <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[9rem]">{left}</span>
      <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[9rem] text-right">{right}</span>
    </div>
  )
}

export function Headline({
  id,
  lines,
  as: Tag = 'h2',
}: {
  id?: string
  lines: [ReactNode, ReactNode]
  as?: 'h1' | 'h2'
}) {
  return (
    <Tag
      id={id}
      className="font-display text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.12] tracking-[-0.02em] text-white font-extrabold shrink-0"
    >
      <span className="block sm:whitespace-nowrap">{lines[0]}</span>
      <span className="block sm:whitespace-nowrap">{lines[1]}</span>
    </Tag>
  )
}

/* Headline on the left, lede on the right, bottoms aligned: the hero's layout, reused */
export function Split({ heading, children }: { heading: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-end min-[900px]:justify-between gap-7 min-[900px]:gap-12">
      {heading}
      <div className="max-w-md min-[900px]:pb-1">{children}</div>
    </div>
  )
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="text-white/70 text-[16.5px] leading-[1.7] font-light">{children}</p>
}

/* Label in the left column, prose in the right */
export function Rows({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <dl className={`grid gap-11 ${className}`}>{children}</dl>
}

export function Row({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-2.5 md:gap-x-12 md:gap-y-3">
      <dt className="text-[13px] font-medium tracking-[0.04em] text-white/50 pt-1">{label}</dt>
      <dd className="max-w-[40rem] text-[16.5px] leading-[1.7] text-white/80 min-w-0 flex flex-col gap-[1em]">
        {children}
      </dd>
    </div>
  )
}

export function Small({ children }: { children: ReactNode }) {
  return <p className="text-[13px] leading-[1.6] text-white/50">{children}</p>
}

export type Figure = { value: ReactNode; label: string }

export function Figures({ items }: { items: Figure[] }) {
  const cols = items.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
  return (
    <ul className={`grid grid-cols-2 ${cols} gap-x-6 gap-y-7`}>
      {items.map((f, i) => (
        <li key={i}>
          <b className="block font-display font-extrabold text-[clamp(2.1rem,4.6vw,3.4rem)] leading-none tracking-[-0.02em] text-white tabular-nums [&_mark]:text-[0.55em] [&_mark]:font-medium [&_mark]:tracking-normal">
            {f.value}
          </b>
          <span className="block mt-2.5 text-[13px] leading-normal text-white/60">{f.label}</span>
        </li>
      ))}
    </ul>
  )
}

export function Caption({ children, className = 'mt-3' }: { children: ReactNode; className?: string }) {
  return <figcaption className={`${className} text-[13px] leading-normal text-white/50`}>{children}</figcaption>
}

export function Wrap({ children, className = '', id, labelledBy }: { children: ReactNode; className?: string; id?: string; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`max-w-[calc(80rem+6rem)] mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </section>
  )
}
