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

/* Small monochrome marks for where an external link goes: a website, the App Store or Google Play */
function LinkIcon({ href }: { href: string }) {
  const common = { width: 14, height: 14, viewBox: '0 0 24 24', 'aria-hidden': true, className: 'shrink-0' } as const
  if (href.includes('apps.apple.com'))
    return (
      <svg {...common} fill="currentColor">
        <path d="M16.37 12.79c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.39-3.69zM14.1 6.04c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28z" />
      </svg>
    )
  if (href.includes('youtube.com') || href.includes('youtu.be'))
    return (
      <svg {...common} fill="currentColor">
        <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    )
  if (href.includes('play.google.com'))
    return (
      <svg {...common} fill="currentColor">
        <path d="M4.2 2.3a1.5 1.5 0 0 0-.45 1.1v17.2c0 .44.17.83.45 1.1l9.55-9.7L4.2 2.3zm10.75 8.5 2.7-2.75L6.2 1.6a1.5 1.5 0 0 0-1.1-.2l9.85 9.4zm0 2.4-9.85 9.4c.36.08.75.03 1.1-.17l11.45-6.48-2.7-2.75zm3.98-3.88-3.03 3.08 3.03 3.08 2.68-1.52c.9-.5.9-1.6 0-2.1l-2.68-1.54z" />
      </svg>
    )
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M21.17 8H12M3.95 6.06 8.54 14M10.88 21.94 15.46 14" />
    </svg>
  )
}

export function MoreLink({ href, children, compact = false }: { href: string; children: ReactNode; compact?: boolean }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200"
    >
      {external && <LinkIcon href={href} />}
      {children}
      {compact ? (
        <span className="hidden sm:inline-flex">
          <Arrow />
        </span>
      ) : (
        <Arrow />
      )}
    </a>
  )
}

/* The two small captions that sit at either side, as in the hero */
export function Captions({ left, right, className = '' }: { left: string; right: string; className?: string }) {
  return (
    <div className={`flex items-start justify-between gap-6 ${className}`} aria-hidden="true">
      {/* one line each from small tablets up; on phones they may wrap to keep both sides apart */}
      <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[48%] sm:max-w-none sm:whitespace-nowrap">{left}</span>
      <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[48%] sm:max-w-none sm:whitespace-nowrap text-right">{right}</span>
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
