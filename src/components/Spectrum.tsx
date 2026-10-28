import { products } from '../data/products'
import { Arrow, Label, Tbd, Wrap } from './ui'

/* The page's thesis as one graphic: four products laid out along who pays, and how */
export default function Spectrum() {
  return (
    <Wrap id="cases" className="pt-[clamp(72px,8vw,112px)] scroll-mt-6">
      <div className="bg-panel p-6 md:p-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">Who pays, and how</h2>
          <Label className="hidden md:block">Free &rarr; the other side pays</Label>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-x-6">
          {/* the axis, across on wide screens and down the side on phones */}
          <span aria-hidden="true" className="hidden md:block absolute left-0 right-0 top-[7px] h-px bg-white/25" />
          {products.map((p, i) => (
            <li key={p.id} className="relative">
              {i < products.length - 1 && (
                <span aria-hidden="true" className="md:hidden absolute left-[7px] top-4 bottom-0 w-px bg-white/25" />
              )}
              <a href={`#${p.id}`} className="group grid grid-cols-[15px_minmax(0,1fr)] md:block gap-4 pb-8 md:pb-0">
                <span
                  aria-hidden="true"
                  className="relative z-10 block size-[15px] rounded-full border-2 border-accent bg-panel group-hover:bg-accent transition-colors duration-200"
                />
                <div className="md:mt-6 min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{p.model}</span>
                  <span className="block mt-3 font-display font-extrabold text-[clamp(2.2rem,4vw,3rem)] leading-none tracking-[-0.02em] text-white tabular-nums">
                    {p.price === '?' ? <Tbd>?</Tbd> : p.price}
                  </span>
                  <span className="block mt-2 min-h-[1.25rem] text-[13px] text-white/50">{p.unit}</span>
                  <span className="block mt-4 text-[14.5px] leading-snug text-white/75">{p.who}</span>

                  <span className="mt-6 pt-4 border-t border-line flex items-center justify-between gap-3">
                    <span className="min-w-0">
                      <span className="block font-display font-bold text-[17px] text-white">{p.name}</span>
                      <span className="block mt-0.5 text-[13px] text-white/50">{p.outcome}</span>
                    </span>
                    <span className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 motion-safe:transition duration-200">
                      <Arrow />
                    </span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  )
}
