import { Caption, Headline, Lede, Row, Rows, Split, Wrap } from './ui'

const record = [
  {
    year: '2026',
    title: 'Economics Challenge, 1st place',
    body: (
      <>
        One of six chosen from about 100 applicants. Months of FOMC press conferences, the housing market and executive
        actions; I argued policy as Keir Starmer at Mount St. Mary&rsquo;s University.
      </>
    ),
  },
  {
    year: '2025',
    title: 'FBLA Business Plan Event, 3rd in the nation',
    body: (
      <>
        After 3rd in Maryland. The plan is{' '}
        <a href="#cravedeals" className="text-white underline decoration-white/35 underline-offset-[0.2em] hover:decoration-white">
          CraveDeals
        </a>
        , above.
      </>
    ),
  },
  {
    year: '2026',
    title: 'Wharton, Leadership in the Business World',
    body: (
      <>
        Three weeks of real Harvard Business School cases. My team&rsquo;s final case was Chipotle&rsquo;s entry into
        Asia.
      </>
    ),
  },
  {
    year: '2026',
    title: 'TEDxSCA Youth, a talk',
    body: <>Gen-Z is Cooked. One slide counted the members of FBLA (230K), DECA (316K+) and FFA (1.04M).</>,
    figure: {
      src: '/media/tedx-stats.webp',
      alt: 'Alan on the TEDx stage in front of the slide with the membership numbers for FBLA, DECA and FFA',
      caption: 'The slide, as photographed.',
    },
  },
  {
    year: '2026',
    title: 'AP Scholar with Distinction',
    body: <>Economics is the direction. The products above are where I test it.</>,
  },
]

export default function About() {
  return (
    <Wrap id="about" labelledBy="h-about" className="pt-[clamp(96px,10vw,144px)]">
      <Split heading={<Headline id="h-about" lines={['Economics,', 'without an app.']} />}>
        <Lede>
          Alan Wang &middot; Urbana High School, Frederick, Maryland &middot; Class of 2027. Five things from the last two
          years that have nothing to do with an app.
        </Lede>
      </Split>

      <Rows className="mt-[clamp(64px,7vw,104px)]">
        {record.map((r) => (
          <Row key={r.title} label={<span className="tabular-nums">{r.year}</span>}>
            <div>
              <h3 className="font-display font-bold text-[clamp(1.2rem,1.6vw,1.375rem)] leading-[1.3] text-white mb-1.5">
                {r.title}
              </h3>
              <p>{r.body}</p>
            </div>
            {r.figure && (
              <figure className="mt-2">
                <img src={r.figure.src} alt={r.figure.alt} width={1800} height={1200} loading="lazy" className="w-full h-auto" />
                <Caption>{r.figure.caption}</Caption>
              </figure>
            )}
          </Row>
        ))}
      </Rows>
    </Wrap>
  )
}
