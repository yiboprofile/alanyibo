import WatchTalk from './TalkModal'
import { Caption, Headline, Label, Lede, Split, Wrap } from './ui'
import { asset } from '../release'

type Item = { title: string; detail: string; tbd?: boolean }

/* Two lanes over the same four years: what Yibo built, and the economics he did away from a screen */
const years: { year: string; built: Item[]; studied: Item[] }[] = [
  {
    year: '2023',
    built: [{ title: 'HolidayHelperAI', detail: 'Led a team of five, grade 9.' }],
    studied: [],
  },
  {
    year: '2024',
    built: [{ title: 'SoundSplit', detail: 'On the App Store, August.' }],
    studied: [],
  },
  {
    year: '2025',
    built: [
      { title: 'Crave Deals', detail: 'The business plan.' },
      { title: 'Dermat AI', detail: 'On the App Store, August.' },
    ],
    studied: [{ title: 'FBLA, 3rd in the nation', detail: 'Business Plan Event, after 3rd in Maryland.' }],
  },
  {
    year: '2026',
    built: [],
    studied: [
      { title: 'Economics Challenge, 1st (state)', detail: 'One of six chosen from just under 100.' },
      { title: 'Wharton LBW', detail: 'One of just over 100 accepted to session one.' },
      { title: 'TEDxSCA Youth', detail: 'A talk: Is Gen-Z Cooked?' },
      { title: 'SCISS startup program', detail: 'Best Presentation and Best Team.' },
      { title: 'National Merit Semifinalist', detail: '' },
    ],
  },
]

function Chip({ item, lane, className = '' }: { item: Item; lane: 'built' | 'studied'; className?: string }) {
  return (
    <li
      className={`px-3.5 py-3 ${className} ${
        lane === 'built' ? 'bg-white text-[#0b1210]' : 'border border-accent/50 text-white'
      } ${item.tbd ? 'outline outline-1 outline-dashed outline-offset-2 outline-mark-ink/50' : ''}`}
    >
      <span className="block text-[14px] font-semibold leading-snug">{item.title}</span>
      {item.detail && (
        <span className={`block mt-0.5 text-[12.5px] leading-snug ${lane === 'built' ? 'text-black/60' : 'text-white/55'}`}>
          {item.detail}
        </span>
      )}
    </li>
  )
}

const notes: { title: string; body: string }[] = [
  {
    title: 'Economics Challenge, 1st place',
    body: 'Months of FOMC press conferences, housing market conditions and administrative actions. Each of us played a world figure; I chose former UK Prime Minister Keir Starmer because I knew little about him, and argued his policy recommendations before economics professors at Mount St. Mary’s University.',
  },
  {
    title: 'Wharton, Leadership in the Business World',
    body: 'One of just over 100 students accepted to session one. Three weeks of Harvard Business School cases with Wharton faculty; my team built and presented a full case on Chipotle’s expansion into Asia.',
  },
]

/* The talk itself, beside the photo of its slide */
const talk = {
  title: 'TEDxSCA Youth',
  body: [
    '“Is Gen-Z Cooked?”, to an audience of 100. Published on the official TEDx Talks channel on October 19, 2026, with 577 views by the end of the month.',
    'People ask that question about my generation a lot. My answer was no. Gen Z has more tools than any generation before it for turning an idea into something real, and that gives us a chance and a responsibility to build the future we say we want.',
  ],
}

/* year tiles: each year is a box with its cards inside */
function Tile({ y, cols = 1, className = '' }: { y: (typeof years)[number]; cols?: number; className?: string }) {
  const items = [...y.built.map((it) => ({ it, lane: 'built' as const })), ...y.studied.map((it) => ({ it, lane: 'studied' as const }))]
  return (
    <div className={`border border-white/10 p-5 flex flex-col gap-4 min-w-0 ${className}`}>
      <span className="font-display font-extrabold text-[clamp(1.4rem,2.2vw,1.85rem)] leading-none text-white tabular-nums">{y.year}</span>
      <ul className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {items.map(({ it, lane }, i) => (
          <Chip
            key={it.title}
            item={it}
            lane={lane}
            className={cols > 1 && items.length % cols === 1 && i === items.length - 1 ? 'col-span-full' : ''}
          />
        ))}
      </ul>
    </div>
  )
}

/* wide screens: one tile per year, sized by how much happened that year, so the block stays square */
function TimelineWide() {
  const [y23, y24, y25, y26] = years
  return (
    <div className="hidden md:grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.7fr)] grid-rows-[auto_1fr] gap-3">
      <Tile y={y23} />
      <Tile y={y25} className="row-span-2" />
      <Tile y={y26} cols={2} className="row-span-2" />
      <Tile y={y24} />
    </div>
  )
}

export default function About() {
  return (
    <Wrap id="about" labelledBy="h-about" tone="deep" className="pt-[clamp(72px,8vw,112px)]">
      <Split heading={<Headline id="h-about" lines={['Economics,', 'without an app.']} />}>
        <Lede>
          Urbana High School, Frederick, Maryland &middot; Class of 2027. Economics is what I want to study, and my
          products are where I try out what I learn.
        </Lede>
      </Split>

      {/* the four-year timeline */}
      <div className="mt-[clamp(56px,6vw,88px)] bg-panel p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2">
            <span className="size-3 bg-white" aria-hidden="true" />
            <Label>Built</Label>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-3 border border-accent" aria-hidden="true" />
            <Label>Studied and argued</Label>
          </span>
        </div>

        <TimelineWide />

        {/* phones: the same years down one line */}
        <ol className="md:hidden grid gap-8 border-l border-white/25 pl-5">
          {years.map((y) => (
            <li key={y.year} className="relative min-w-0">
              <span className="absolute -left-[25px] top-2 size-2.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="block font-display font-extrabold text-[1.6rem] leading-none text-white tabular-nums">{y.year}</span>
              <ul className="mt-4 grid gap-2">
                {y.built.map((it) => (
                  <Chip key={it.title} item={it} lane="built" />
                ))}
                {y.studied.map((it) => (
                  <Chip key={it.title} item={it} lane="studied" />
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {/* two of the 2026 items, in a little more detail; the talk gets its own row below */}
      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        {notes.map((n) => (
          <article key={n.title} className="bg-panel p-6 md:p-8">
            <h3 className="font-display font-bold text-[18px] leading-snug text-white">{n.title}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.65] text-white/65">{n.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <figure className="min-w-0">
          <img src={asset('/media/tedx-open.webp')} alt="Yibo on the TEDxSCA Youth stage, arms open to the audience, with a slide quoting Jalen Brunson" width={1280} height={720} loading="lazy" className="w-full h-auto" />
          <Caption>TEDxSCA Youth, 2026.</Caption>
        </figure>
        <article className="bg-panel p-6 md:p-8 flex flex-col">
          <h3 className="font-display font-bold text-[18px] leading-snug text-white">{talk.title}</h3>
          {talk.body.map((t) => (
            <p key={t} className="mt-2 first-of-type:text-white/80 text-[14.5px] leading-[1.65] text-white/65">
              {t}
            </p>
          ))}
          <div className="mt-6 lg:mt-auto lg:pt-6">
            <WatchTalk />
          </div>
        </article>
      </div>
    </Wrap>
  )
}
