/* every item here appears on the application or in the store data, and can be checked */
const proof = [
  'FBLA chapter ~150 → ~400',
  '2 apps ~2,850 downloads',
  '3rd in the nation',
  'TEDx speaker',
  'National Merit Semifinalist',
]

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[760px] overflow-hidden">
      {/* Full-bleed video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/75" />
      <div className="absolute inset-0" style={{ background: 'rgba(11,18,16,0.28)' }} />

      {/* Side captions */}
      <div className="absolute inset-x-0 top-[30%] z-10 flex items-start justify-between px-6 md:px-12">
        <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[9rem]">
          First one person.
        </span>
        <span className="text-white/50 text-[11px] font-medium tracking-[0.08em] max-w-[9rem] text-right">
          Then the room.
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-12 pb-14 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-7xl mx-auto">
          {/* Headline */}
          <div>
            <h1
              className="text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.12] tracking-[-0.02em] text-white font-extrabold max-w-lg"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Some products sell.
              <br />
              I want to know why.
            </h1>
          </div>

          {/* Subtext + CTAs */}
          <div className="max-w-sm md:pb-1">
            <p className="text-white/60 text-[14.5px] leading-[1.7] font-light">
              I&rsquo;m Yibo Wang, a senior at Urbana High School in Frederick,
              Maryland. I helped grow our FBLA chapter from about 150 members to
              400, co-founded a coupon company and an SAT tutoring business,
              and built three apps. Most of it came down to the same problem:
              getting the first person to say yes.
            </p>
            <p className="mt-4 flex flex-wrap gap-x-2 font-mono text-[10.5px] uppercase tracking-[0.12em] leading-[1.9] text-white/55">
              {proof.map((item, i) => (
                <span key={item} className="whitespace-nowrap">
                  {item}
                  {i < proof.length - 1 && <span aria-hidden="true"> &middot;</span>}
                </span>
              ))}
            </p>

            <div className="mt-5 flex items-center gap-6">
              <a
                href="#people"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-[13px] font-semibold text-black bg-white transition-all duration-200 hover:bg-white/85"
              >
                See who joined
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200"
              >
                About Yibo
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
