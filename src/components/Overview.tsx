import { Arrow, Captions, Headline, Lede, Split, Tbd, Wrap } from './ui'

/* One line per product, so a reader sees the four pricing choices side by side before reading any case */
const products = [
  {
    id: 'cravedeals',
    name: 'CraveDeals',
    kind: 'Business plan, coupon site',
    year: '2025',
    price: <Tbd>[What restaurants would pay]</Tbd>,
    model: 'Charge the restaurant',
    result: '3rd in the nation. 0 restaurants signed.',
  },
  {
    id: 'holidayhelperai',
    name: 'HolidayHelperAI',
    kind: 'Web app, trip planner',
    year: <Tbd>2023</Tbd>,
    price: '$2 – $8.99',
    model: 'Subscription, three tiers, a month',
    result: 'More than ten people paid.',
  },
  {
    id: 'soundsplit',
    name: 'SoundSplit',
    kind: 'iPhone app, song stems',
    year: '2024',
    price: '$14.99 – $119.99',
    model: 'Metered, a block of minutes',
    result: '4.0 stars from 4 ratings.',
  },
  {
    id: 'dermat',
    name: 'Dermat AI',
    kind: 'iPhone app, skin scans',
    year: '2025',
    price: '$0',
    model: 'Free, nothing to buy inside',
    result: '5.0 stars from 1 rating.',
  },
]

const cell = 'text-[13px] font-medium tracking-[0.04em] text-white/50'

export default function Overview() {
  return (
    <Wrap id="cases" labelledBy="h-cases" className="pt-[clamp(96px,10vw,144px)]">
      <Captions left="One plan, three products." right="Four ways to set a price." className="mb-[clamp(48px,6vw,88px)]" />

      <Split
        heading={
          <div>
            <Headline id="h-cases" lines={[<Tbd key="a">Some products sell.</Tbd>, <Tbd key="b">I want to know why.</Tbd>]} />
            <p className="draft-only mt-3 text-[13px] text-mark-ink">
              Draft headline, for Alan to approve or replace. It has to be a question he actually asked.
            </p>
          </div>
        }
      >
        <Lede>
          I&rsquo;m Alan Wang, a senior at Urbana High School in Frederick, Maryland. With student teams I wrote one
          business plan and built three apps. Here is what each one charged, who paid, and what that says about the
          people on the other side.
        </Lede>
      </Split>

      <div className="mt-[clamp(56px,6vw,88px)]">
        {/* column labels, shown only where the rows sit as a table */}
        <div className="hidden lg:grid grid-cols-[minmax(0,3fr)_minmax(0,1fr)_minmax(0,2.4fr)_minmax(0,3fr)_24px] gap-8 pb-4">
          <span className={cell}>Product</span>
          <span className={cell}>Year</span>
          <span className={cell}>How it charged</span>
          <span className={cell}>What happened</span>
          <span />
        </div>

        <ol className="border-t border-white/12">
          {products.map((p) => (
            <li key={p.id} className="border-b border-white/12">
              <a
                href={`#${p.id}`}
                className="group grid grid-cols-[minmax(0,1fr)_24px] lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)_minmax(0,2.4fr)_minmax(0,3fr)_24px] gap-x-8 gap-y-3 py-7 lg:items-baseline"
              >
                <div className="min-w-0">
                  <span className="block font-display font-bold text-[clamp(1.2rem,1.6vw,1.375rem)] leading-[1.3] text-white">
                    {p.name}
                  </span>
                  <span className="block mt-1 text-[13px] text-white/50">{p.kind}</span>
                </div>

                <span className="self-center lg:self-auto justify-self-end lg:hidden text-white/50 group-hover:text-white transition-colors duration-200 row-start-1 col-start-2">
                  <Arrow />
                </span>

                <span className="col-span-full lg:col-span-1 text-[14.5px] text-white/60 tabular-nums">
                  <span className="lg:hidden text-white/50">Since </span>
                  {p.year}
                </span>

                <div className="col-span-full lg:col-span-1 min-w-0">
                  <span className="block font-display font-bold text-[clamp(1.2rem,1.6vw,1.375rem)] leading-[1.3] text-white tabular-nums">
                    {p.price}
                  </span>
                  <span className="block mt-1 text-[13px] text-white/50">{p.model}</span>
                </div>

                <span className="col-span-full lg:col-span-1 text-[14.5px] leading-[1.6] text-white/70">{p.result}</span>

                <span className="hidden lg:block justify-self-end text-white/50 group-hover:text-white group-hover:translate-x-0.5 motion-safe:transition duration-200">
                  <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  )
}
