import type { CSSProperties, ReactNode } from 'react'
import { RELEASE } from '../release'
import { Caption, Captions, Headline, Label, Lede, MoreLink, Wrap } from './ui'
import type { Tone } from './ui'

type Image = { src: string; alt: string; width: number; height: number; caption: ReactNode; position?: string }

export type Fact = { label: string; value: ReactNode; note?: ReactNode }

export type CaseProps = {
  id: string
  model: string
  captions: [string, string]
  title: [string, string]
  lede: ReactNode
  links: { href: string; label: string }[]
  facts: Fact[]
  /* the facts to publish while some review facts are still blanks; defaults to `facts` */
  releaseFacts?: Fact[]
  product?: Image & { kind: 'shot' | 'phone' }
  /* several phone screens side by side; when given, the photo shrinks to a small card beside them */
  screens?: Image[]
  photo?: Image
  team: ReactNode
  blanks: string[]
  /* the band behind the case; cases alternate so each reads as its own chapter */
  tone?: Tone
  children: ReactNode
}

function Facts({ facts }: { facts: Fact[] }) {
  return (
    <dl
      className="grid grid-cols-2 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))] border-t border-line"
      style={{ '--n': facts.length } as CSSProperties}
    >
      {facts.map((f, i) => (
        <div
          key={f.label}
          className={`min-w-0 py-5 pr-4 border-b border-line lg:border-b-0 ${i % 2 === 0 ? 'max-lg:pr-6' : 'max-lg:pl-6 max-lg:border-l'} ${
            i > 0 ? 'lg:pl-6 lg:border-l' : ''
          }`}
        >
          <dt>
            <Label>{f.label}</Label>
          </dt>
          <dd className="mt-2 font-display font-bold text-[clamp(1.15rem,1.6vw,1.375rem)] leading-[1.25] text-white tabular-nums">
            {f.value}
          </dd>
          {f.note && <dd className="mt-1 text-[13px] leading-snug text-white/50">{f.note}</dd>}
        </div>
      ))}
    </dl>
  )
}

function Media({ product, photo }: { product: NonNullable<CaseProps['product']>; photo: Image }) {
  const phone = product.kind === 'phone'
  return (
    <div
      className={`grid grid-cols-1 gap-x-3 gap-y-7 ${
        phone ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]' : 'md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]'
      }`}
    >
      <figure className="min-w-0">
        <div
          className={`bg-panel overflow-hidden flex items-center justify-center md:h-[clamp(300px,30vw,440px)] ${
            phone ? 'px-5 py-7' : 'p-5 md:p-[clamp(20px,2.4vw,36px)]'
          }`}
        >
          <img
            src={product.src}
            alt={product.alt}
            width={product.width}
            height={product.height}
            loading="lazy"
            className={
              phone
                ? 'w-auto max-w-full max-h-[60svh] md:max-h-full rounded-[18px]'
                : 'w-full h-auto md:w-auto md:max-h-full object-contain'
            }
          />
        </div>
        <Caption>{product.caption}</Caption>
      </figure>
      <figure className="min-w-0">
        <div className="bg-panel overflow-hidden aspect-[4/3] md:aspect-auto md:h-[clamp(300px,30vw,440px)]">
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ objectPosition: photo.position }}
          />
        </div>
        <Caption>{photo.caption}</Caption>
      </figure>
    </div>
  )
}

/* Phone screens in one row that fits the width on desktop (and scrolls sideways on phones);
   on wide screens the award sits beside them in a card of the same height, otherwise below */
