import WatchTalk from './TalkModal'
import { Caption, Headline, Label, Lede, Split, Wrap } from './ui'
import { asset } from '../release'

type Item = { title: string; detail: string; tbd?: boolean }

/* Two lanes over the same four years: what Yibo built, and the economics he did away from a screen */
const years: { year: string; width: number; built: Item[]; studied: Item[] }[] = [
  {
    year: '2023',
    width: 1,
    built: [{ title: 'HolidayHelperAI', detail: 'Led a team of five, grade 9.' }],
    studied: [],
  },
  {
    year: '2024',
    width: 1,
    built: [{ title: 'SoundSplit', detail: 'On the App Store, August.' }],
    studied: [],
  },
  {
    year: '2025',
    width: 1.35,
    built: [
      { title: 'Crave Deals', detail: 'The business plan.' },
      { title: 'Dermat AI', detail: 'On the App Store, August.' },
    ],
    studied: [{ title: 'FBLA, 3rd in the nation', detail: 'Business Plan Event, after 3rd in Maryland.' }],
  },
  {
    year: '2026',
    width: 2.1,
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

        {/* wide screens: one axis of years, what I built above it and what I studied below it. Busier years get
            wider columns, and 2026's five items sit in two columns, so neither half of the chart runs long. */}
        <div className="hidden md:grid gap-x-4" style={{ gridTemplateColumns: years.map((y) => `${y.width}fr`).join(' ') }}>
          {years.map((y) => (
            <ul key={`b-${y.year}`} className="flex flex-col justify-end gap-2 pb-6 min-w-0">
              {y.built.map((it) => (
                <Chip key={it.title} item={it} lane="built" />
              ))}
            </ul>
          ))}
          {years.map((y, i) => (
            <div key={`a-${y.year}`} className="relative flex items-center h-12" aria-hidden="true">
              <span className={`absolute left-0 top-1/2 h-px bg-white/30 ${i === years.length - 1 ? 'right-0' : '-right-4'}`} />
              <span className="relative size-2.5 rounded-full bg-accent" />
              <span className="relative ml-2 pr-3 bg-panel font-display font-extrabold text-[clamp(1.4rem,2.2vw,1.85rem)] leading-none text-white tabular-nums">
                {y.year}
              </span>
            </div>
          ))}
          {years.map((y) => (
            <ul
              key={`s-${y.year}`}
              className={`grid gap-2 pt-6 content-start min-w-0 ${y.studied.length > 2 ? 'grid-cols-2' : ''}`}
            >
              {y.studied.map((it, i) => (
                <Chip
                  key={it.title}
                  item={it}
                  lane="studied"
                  /* in two columns, an odd last item spans both rather than leaving a gap */
                  className={y.studied.length > 2 && y.studied.length % 2 === 1 && i === y.studied.length - 1 ? 'col-span-2' : ''}
                />
              ))}
            </ul>
          ))}
        </div>

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
