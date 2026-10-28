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

/* The two small captions that sit at either side, as in the hero */
export function Captions({ left, right, className = '' }: { left: string; right: string; className?: string }) {
  return (
    <div className={`flex items-start justify-between gap-6 ${className}`} aria-hidden="true">
      <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[9rem]">{left}</span>
      <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[9rem] text-right">{right}</span>
    </div>
  )
}

export function Headline({ id, lines }: { id?: string; lines: [ReactNode, ReactNode] }) {
  return (
    <h2
      id={id}
      className="font-display text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.12] tracking-[-0.02em] text-white font-extrabold shrink-0"
    >
      <span className="block sm:whitespace-nowrap">{lines[0]}</span>
      <span className="block sm:whitespace-nowrap">{lines[1]}</span>
    </h2>
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
  return <p className="text-white/70 text-[16px] leading-[1.7] font-light">{children}</p>
}

/* Small monospaced label, used for chart titles, axis labels and figure keys */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[11px] uppercase tracking-[0.12em] text-white/50 ${className}`}>{children}</span>
  )
}

export function Caption({ children, className = 'mt-3' }: { children: ReactNode; className?: string }) {
  return <figcaption className={`${className} text-[13px] leading-normal text-white/50`}>{children}</figcaption>
}

/* A chart with its title above and its source below */
export function ChartFrame({
  title,
  caption,
  children,
  className = '',
}: {
  title: string
  caption?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <figure className={`min-w-0 flex flex-col bg-panel p-6 md:p-8 ${className}`}>
      <Label className="mb-6 block">{title}</Label>
      <div className="flex-1 min-w-0">{children}</div>
      {caption && <Caption className="mt-6">{caption}</Caption>}
    </figure>
  )
}

export function Wrap({
  children,
  className = '',
  id,
  labelledBy,
}: {
  children: ReactNode
  className?: string
  id?: string
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`max-w-[calc(80rem+6rem)] mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </section>
  )
}
