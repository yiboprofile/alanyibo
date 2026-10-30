import { useEffect, useRef, useState } from 'react'
import { RELEASE, asset } from '../release'
import { Caption, Captions, Headline, Label, Lede, Split, Tbd, Wrap } from './ui'

/* One dot is one person, everywhere in this section. */

const ROOM = 400 // FBLA chapter now
const JOINED = 150 // FBLA chapter when Yibo joined

/* A fixed shuffle, so the room fills in scattered seats rather than row by row, and the same way on every visit */
function seatOrder(n: number) {
  const order = Array.from({ length: n }, (_, i) => i)
  let seed = 7
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  // the first seat to light is near the middle of the room
  const centre = order.indexOf(Math.floor(n / 2) + 10)
  ;[order[0], order[centre]] = [order[centre], order[0]]
  return order
}

const stages = [
  { count: 1, label: 'One person goes first.' },
  { count: JOINED, label: 'About 150 members when I joined.' },
  { count: ROOM, label: 'About 400 now.' },
]

function Room() {
  const host = useRef<HTMLDivElement>(null)
  const [stage, setStage] = useState(-1)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const el = host.current
    if (!el) return
    const dots = [...el.querySelectorAll<HTMLElement>('[data-seat]')]
    const order = seatOrder(ROOM)
    const light = (n: number) => {
      for (let k = 0; k < ROOM; k++) dots[order[k]].dataset.on = k === 0 ? 'first' : k < n ? 'on' : ''
      setShown(n)
    }
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const timers: number[] = []
    let raf = 0
    const run = () => {
      if (reduce) { light(ROOM); setStage(2); return }
      setStage(0)
      light(1)
      timers.push(window.setTimeout(() => { setStage(1); light(JOINED) }, 1100))
      timers.push(window.setTimeout(() => {
        setStage(2)
        const t0 = performance.now()
        const grow = (t: number) => {
          const p = Math.min(1, (t - t0) / 2200)
          const eased = 1 - Math.pow(1 - p, 3)
          light(Math.round(JOINED + (ROOM - JOINED) * eased))
          if (p < 1) raf = requestAnimationFrame(grow)
        }
        raf = requestAnimationFrame(grow)
      }, 2600))
    }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect() } }, { threshold: 0.35 })
    io.observe(el)
    return () => { io.disconnect(); timers.forEach(clearTimeout); cancelAnimationFrame(raf) }
  }, [])

  return (
    <figure className="bg-panel p-6 md:p-10" aria-label="Urbana FBLA chapter: about 150 members when Yibo joined, about 400 now">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:items-end">
        <div
          ref={host}
          aria-hidden="true"
          className="grid gap-[5px] sm:gap-[6px] grid-cols-[repeat(20,minmax(0,1fr))] lg:grid-cols-[repeat(40,minmax(0,1fr))] max-w-[640px] lg:max-w-none"
        >
          {Array.from({ length: ROOM }, (_, i) => (
            <span
              key={i}
              data-seat
              className="aspect-square rounded-full bg-white/[0.08] transition-[background-color,transform] duration-300 data-[on=on]:bg-white data-[on=first]:bg-accent data-[on=first]:scale-125"
            />
          ))}
        </div>
        <div>
          <span className="block font-display font-extrabold text-[clamp(3.4rem,7vw,5.5rem)] leading-none tracking-[-0.03em] text-white tabular-nums">
            {shown || '~400'}
          </span>
          <span className="block mt-3 min-h-[3rem] text-[16px] leading-snug text-white/75" aria-live="polite">
            {stage >= 0 ? stages[stage].label : 'Members of the Urbana FBLA chapter.'}
          </span>
          <ol className="mt-5 grid gap-1.5" aria-hidden="true">
            {stages.map((s, i) => (
              <li key={s.label} className={`h-0.5 transition-colors duration-500 ${stage >= i ? 'bg-accent' : 'bg-white/15'}`} />
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="mt-8 grid gap-1 text-[13.5px] leading-[1.6] text-white/55 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8">
        <span>
          <b className="font-medium text-white/85">Urbana FBLA chapter.</b> Team lead 2025–26, vice president 2026–27, one of six
          on the Maryland state council. More than 60 members went to nationals, the 8th largest chapter there.{' '}
          <Tbd>[Confirm: “helped grow”, and my part in it.]</Tbd>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40 self-end">One dot, one person</span>
      </figcaption>
    </figure>
  )
}

/* The other groups, each drawn as people, each to the same dot size */
const groups = [
  { count: 90, before: 35, plus: true, title: 'Computer Science Club', what: '35 members when I became co-president, 90+ now. Nearly 30 entered USACO, MITIT and CALICO.' },
  { count: 50, plus: true, title: 'SCISS startup program', what: 'Participants in the two-week program where I was a student counselor, while competing in it. My team won Best Presentation and Best Team.' },
  { count: 40, dashed: 5, title: 'DreamCollegeAI', what: 'In grade 10 I managed 35–40 interns in marketing, quality control and software. Our posts got close to 300,000 views.' },
  { count: 10, plus: true, title: 'Urbana SAT Tutoring', what: 'Clients so far. We hired three tutors as it grew.' },
]

function Group({ g }: { g: (typeof groups)[number] }) {
  return (
    <article className="bg-panel p-6 md:p-8 flex flex-col gap-5">
      <div className="flex flex-wrap gap-[5px]" aria-hidden="true">
        {Array.from({ length: g.count }, (_, i) => {
          const dashed = g.dashed && i >= g.count - g.dashed
          const early = g.before !== undefined && i < g.before
          return (
            <span
              key={i}
              className={`size-[9px] rounded-full ${dashed ? 'border border-dashed border-white/50' : early ? 'bg-white/45' : 'bg-white'}`}
            />
          )
        })}
        {g.plus && <span className="text-[11px] leading-[9px] text-white/60 font-mono">+</span>}
      </div>
      <div>
        <h3 className="font-display font-bold text-[18px] leading-snug text-white">
          {g.title} <span className="font-mono text-[13px] font-normal text-accent tabular-nums">{g.before ? `${g.before} → ${g.count}${g.plus ? '+' : ''}` : g.dashed ? `${g.count - g.dashed}–${g.count}` : `${g.count}${g.plus ? '+' : ''}`}</span>
        </h3>
        <p className="mt-1.5 text-[14px] leading-[1.6] text-white/60">{g.what}</p>
      </div>
    </article>
  )
}

export default function People() {
  return (
    <Wrap id="people" labelledBy="h-people" className="pt-[clamp(96px,10vw,144px)] scroll-mt-6">
      <Captions left="Members, students," right="interns, clients." className="mb-[clamp(40px,5vw,72px)]" />

      <Split heading={<Headline id="h-people" lines={['Every room starts', 'with one person.']} />}>
        <Lede>
          Before anything I built had a customer, I learned how to fill a room: a chapter, a club, a cohort of
          interns. <Tbd>[In my own words: what I did to get the first ones in.]</Tbd>
        </Lede>
      </Split>

      <div className="mt-[clamp(48px,5vw,72px)] grid gap-3">
        <Room />
        <figure className="min-w-0">
          <img
            src={asset('/media/fbla-nlc-2026.webp')}
            alt="About sixty members of the Urbana FBLA chapter in matching orange shirts and conference badges, standing together in a convention center hall"
            width={1860}
            height={519}
            loading="lazy"
            className="w-full aspect-[16/9] sm:aspect-auto sm:h-auto object-cover"
          />
          <Caption>Our chapter at the FBLA National Leadership Conference, 2026.</Caption>
        </figure>
        <div className="grid gap-3 md:grid-cols-2">
          {groups.map((g) => (
            <Group key={g.title} g={g} />
          ))}
        </div>
        <p className="px-1 pt-2 text-[14px] leading-[1.6] text-white/55">
          <Label className="mr-3">Also</Label>
          Co-president of Students Demand Action, chosen by the outgoing officers; joined a Capitol advocacy visit for a
          gun-related bill that later passed.
        </p>

        {!RELEASE && (
        <aside className="todo mt-2 border border-dashed border-mark-ink/30 p-6 md:p-8" aria-label="Still to confirm">
          <Label className="text-mark-ink/80">Still to confirm</Label>
          <ul className="mt-4 grid gap-3 text-[14px] leading-[1.55] text-mark-ink/85">
            <li>Every count here, exactly as in the activity list.</li>
            <li>If DreamCollegeAI or Pathspark is connected to my family, say so, as the site already does for APIDEED LLC.</li>
          </ul>
        </aside>
        )}
      </div>
    </Wrap>
  )
}
