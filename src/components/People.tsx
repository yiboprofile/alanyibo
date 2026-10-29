import { Captions, ChartFrame, Headline, Label, Lede, Split, Tbd, Wrap } from './ui'

/* Two groups that grew while I helped run them, before and after, on one shared scale */
const growth = [
  {
    name: 'FBLA, Urbana chapter',
    role: 'Team lead 2025–26, vice president 2026–27',
    from: 50,
    to: 400,
    fromLabel: '~50',
    toLabel: '~400',
    note: 'members. More than 50 went to nationals, the 8th largest chapter there.',
  },
  {
    name: 'Urbana Computer Science Club',
    role: 'Co-president 2024–27',
    from: 35,
    to: 90,
    fromLabel: '35',
    toLabel: '90+',
    note: 'members. Nearly 30 entered USACO, MITIT and CALICO; most teams placed in the top 30%.',
  },
]
const top = 400

const more = [
  {
    title: 'DreamCollegeAI, intern manager',
    body: 'Managed 35–40 interns across marketing, quality control and software, at an AI college counseling company. Their work reached 300,000+ views.',
    when: 'Grade 10',
  },
  {
    title: 'SCISS, student counselor',
    body: 'Mentored students in a startup program of 50+ while competing in it. My team won Best Presentation and Best Team; peers elected me to run the talent show.',
    when: 'Grade 12',
  },
  {
    title: 'Students Demand Action, co-president',
    body: 'Chosen by the outgoing officers. Joined a Capitol advocacy visit for a gun-related bill that later passed, and am planning the next one.',
    when: '2026–27',
  },
  {
    title: 'Maryland FBLA State Council',
    body: 'One of six students on the Maryland FBLA State Council.',
    when: 'FBLA',
  },
]

export default function People() {
  return (
    <Wrap id="people" labelledBy="h-people" className="pt-[clamp(96px,10vw,144px)] scroll-mt-6">
      <Captions left="Members, competitors," right="interns, students." className="mb-[clamp(40px,5vw,72px)]" />

      <Split heading={<Headline id="h-people" lines={['Who I brought in,', 'and how.']} />}>
        <Lede>
          Crave Deals runs into a cold start: nobody wants to be first. The groups below had the same problem, and
          they grew. <Tbd>[In my own words: what was different.]</Tbd>
        </Lede>
      </Split>

      <div className="mt-[clamp(48px,5vw,72px)] grid gap-3">
        <ChartFrame
          title="Before and after, one scale"
          caption={
            <>
              Membership when I joined each group, and now. <Tbd>[Confirm the wording: “helped grow”, and my part in it.]</Tbd>
            </>
          }
        >
          <ul className="grid gap-8">
            {growth.map((g) => (
              <li key={g.name} className="grid gap-3 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-8">
                <div className="min-w-0">
                  <span className="block font-display font-bold text-[18px] leading-snug text-white">{g.name}</span>
                  <span className="block mt-1 text-[13px] text-white/50">{g.role}</span>
                </div>
                <div className="min-w-0">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-3">
                      <span className="block h-4 bg-white/30 shrink-0" style={{ width: `max(4px, ${(g.from / top) * 78}%)` }} />
                      <span className="font-mono text-[12px] text-white/55 tabular-nums">{g.fromLabel}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="block h-4 bg-accent shrink-0" style={{ width: `${(g.to / top) * 78}%` }} />
                      <span className="font-display font-bold text-[17px] text-white tabular-nums">{g.toLabel}</span>
                      <span className="font-mono text-[11px] text-accent tabular-nums">×{(g.to / g.from).toFixed(1).replace(/\.0$/, '')}</span>
                    </div>
                  </div>
                  <span className="block mt-2.5 text-[13.5px] leading-snug text-white/60">{g.note}</span>
                </div>
              </li>
            ))}
          </ul>
        </ChartFrame>

        <div className="grid gap-3 md:grid-cols-2">
          {more.map((m) => (
            <article key={m.title} className="bg-panel p-6 md:p-8">
              <Label className="block">{m.when}</Label>
              <h3 className="mt-3 font-display font-bold text-[18px] leading-snug text-white">{m.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-white/65">{m.body}</p>
            </article>
          ))}
        </div>

        <aside className="todo border border-dashed border-mark-ink/30 p-6 md:p-8" aria-label="Still to confirm">
          <Label className="text-mark-ink/80">Still to confirm</Label>
          <ul className="mt-4 grid gap-3 text-[14px] leading-[1.55] text-mark-ink/85">
            <li>If DreamCollegeAI or Pathspark is connected to my family, say so here, as the site already does for APIDEED LLC.</li>
            <li>The membership numbers and roles, exactly as they appear in the activity list.</li>
          </ul>
        </aside>
      </div>
    </Wrap>
  )
}
