import { useState, type ReactNode } from 'react'
import { Caption } from './ui'

export type Tier = {
  name: string
  monthly: { price: string; note: string; share: number }
  yearly?: { price: string; note: string; share: number }
}

/* Bar height is each price over the highest price, times one fixed plot height */
export default function PriceChart({ tiers, caption }: { tiers: Tier[]; caption: ReactNode }) {
  const hasYearly = tiers.every((t) => t.yearly)
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <figure className="max-w-xl [--plot:140px] md:[--plot:184px]">
      {hasYearly && (
        <div role="group" aria-label="Show prices" className="flex gap-1 w-max p-1 mb-7 rounded-full bg-white/[0.07]">
          {(['monthly', 'yearly'] as const).map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={period === p}
              onClick={() => setPeriod(p)}
              className="min-h-9 px-[18px] rounded-full text-[13px] font-semibold capitalize cursor-pointer text-white/70 aria-pressed:bg-white aria-pressed:text-black transition-colors duration-200"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-3 gap-3.5 items-end">
        {tiers.map((t) => {
          const v = (period === 'yearly' && t.yearly) || t.monthly
          return (
            <div key={t.name} className="flex flex-col justify-end min-w-0">
              <b className="font-display font-bold text-[clamp(1.2rem,1.6vw,1.375rem)] leading-[1.1] text-white tabular-nums">{v.price}</b>
              <i className="block mt-1 mb-2.5 not-italic text-[13px] leading-[1.4] text-white/50">{v.note}</i>
              <div
                className="shrink-0 bg-white motion-safe:transition-[height] motion-safe:duration-300"
                style={{ height: `calc(${v.share} * var(--plot))` }}
              />
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-3 gap-3.5 mt-2.5">
        {tiers.map((t) => (
          <span key={t.name} className="text-[13px] leading-[1.4] text-white/60">{t.name}</span>
        ))}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  )
}
