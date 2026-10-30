import { playNow, playPeak, playWeekly } from '../data/dermat'
import { Label, Tbd } from './ui'

/* ---------- CraveDeals ---------- */

const craveSteps = [
  { value: 'Plan', label: 'Written as co-founder and COO, FBLA, 2025', phase: 'judges' },
  { value: '3rd', label: 'in Maryland', phase: 'judges' },
  { value: '3rd', label: 'in the nation, Anaheim', phase: 'judges' },
  { value: <Tbd release="Several">[40+]</Tbd>, label: 'restaurants pitched, plus VCs and investors', phase: 'market' },
  { value: <Tbd release="0">[0]</Tbd>, label: 'restaurants signed so far', phase: 'market' },
] as const

/* Judged on paper, then tested on the street: the same plan, two very different scores */
export function JudgesThenMarket() {
  return (
    <div>
      <div className="hidden md:grid grid-cols-5 gap-4 mb-4">
        <Label className="col-span-3 border-b border-white/40 pb-2">Scored by judges</Label>
        <Label className="col-span-2 border-b border-dashed border-accent/60 pb-2 text-accent">Tested by the market, still going</Label>
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

/* The three blocks as sold on the App Store, the minutes each buys (from the in-app purchase screen),
   and how many of the 9 buyers chose each */
const packs = [
  { name: 'Basic', price: 14.99, minutes: 50, buyers: 4 },
  { name: 'Standard', price: 34.99, minutes: 150, buyers: 3 },
  { name: 'Premium', price: 119.99, minutes: 800, buyers: 2 },
]
const usd = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

/* Three blocks of minutes: price to one scale, what a minute costs, and who bought which */
export function MinutePacks() {
  const top = packs[packs.length - 1].price
  const revenue = packs.reduce((s, p) => s + p.price * p.buyers, 0)
  const premium = packs[packs.length - 1]
  return (
    <div>
      <ul className="grid gap-5">
        {packs.map((p) => (
          <li key={p.name} className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">{p.name}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="block h-7 bg-white shrink-0" style={{ width: `${(p.price / top) * 62}%` }} />
                <span className="font-display font-bold text-[18px] text-white tabular-nums">${p.price}</span>
              </div>
              <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-white/55 tabular-nums">
                <span>
                  {p.minutes} minutes &middot; <span className="text-accent">${(p.price / p.minutes).toFixed(2)} a minute</span>
                </span>
                <span className="inline-flex items-center gap-1.5" aria-label={`${p.buyers} buyers`}>
                  {Array.from({ length: p.buyers }, (_, k) => (
                    <i key={k} className="size-2 rounded-full bg-accent" aria-hidden="true" />
                  ))}
                  <span>{p.buyers} bought it</span>
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[13.5px] leading-snug text-white/65">
        The more minutes you buy, the less each one costs: from ${(packs[0].price / packs[0].minutes).toFixed(2)} down to $
        {(premium.price / premium.minutes).toFixed(2)}. Buyers spent {usd(revenue)} in all.
      </p>
    </div>
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

/* ---------- Urbana SAT Tutoring ---------- */

/* The best result so far, drawn on the SAT's own 400–1600 scale so the gain is not exaggerated */
export function ScoreGain() {
  const lo = 400
  const hi = 1600
  const pct = (v: number) => ((v - lo) / (hi - lo)) * 100
  const from = 1220
  const to = 1510
  return (
    <div>
      <div className="relative h-14">
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/20" aria-hidden="true" />
        <div
          className="absolute top-1/2 h-2 -translate-y-1/2 bg-accent"
          style={{ left: `${pct(from)}%`, width: `${pct(to) - pct(from)}%` }}
          aria-hidden="true"
        />
        {[
          { v: from, label: 'Before', strong: false },
          { v: to, label: 'After', strong: true },
        ].map((m) => (
          <div key={m.v} className="absolute top-0 -translate-x-1/2 text-center" style={{ left: `${pct(m.v)}%` }}>
            <span className={`block font-display font-bold text-[18px] tabular-nums ${m.strong ? 'text-white' : 'text-white/70'}`}>{m.v}</span>
            <span className={`mx-auto mt-1 block size-3 rounded-full ${m.strong ? 'bg-white' : 'border-2 border-white/70 bg-panel'}`} />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[11px] text-white/45 tabular-nums">
        <span>400</span>
        <span>1000</span>
        <span>1600</span>
      </div>
      <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display font-extrabold text-[clamp(2.4rem,4.6vw,3.4rem)] leading-none text-accent tabular-nums">+280</span>
        <span className="text-[14px] text-white/60">points, the largest gain so far</span>
      </p>
    </div>
  )
}

/* How the business grew: the founders, then three tutors hired to keep up with clients */
export function TutorTeam() {
  return (
    <div className="grid gap-6">
      <div>
        <div className="flex flex-wrap gap-2" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="size-6 rounded-full bg-white" />
          ))}
          <span className="size-6 rounded-full border border-dashed border-white/50" />
        </div>
        <span className="block mt-2.5 text-[13px] text-white/60">10+ clients, each with a weekly or monthly plan</span>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2" aria-hidden="true">
          <span className="h-6 px-2.5 grid place-items-center rounded-full border border-accent text-accent font-mono text-[11px]">founders</span>
          <span className="font-mono text-[11px] text-white/40">+</span>
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className="size-6 rounded-full bg-accent" />
          ))}
        </div>
        <span className="block mt-2.5 text-[13px] text-white/60">3 tutors hired once the founders could not take more students</span>
      </div>
    </div>
  )
}

/* ---------- Dermat AI: who found it, who kept it, where they are ---------- */

type Month = { month: string; appStore: number; googlePlay: number }

/* Downloads by month from both stores, stacked, on one scale; `top` and `step` set the gridlines */
export function DownloadsByMonth({
  months,
  appStoreTotal,
  googlePlayTotal,
  top,
  step,
}: {
  months: Month[]
  appStoreTotal: number
  googlePlayTotal: number
  top: number
  step: number
}) {
  const sum = (m: Month) => m.appStore + m.googlePlay
  const peak = months.reduce((a, b) => (sum(b) > sum(a) ? b : a))
  const total = appStoreTotal + googlePlayTotal
  const lines = Array.from({ length: top / step + 1 }, (_, i) => i * step)
  const cols = { gridTemplateColumns: `repeat(${months.length}, minmax(0, 1fr))` }
  const every = months.length > 18 ? 6 : 3
  return (
    <div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4 text-[12.5px] text-white/60">
        <span className="inline-flex items-center gap-2"><i className="size-2.5 bg-white/85" aria-hidden="true" />App Store</span>
        <span className="inline-flex items-center gap-2"><i className="size-2.5 bg-accent" aria-hidden="true" />Google Play</span>
      </div>
      <div className="relative h-48 ml-8">
        {lines.map((v) => (
          <div key={v} className="absolute inset-x-0 border-t border-white/10" style={{ bottom: `${(v / top) * 100}%` }}>
            <span className="absolute -left-8 -translate-y-1/2 font-mono text-[10.5px] text-white/40 tabular-nums">{v}</span>
          </div>
        ))}
        <div className="absolute inset-0 grid items-end gap-[2px] sm:gap-1" style={cols}>
          {months.map((m) => (
            <div key={m.month} className="relative h-full flex flex-col justify-end" title={`${m.month}: ${m.appStore} App Store, ${m.googlePlay} Google Play`}>
              {m === peak && (
                <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[11px] text-white tabular-nums whitespace-nowrap" style={{ bottom: `calc(${(sum(m) / top) * 100}% + 4px)` }}>
                  {sum(m)}
                </span>
              )}
              <span className="block w-full bg-accent" style={{ height: `${(m.googlePlay / top) * 100}%` }} />
              <span className="block w-full bg-white/85" style={{ height: `${(m.appStore / top) * 100}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-8 mt-2 grid gap-[2px] sm:gap-1 font-mono text-[10px] text-white/40" style={cols}>
        {months.map((m, i) => (
          <span key={m.month} className="whitespace-nowrap">{i % every === 0 ? m.month.replace(' 20', " '") : ''}</span>
        ))}
      </div>
      <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display font-extrabold text-[clamp(2.2rem,4vw,3rem)] leading-none text-white tabular-nums">{total.toLocaleString('en-US')}</span>
        <span className="text-[14px] text-white/60">
          downloads in {months.length} months: {appStoreTotal.toLocaleString('en-US')} on the App Store, {googlePlayTotal.toLocaleString('en-US')} on Google
          Play. The most, {sum(peak)}, in {peak.month}.
        </span>
      </p>
    </div>
  )
}

/* Devices with the app installed on Google Play, weekly average, on one fixed scale */
export function InstalledOverTime() {
  // a narrow canvas keeps the labels readable once the chart shrinks to phone width
  const W = 440
  const H = 210
  const pad = { l: 32, r: 8, t: 18, b: 26 }
  const top = 250
  const n = playWeekly.length
  const x = (i: number) => pad.l + (i / (n - 1)) * (W - pad.l - pad.r)
  const y = (v: number) => pad.t + (1 - v / top) * (H - pad.t - pad.b)
  const line = playWeekly.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.installed).toFixed(1)}`).join(' ')
  const area = `${line} L${x(n - 1).toFixed(1)},${y(0)} L${x(0).toFixed(1)},${y(0)} Z`
  const peakI = playWeekly.reduce((bi, p, i) => (p.installed > playWeekly[bi].installed ? i : bi), 0)
  const ticks = playWeekly
    .map((p, i) => ({ i, d: new Date(p.week) }))
    .filter(({ d, i }) => i === 0 || d.getUTCDate() <= 7)
    .filter(({ d }) => [0, 3, 6, 9].includes(d.getUTCMonth()))
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`Google Play installed audience: ${playPeak.installed} devices at the peak on ${playPeak.day}, about ${Math.round(playNow.installed)} now`}>
        {[0, 100, 200].map((v) => (
          <g key={v}>
            <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} stroke="rgba(255,255,255,0.1)" />
            <text x={pad.l - 6} y={y(v) + 3.5} textAnchor="end" className="fill-white/40 font-mono text-[11px]">{v}</text>
          </g>
        ))}
        <path d={area} fill="#8fcbb6" fillOpacity="0.14" />
        <path d={line} fill="none" stroke="#8fcbb6" strokeWidth="2" strokeLinejoin="round" />
        <circle cx={x(peakI)} cy={y(playWeekly[peakI].installed)} r="4" fill="#8fcbb6" />
        <text x={x(peakI)} y={y(playWeekly[peakI].installed) - 9} textAnchor="middle" className="fill-white font-mono text-[11px]">
          peak day {playPeak.installed}
        </text>
        <circle cx={x(n - 1)} cy={y(playWeekly[n - 1].installed)} r="4" fill="#ffffff" />
        <text x={x(n - 1) - 6} y={y(playWeekly[n - 1].installed) - 9} textAnchor="end" className="fill-white font-mono text-[11px]">
          now ~{Math.round(playNow.installed)}
        </text>
        {ticks.map(({ i, d }) => (
          <text key={i} x={x(i)} y={H - 6} textAnchor={i === 0 ? 'start' : 'middle'} className="fill-white/40 font-mono text-[10.5px]">
            {d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })} &rsquo;{String(d.getUTCFullYear()).slice(2)}
          </text>
        ))}
      </svg>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display font-extrabold text-[clamp(2.2rem,4vw,3rem)] leading-none text-white tabular-nums">~{Math.round(playNow.installed)}</span>
        <span className="text-[14px] text-white/60">Android devices still have it installed, a year after launch</span>
      </p>
    </div>
  )
}

/* Where Google Play installs came from, all time; the console names only its top four countries */
export function WhereInstalled({ rows }: { rows: { country: string; installs: number }[] }) {
  const total = rows.reduce((sum, c) => sum + c.installs, 0)
  const top = Math.max(...rows.map((c) => c.installs))
  return (
    <ul className="grid gap-3.5">
      {rows.map((c) => {
        const other = c.country.startsWith('All other')
        return (
          <li key={c.country} className="grid grid-cols-[minmax(0,8.5rem)_minmax(0,1fr)] items-center gap-3">
            <span className={`text-[13px] leading-tight ${other ? 'text-white' : 'text-white/65'}`}>{c.country}</span>
            <span className="flex items-center gap-2.5 min-w-0">
              <span className={`block h-3.5 shrink-0 ${other ? 'bg-accent' : 'bg-white/70'}`} style={{ width: `max(3px, ${(c.installs / top) * 70}%)` }} />
              <span className="font-mono text-[11.5px] text-white/60 tabular-nums">{c.installs / total < 0.005 ? '<1' : Math.round((c.installs / total) * 100)}%</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

/* $40 a session against the usual range for one-on-one SAT tutoring, on one dollar scale */
export function PriceVsMarket() {
  const top = 140
  const pct = (v: number) => (v / top) * 100
  return (
    <div>
      <div className="relative h-16 mt-6">
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/20" aria-hidden="true" />
        <div
          className="absolute top-1/2 h-3 -translate-y-1/2 bg-white/25"
          style={{ left: `${pct(80)}%`, width: `${pct(120) - pct(80)}%` }}
          aria-hidden="true"
        />
        <span className="absolute -top-1 -translate-x-1/2 font-mono text-[11px] text-white/55 whitespace-nowrap" style={{ left: `${pct(100)}%` }}>
          usual $80–120
        </span>
        <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rounded-full bg-accent" style={{ left: `${pct(40)}%` }} aria-hidden="true" />
        <span className="absolute -top-1 -translate-x-1/2 font-mono text-[11px] text-accent whitespace-nowrap" style={{ left: `${pct(40)}%` }}>
          ours $40
        </span>
      </div>
      <div className="flex justify-between font-mono text-[11px] text-white/40 tabular-nums">
        <span>$0</span>
        <span>$70</span>
        <span>$140</span>
      </div>
      <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display font-extrabold text-[clamp(2.2rem,4vw,3rem)] leading-none text-accent tabular-nums">½ to ⅓</span>
        <span className="text-[14px] text-white/60">of the usual price for one-on-one SAT tutoring</span>
      </p>
    </div>
  )
}

/* SoundSplit, on iPhone and Android: the same app is paid for two ways, depending on whether a person has bought minutes */
const androidPaths = [
  { who: 'Free user', sees: 'A banner ad', pays: 'The advertiser pays', earned: 'under $90 so far', strong: false },
  { who: 'Bought a block', sees: 'No ads', pays: 'The user pays per minute', earned: '9 people so far', strong: true },
]

export function WhoPaysAndroid() {
  return (
    <ol className="grid gap-3">
      {androidPaths.map((p) => (
        <li
          key={p.who}
          className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)_20px_minmax(0,1.2fr)] items-center gap-2 sm:gap-3"
        >
          <span className={`px-3.5 py-2.5 text-[14px] font-semibold ${p.strong ? 'bg-white text-[#0b1210]' : 'border border-white/30 text-white'}`}>
            {p.who}
          </span>
          <span className="hidden sm:block text-white/40" aria-hidden="true">&rarr;</span>
          <span className="px-3.5 py-2.5 text-[14px] text-white/75 bg-white/[0.06]">{p.sees}</span>
          <span className="hidden sm:block text-white/40" aria-hidden="true">&rarr;</span>
          <span className={`px-3.5 py-2.5 text-[14px] font-semibold ${p.strong ? 'text-white' : 'text-accent'}`}>
            {p.pays}
            {p.earned && <span className="block mt-0.5 font-mono text-[11px] font-normal text-white/55 tabular-nums">{p.earned}</span>}
          </span>
        </li>
      ))}
    </ol>
  )
}
