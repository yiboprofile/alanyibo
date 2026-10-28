import { Label, Tbd } from './ui'

/* ---------- CraveDeals ---------- */

const craveSteps = [
  { value: 'Plan', label: 'Written by three of us, FBLA, 2025', phase: 'judges' },
  { value: '3rd', label: 'in Maryland', phase: 'judges' },
  { value: '3rd', label: 'in the nation, Anaheim', phase: 'judges' },
  { value: <Tbd>[N]</Tbd>, label: 'restaurants approached', phase: 'market' },
  { value: '0', label: 'signed, 0 coupons redeemed', phase: 'market' },
] as const

/* Judged on paper, then tested on the street: the same plan, two very different scores */
export function JudgesThenMarket() {
  return (
    <div>
      <div className="hidden md:grid grid-cols-5 gap-4 mb-4">
        <Label className="col-span-3 border-b border-white/40 pb-2">Scored by judges</Label>
        <Label className="col-span-2 border-b border-dashed border-accent/60 pb-2 text-accent">Tested by the market</Label>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-5 gap-x-4">
        {craveSteps.map((s, i) => {
          const market = s.phase === 'market'
          return (
            <li key={i} className="relative grid grid-cols-[20px_minmax(0,1fr)] md:block gap-3 pb-6 md:pb-0">
              {/* the track: a line down the side on phones, across the top on wider screens */}
              <span
                aria-hidden="true"
                className={`absolute left-[5px] top-3 bottom-0 w-px md:hidden ${
                  i === craveSteps.length - 1 ? 'hidden' : i >= 2 ? 'border-l border-dashed border-accent/60' : 'bg-white/40'
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute top-[5px] left-0 -right-4 h-0 hidden ${
                  i === craveSteps.length - 1 ? '' : i >= 2 ? 'md:block border-t border-dashed border-accent/60' : 'md:block border-t border-white/40'
                }`}
              />
              <span
                aria-hidden="true"
                className={`relative z-10 mt-1.5 md:mt-0 block size-[11px] rounded-full ${
                  market ? 'border-2 border-accent bg-[#111a17]' : 'bg-white'
                }`}
              />
              <div className="md:mt-4">
                <span
                  className={`block font-display font-extrabold text-[clamp(1.8rem,3.4vw,2.6rem)] leading-none tracking-[-0.02em] tabular-nums ${
                    market ? 'text-accent' : 'text-white'
                  } [&_mark]:text-[0.5em] [&_mark]:font-medium`}
                >
                  {s.value}
                </span>
                <span className="block mt-2 text-[13px] leading-snug text-white/60">{s.label}</span>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/* The cold-start loop: each side waits for the other */
export function ColdStartLoop() {
  return (
    <svg viewBox="0 0 520 270" className="w-full h-auto" role="img" aria-labelledby="loop-t">
      <title id="loop-t">Diners wait for deals before they visit; restaurants wait for diners before they post deals.</title>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#8fcbb6" />
        </marker>
      </defs>

      <path d="M150,100 Q260,20 370,100" fill="none" stroke="#8fcbb6" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
      <path d="M370,170 Q260,250 150,170" fill="none" stroke="#8fcbb6" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
      <text x="260" y="34" textAnchor="middle" className="fill-white/60 font-mono text-[12px]">waits for deals</text>
      <text x="260" y="256" textAnchor="middle" className="fill-white/60 font-mono text-[12px]">waits for diners</text>

      <circle cx="100" cy="135" r="58" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" />
      <text x="100" y="131" textAnchor="middle" className="fill-white font-display font-bold text-[17px]">Diners</text>
      <text x="100" y="152" textAnchor="middle" className="fill-white/50 font-mono text-[11px]">won’t visit</text>

      <circle cx="420" cy="135" r="58" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" />
      <text x="420" y="131" textAnchor="middle" className="fill-white font-display font-bold text-[17px]">Restaurants</text>
      <text x="420" y="152" textAnchor="middle" className="fill-white/50 font-mono text-[11px]">won’t post</text>

      <rect x="214" y="116" width="92" height="38" fill="#0b1210" stroke="rgba(255,255,255,0.25)" strokeDasharray="3 3" />
      <text x="260" y="140" textAnchor="middle" className="fill-white/70 font-mono text-[11px]">crave.deals</text>
    </svg>
  )
}

/* ---------- HolidayHelperAI ---------- */

const tiers = [
  { name: 'Standard', month: 2, year: 20, paidMonths: 10 },
  { name: 'Premium', month: 4, year: 40, paidMonths: 10 },
  { name: 'Enterprise', month: 8.99, year: 80.99, paidMonths: 9 },
]

const features = [
  { name: 'Trip planner, AI assistant, journal', from: 0 },
  { name: 'Albums', from: 1 },
  { name: 'Event calendar', from: 2 },
]

const money = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`

/* One product with features taken away: what each tier adds, and how much more it costs */
export function TierLadder() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[300px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-[34%] sm:w-[38%]" />
            {tiers.map((t, i) => (
              <th key={t.name} className="pb-5 align-bottom font-normal">
                <span className="block font-display font-extrabold text-[clamp(1.2rem,3vw,2.2rem)] leading-none text-white tabular-nums">
                  {money(t.month)}
                </span>
                <span className="block mt-2 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.1em] text-white/50">
                  {t.name}
                </span>
                {/* how much more than the tier before */}
                <span className="block mt-1 h-4 font-mono text-[11px] text-accent tabular-nums">
                  {i > 0 && `×${(t.month / tiers[i - 1].month).toFixed(2).replace(/\.00$/, '')}`}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((f) => (
            <tr key={f.name} className="border-t border-line">
              <th scope="row" className="py-4 pr-3 text-[13px] sm:text-[14px] font-normal leading-snug text-white/70">
                {f.name}
              </th>
              {tiers.map((t, i) => (
                <td key={t.name} className="py-4">
                  {i >= f.from ? (
                    <span className={`block h-2.5 w-[70%] ${i === f.from && f.from > 0 ? 'bg-accent' : 'bg-white'}`} aria-label="Included" />
                  ) : (
                    <span className="block h-px w-[70%] bg-white/20" aria-label="Not included" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* A year's price, drawn as the months it costs out of the twelve it buys */
export function YearlyMonths() {
  return (
    <ul className="grid gap-6">
      {tiers.map((t) => (
        <li key={t.name}>
          <div className="flex items-baseline justify-between gap-4 mb-2.5">
            <span className="text-[14px] text-white/70">
              {t.name} <span className="text-white font-semibold tabular-nums">{money(t.year)}</span> a year
            </span>
            <span className="font-mono text-[11px] text-white/50 tabular-nums">
              pay {t.paidMonths}, get 12
            </span>
          </div>
          <div className="grid grid-cols-12 gap-1" aria-hidden="true">
            {Array.from({ length: 12 }, (_, m) => (
              <span key={m} className={`h-5 ${m < t.paidMonths ? 'bg-white' : 'border border-dashed border-accent'}`} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

/* ---------- SoundSplit ---------- */

const lanes = [
  { name: 'Song', a: 0.9, b: 0.3, c: 0.21, strong: true },
  { name: 'Vocals', a: 0.55, b: 1.1, c: 0.13, strong: false },
  { name: 'Drums', a: 1.7, b: 0.2, c: 0.47, strong: false },
  { name: 'Instruments', a: 0.32, b: 2.4, c: 0.09, strong: false },
]

/* One song in, three stems out, each on its own slider. Bar heights are illustrative. */
export function StemSplit() {
  const bars = 52
  const x0 = 120
  const step = 8.6
  return (
    <svg viewBox="0 0 580 250" className="w-full h-auto" role="img" aria-labelledby="stems-t">
      <title id="stems-t">A song separated into three tracks: vocals, drums and instruments.</title>
      {lanes.map((l, li) => {
        const cy = li === 0 ? 34 : 70 + li * 55
        return (
          <g key={l.name}>
            <text x="0" y={cy + 4} className={`font-mono text-[11px] ${l.strong ? 'fill-white' : 'fill-white/60'}`}>
              {l.name.toUpperCase()}
            </text>
            {Array.from({ length: bars }, (_, i) => {
              const h = 4 + 30 * Math.abs(Math.sin(i * l.a + l.b) * Math.cos(i * l.c))
              return (
                <rect
                  key={i}
                  x={x0 + i * step}
                  y={cy - h / 2}
                  width="4"
                  height={h}
                  rx="1"
                  fill={l.strong ? '#ffffff' : '#8fcbb6'}
                  fillOpacity={l.strong ? 0.9 : 0.75}
                />
              )
            })}
          </g>
        )
      })}
      <line x1={x0} y1="72" x2={x0 + bars * step - 4} y2="72" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 4" />
    </svg>
  )
}

const packs = [
  { name: 'Basic', price: 14.99 },
  { name: 'Standard', price: 34.99 },
  { name: 'Premium', price: 119.99 },
]

/* Three blocks of minutes, bars to one scale */
export function MinutePacks() {
  const top = packs[packs.length - 1].price
  return (
    <ul className="grid gap-5">
      {packs.map((p) => (
        <li key={p.name} className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">{p.name}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="block h-7 bg-white shrink-0" style={{ width: `${(p.price / top) * 75}%` }} />
              <span className="font-display font-bold text-[18px] text-white tabular-nums">${p.price}</span>
            </div>
            <span className="block mt-1.5 text-[12px] text-white/50">
              buys <Tbd>[N]</Tbd> minutes
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

/* ---------- ratings, drawn one mark per rating so the sample size is visible ---------- */

export function Ratings({ average, count, store }: { average: string; count: number; store: string }) {
  return (
    <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
      <span className="font-display font-extrabold text-[clamp(2.4rem,4.6vw,3.4rem)] leading-none text-white tabular-nums">
        {average}
      </span>
      <div className="pb-1">
        <div className="flex gap-1.5" aria-hidden="true">
          {Array.from({ length: count }, (_, i) => (
            <span key={i} className="size-3 rounded-full bg-accent" />
          ))}
        </div>
        <span className="block mt-2 text-[13px] text-white/50">
          from {count} rating{count === 1 ? '' : 's'} on the {store}
        </span>
      </div>
    </div>
  )
}

/* ---------- Dermat AI ---------- */

const goods = [
  { name: 'Search good', test: 'You can judge it before you buy.', example: 'a T-shirt' },
  { name: 'Experience good', test: 'You can judge it after you use it.', example: 'a restaurant meal' },
  { name: 'Trust good', test: 'You may never judge it yourself.', example: 'a diagnosis' },
]

/* Where a skin check sits among the three kinds of goods economists separate by when quality can be checked */
export function TrustScale() {
  return (
    <div>
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
        {goods.map((g, i) => {
          const here = i === goods.length - 1
          return (
            <li key={g.name} className="relative grid grid-cols-[20px_minmax(0,1fr)] md:block gap-3 pb-6 md:pb-0">
              <span
                aria-hidden="true"
                className={`absolute left-[5px] top-3 bottom-0 w-px bg-white/30 md:hidden ${here ? 'hidden' : ''}`}
              />
              <span aria-hidden="true" className="hidden md:block absolute left-0 right-0 top-[5px] h-px bg-white/30" />
              <span
                aria-hidden="true"
                className={`relative z-10 mt-1.5 md:mt-0 block size-[11px] rounded-full ${here ? 'bg-accent ring-4 ring-accent/25' : 'bg-white/70'}`}
              />
              <div className="md:mt-5 md:pr-6">
                <span className={`block font-display font-bold text-[18px] ${here ? 'text-accent' : 'text-white'}`}>{g.name}</span>
                <span className="block mt-1.5 text-[14px] leading-snug text-white/70">{g.test}</span>
                <span className="block mt-1 font-mono text-[11px] text-white/45">e.g. {g.example}</span>
                {here && (
                  <span className="inline-block mt-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] text-[#0b1210]">
                    A skin check sits here
                  </span>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