function Screens({ screens, photo }: { screens: Image[]; photo?: Image }) {
  return (
    <div className="grid gap-x-2 gap-y-7 xl:grid-cols-[minmax(0,1fr)_minmax(0,21rem)]">
      <div
        className="min-w-0 flex gap-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:thin] lg:grid lg:overflow-visible"
        style={{ gridTemplateColumns: `repeat(${screens.length}, minmax(0, 1fr))` }}
      >
        {screens.map((s) => (
          <figure key={s.src} className="snap-start shrink-0 w-[min(11rem,42vw)] lg:w-auto min-w-0">
            <div className="bg-panel p-2 flex items-center justify-center">
              <img src={s.src} alt={s.alt} width={s.width} height={s.height} loading="lazy" className="w-full h-auto rounded-[12px]" />
            </div>
            <Caption>{s.caption}</Caption>
          </figure>
        ))}
      </div>
      {photo && (
        <figure className="min-w-0 max-w-[21rem] xl:max-w-none flex flex-col">
          <div className="bg-panel p-3 flex-1 flex items-center justify-center">
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              className="w-full h-auto object-contain"
              style={{ objectPosition: photo.position }}
            />
          </div>
          <Caption>{photo.caption}</Caption>
        </figure>
      )}
    </div>
  )
}

/* What Yibo still has to write for this case, gathered in one place instead of scattered through the text */
function Blanks({ items }: { items: string[] }) {
  return (
    <aside className="todo border border-dashed border-mark-ink/30 p-6 md:p-8" aria-label="Still to write">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
        <Label className="text-mark-ink/80">Still to write</Label>
        <span className="font-mono text-[11px] text-mark-ink/60 tabular-nums">{items.length} blanks</span>
      </div>
      <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
        {items.map((b) => (
          <li key={b} className="grid grid-cols-[14px_minmax(0,1fr)] gap-3 text-[14px] leading-[1.55] text-mark-ink/85">
            <span className="mt-[5px] size-3.5 border border-mark-ink/50" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default function CaseShell(c: CaseProps) {
  return (
    <Wrap id={c.id} labelledBy={`h-${c.id}`} tone={c.tone} className="pt-[clamp(72px,8vw,112px)] scroll-mt-16">
      <Captions left={c.captions[0]} right={c.captions[1]} className="mb-[clamp(40px,5vw,72px)]" />

      {/* a wider text column than the other sections, so a case's longer intro stays about as tall as its headline */}
      <div className="grid gap-7 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] min-[900px]:items-end min-[900px]:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 mb-5 rounded-full border border-accent/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {c.model}
          </span>
          <Headline id={`h-${c.id}`} lines={c.title} />
        </div>
        <div className="max-w-xl min-[900px]:pb-1">
          <Lede>{c.lede}</Lede>
          {/* the links stay on one line: on phones the "On the" and the arrows drop, the icons say where each goes */}
          <div className="mt-5 flex flex-nowrap gap-x-2.5 whitespace-nowrap max-sm:[&_a]:text-[12.5px]">
            {c.links.map((l) => {
              const store = l.label.match(/^(On (?:the )?)(.*)$/)
              return (
                <MoreLink key={l.href} href={l.href} compact>
                  {store ? (
                    <span>
                      <span className="hidden sm:inline">{store[1]}</span>
                      {store[2]}
                    </span>
                  ) : (
                    l.label
                  )}
                </MoreLink>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-[clamp(40px,5vw,64px)]">
        <Facts facts={RELEASE && c.releaseFacts ? c.releaseFacts : c.facts} />
      </div>

      <div className="mt-3 grid gap-3">{c.children}</div>

      {c.screens ? (
        <div className="mt-[clamp(48px,5vw,72px)]">
          <Screens screens={c.screens} photo={c.photo} />
        </div>
      ) : (
        c.product &&
        c.photo && (
          <div className="mt-[clamp(48px,5vw,72px)]">
            <Media product={c.product} photo={c.photo} />
          </div>
        )
      )}

      <p className="mt-8 text-[14.5px] leading-[1.7] text-white/60">
        <span className="text-white/40">Team: </span>
        {c.team}
      </p>

      {!RELEASE && (
        <div className="mt-8">
          <Blanks items={c.blanks} />
        </div>
      )}
    </Wrap>
  )
}
