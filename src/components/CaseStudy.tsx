import type { ReactNode } from 'react'
import { Caption, Captions, Headline, Lede, MoreLink, Row, Rows, Split, Wrap } from './ui'

type Image = { src: string; alt: string; width: number; height: number; caption: ReactNode; position?: string }

export type Case = {
  id: string
  name: string
  captions: [string, string]
  title: [string, string]
  lede: ReactNode
  link: { href: string; label: string }
  /* a website screenshot sits wide; a phone screen sits narrow */
  product: Image & { kind: 'shot' | 'phone' }
  photo: Image
  rows: { label: string; body: ReactNode }[]
}

function ProductFrame({ img }: { img: Case['product'] }) {
  const phone = img.kind === 'phone'
  return (
    <figure className="min-w-0">
      <div
        className={`bg-panel overflow-hidden flex items-center justify-center md:h-[clamp(320px,34vw,500px)] ${
          phone ? 'px-5 py-7' : 'p-5 md:p-[clamp(20px,2.4vw,36px)]'
        }`}
      >
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
          className={
            phone
              ? 'w-auto max-w-full max-h-[68svh] md:max-h-full rounded-[18px]'
              : 'w-full h-auto md:w-auto md:max-h-full object-contain'
          }
        />
      </div>
      <Caption>{img.caption}</Caption>
    </figure>
  )
}

function PhotoFrame({ img }: { img: Image }) {
  return (
    <figure className="min-w-0">
      <div className="bg-panel overflow-hidden aspect-[4/3] md:aspect-auto md:h-[clamp(320px,34vw,500px)]">
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ objectPosition: img.position }}
        />
      </div>
      <Caption>{img.caption}</Caption>
    </figure>
  )
}

export default function CaseStudy({ c }: { c: Case }) {
  const phone = c.product.kind === 'phone'
  return (
    <Wrap id={c.id} labelledBy={`h-${c.id}`} className="pt-[clamp(96px,10vw,144px)] scroll-mt-6">
      <Captions left={c.captions[0]} right={c.captions[1]} className="mb-[clamp(48px,6vw,88px)]" />

      <Split heading={<Headline id={`h-${c.id}`} lines={c.title} />}>
        <Lede>{c.lede}</Lede>
        <div className="mt-5">
          <MoreLink href={c.link.href}>{c.link.label}</MoreLink>
        </div>
      </Split>

      <div
        className={`grid grid-cols-1 gap-x-3 gap-y-7 mt-[clamp(56px,6vw,88px)] ${
          phone ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]' : 'md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]'
        }`}
      >
        <ProductFrame img={c.product} />
        <PhotoFrame img={c.photo} />
      </div>

      <Rows className="mt-[clamp(64px,7vw,104px)]">
        {c.rows.map((r) => (
          <Row key={r.label} label={r.label}>
            {r.body}
          </Row>
        ))}
      </Rows>
    </Wrap>
  )
}
