import { products } from '../data/products'
import { Arrow, Captions, Headline, Label, Lede, Split, Tbd, Wrap } from './ui'

/* The page's thesis as one graphic: five products laid out along who pays, and how */
export default function Spectrum() {
  return (
    <Wrap id="cases" labelledBy="h-cases" className="pt-[clamp(96px,10vw,144px)] scroll-mt-6">
      <Captions left="Joining is free." right="Paying is not." className="mb-[clamp(40px,5vw,72px)]" />
      <Split heading={<Headline id="h-cases" lines={['Getting people to join', 'is one cold start.']} />}>
        <Lede>
          Getting them to pay is another. Five things I built or co-founded, laid out by who pays and how, from free to a
          commission paid only on results.
        </Lede>
      </Split>
      <div className="mt-[clamp(48px,5vw,72px)] bg-panel p-6 md:p-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">Who pays, and how</span>
          <Label className="hidden lg:block">Free &rarr; paid only on results</Label>
        </div>

        <ol className="relative grid grid-cols-1 lg:grid-cols-5 gap-x-6">
          {/* the axis, across on wide screens and down the side on phones */}
          <span aria-hidden="true" className="hidden lg:block absolute left-0 right-0 top-[7px] h-px bg-white/25" />
          {products.map((p, i) => (
            <li key={p.id} className="relative">
              {i < products.length - 1 && (
                <span aria-hidden="true" className="lg:hidden absolute left-[7px] top-4 bottom-0 w-px bg-white/25" />
              )}
              <a href={`#${p.id}`} className="group grid grid-cols-[15px_minmax(0,1fr)] lg:block gap-4 pb-8 lg:pb-0">
                <span
                  aria-hidden="true"
                  className="relative z-10 block size-[15px] rounded-full border-2 border-accent bg-panel group-hover:bg-accent transition-colors duration-200"
                />
                <div className="lg:mt-6 min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{p.model}</span>
                  <span className="block mt-3 font-display font-extrabold text-[clamp(2rem,3.2vw,2.6rem)] leading-none tracking-[-0.02em] text-white tabular-nums">
                    {p.price.startsWith('[') ? <Tbd>{p.price}</Tbd> : p.price}
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
