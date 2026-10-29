import CaseShell from './CaseShell'
import {
  ColdStartLoop,
  DownloadsByMonth,
  InstalledOverTime,
  WhereInstalled,
  JudgesThenMarket,
  MinutePacks,
  Ratings,
  ScoreGain,
  StemSplit,
  TierLadder,
  TrustScale,
  TutorTeam,
  YearlyMonths,
} from './charts'
import { ChartFrame, Tbd } from './ui'

/* Ordered along the price spectrum in the overview: free, pay per use, pay per month, pay per session, then a two-sided market.
   Every fact here matches the Common App activity and honor lists; anything still unconfirmed is a <Tbd> blank. */
export default function Cases() {
  return (
    <>
      <CaseShell
        id="dermat"
        model="Free"
        captions={['A skin check is a trust good.', 'What does $0 say?']}
        title={['Dermat AI.', 'No price at all.']}
        lede={
          <>
            An iPhone app that photographs skin and reports what it may be looking at, with a confidence score, a
            history and side-by-side comparisons. On the App Store since August 2025 and now on Google Play, free, with
            nothing to buy inside.
          </>
        }
        links={[
          { href: 'https://dermatai.com/', label: 'dermatai.com' },
          { href: 'https://apps.apple.com/us/app/dermat-ai/id6748587012', label: 'On the App Store' },
          { href: 'https://play.google.com/store/apps/details?id=com.dermatai.app', label: 'On Google Play' },
        ]}
        facts={[
          { label: 'Price', value: '$0', note: 'nothing to buy inside' },
          { label: 'App Store', value: '811', note: 'downloads, Aug 2025 to Oct 2026' },
          { label: 'Google Play', value: '~117', note: 'devices with it installed now; peak 221' },
          { label: 'Award', value: 'Emerging Standout', note: 'DFW IT Talent Champion, 2025–26' },
        ]}
        product={{
          kind: 'phone',
          src: '/media/dermat-dashboard.webp',
          alt: "Dermat AI's skin health dashboard: a latest scan reading healthy skin at 90 percent confidence, a trend line and a conditions breakdown",
          width: 512,
          height: 1104,
          caption: 'The dashboard: the latest scan, the trend, the history.',
        }}
        photo={{
          src: '/assets/photos/award-dermat.webp',
          alt: 'Certificate: Emerging Standout Award, DFW IT Talent Champion Competition, to Team Dermat AI, 15 September 2025',
          width: 1600,
          height: 1244,
          caption: 'Emerging Standout Award, DFW IT Talent Champion Competition, September 2025.',
        }}
        team={<Tbd>[Teammates, and what I did.]</Tbd>}
        blanks={[
          'What drove the rise from November to January: the award, a post, a school, word of mouth? And was any of it paid advertising?',
          'Google Play’s own install total (Statistics, “User acquisitions”), so Android can be shown as downloads like the App Store.',
          'How many countries in all: both consoles list them.',
          'Why it has no price, in my own words.',
          'One sentence on what the app does and does not claim. The honor list says it recommends treatment; the site says it reports what it may be looking at. Pick one wording for both.',
          'What giving something away taught me that charging for the other apps did not.',
        ]}
      >
        <div className="grid gap-3 lg:grid-cols-2">
          <ChartFrame
            title="Who found it"
            caption="App Store downloads by month, from App Store Connect. Downloads may include reinstalls; the last month is as exported."
          >
            <DownloadsByMonth />
          </ChartFrame>
          <ChartFrame
            title="Who kept it"
            caption={<>Google Play “installed audience”: devices with the app installed, averaged by week, from the Play Console. It counts people who kept the app, not downloads, so it is not added to the App Store figure.</>}
          >
            <InstalledOverTime />
          </ChartFrame>
        </div>
        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
          <ChartFrame
            title="Where Android users are"
            caption="Share of devices with the app installed, last 30 days. The console names its top four countries; the rest are grouped."
          >
            <WhereInstalled />
          </ChartFrame>
          <ChartFrame
          title="When can you tell if it was right?"
          caption="A skin check is a trust good: you can’t tell whether the answer was right until someone qualified tells you, so what a person will pay depends on what they believe about who made it. What does $0 say about a health app from a student team?"
        >
          <TrustScale />
        </ChartFrame>
        </div>
      </CaseShell>

      <CaseShell
        id="soundsplit"
        model="Per minute"
        captions={['Free to download.', 'Every minute has a cost.']}
        title={['SoundSplit.', 'Sold by the minute.']}
        lede={
          <>
            An iPhone app that separates a song into its stems, so you can take the vocals out for karaoke or mute the
            piano to practise along. On the App Store since August 2024. I chose to meter it instead of selling a
            subscription, so what a person pays follows how much they use.
          </>
        }
        links={[
          { href: 'https://soundsplitai.com/', label: 'soundsplitai.com' },
          { href: 'https://apps.apple.com/us/app/sound-split/id6618147632', label: 'On the App Store' },
        ]}
        facts={[
          { label: 'Launched', value: 'Aug 2024', note: 'iPhone, free to download' },
          { label: 'Price', value: '$14.99–$119.99', note: 'a block of minutes' },
          { label: 'Rating', value: '4.0', note: 'from 4 ratings' },
          { label: 'Award', value: 'Future Star', note: 'DFW IT Association, 2024–25' },
        ]}
        product={{
          kind: 'phone',
          src: '/media/soundsplit-mixer.webp',
          alt: "SoundSplit's mixer screen: ten sliders, one per instrument, above a song called Shape of You",
          width: 900,
          height: 1950,
          caption: 'The mixer: one slider per stem.',
        }}
        photo={{
          src: '/assets/photos/Future-star-award-soundsplit.webp',
          alt: 'The Future Star Award slide for SoundSplit projected in a hall, listing the team',
          width: 1600,
          height: 1200,
          caption: <>The DFW IT Association&rsquo;s Future Star Award, as it was announced.</>,
        }}
        team={
          <>
            Vaibhav Sykhesh, Raymond Zhou, Bradley Chen, Mihir Kumar and me. SoundSplit and Dermat AI are published
            through a family member&rsquo;s company developer account, APIDEED LLC.
          </>
        }
        blanks={[
          'Minutes in each block: Basic, Standard, Premium.',
          'Why metered rather than a subscription, in my own words.',
          'Purchases so far, and over what period.',
        ]}
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <ChartFrame title="What one import does" caption="One song in, separate tracks out. The waveforms are drawn for illustration.">
            <StemSplit />
          </ChartFrame>
          <ChartFrame title="What a block of minutes costs" caption="In-app purchases on the App Store, October 2026. Bars share one scale.">
            <MinutePacks />
          </ChartFrame>
        </div>
        <ChartFrame title="What people thought" caption="One dot per rating. Four ratings is a small sample.">
          <Ratings average="4.0" count={4} store="App Store" />
        </ChartFrame>
      </CaseShell>

      <CaseShell
        id="holidayhelperai"
        model="Per month"
        captions={['I set the prices.', 'More than ten people paid.']}
        title={['HolidayHelperAI.', 'Three tiers.']}
        lede={
          <>
            A website that plans trips and vacations: an AI assistant, travel plans, an inspiration board and a journal.
            I led the team of five that built it in ninth grade, and I set the prices. More than ten people have paid
            for it.
          </>
        }
        links={[{ href: 'https://holidayhelperai.com/', label: 'holidayhelperai.com' }]}
        facts={[
          { label: 'Built', value: '2023–24', note: 'grade 9, still online' },
          { label: 'Price', value: '$2–$8.99', note: 'a month, three tiers' },
          { label: 'Paid', value: '10+', note: 'people' },
          { label: 'Award', value: 'Stellar Young Achiever', note: 'DCIA, 2023–24' },
        ]}
        product={{
          kind: 'shot',
          src: '/media/hhai-pricing.webp',
          alt: 'The HolidayHelperAI pricing page: Standard $2 a month or $20 a year, Premium $4 or $40, Enterprise $8.99 or $80.99',
          width: 1280,
          height: 980,
          caption: 'holidayhelperai.com/pricing, October 2026.',
        }}
        photo={{
          src: '/assets/photos/award-holidayhelper.webp',
          alt: 'The DCIA Stellar Young Achiever Award slide for HolidayHelperAI, naming Alan Wang as team leader',
          width: 1386,
          height: 782,
          position: '0 50%',
          caption: 'The DCIA award slide, with the team listed.',
        }}
        team={<>I led it, with William Liu, Raymond Zhou, Owen Liu and Hanna Lee, and James Wang as advisor.</>}
        blanks={[
          'Why three tiers and not one price, and why $2, in my own words.',
          'Which tier the paying users chose.',
        ]}
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <ChartFrame
            title="What each tier adds"
            caption="The tiers are one product with features taken away, so what a person pays depends on which feature they can’t do without. Each step roughly doubles the price."
          >
            <TierLadder />
          </ChartFrame>
          <ChartFrame title="What a year costs" caption="Prices on holidayhelperai.com in October 2026. Dashed months are free.">
            <YearlyMonths />
          </ChartFrame>
        </div>
      </CaseShell>

      <CaseShell
        id="tutoring"
        model="Per session"
        captions={['Families pay for a result.', 'The one that sold.']}
        title={['Urbana SAT Tutoring.', 'Paid for by results.']}
        lede={
          <>
            An affordable one-on-one SAT tutoring business in Urbana that I co-founded. Every student gets a weekly and
            monthly plan. We have worked with more than ten clients, and when the founders could not take on more, we
            hired three tutors.
          </>
        }
        links={[]}
        facts={[
          { label: 'Started', value: <Tbd>[grade 11]</Tbd>, note: 'co-founder and tutor' },
          { label: 'Price', value: <Tbd>[rate]</Tbd>, note: 'a session, one-on-one' },
          { label: 'Clients', value: '10+', note: 'with personal plans' },
          { label: 'Best gain', value: '+280', note: '1220 to 1510' },
        ]}
        team={<>I co-founded it and tutor; three more tutors joined as it grew.</>}
        blanks={[
          'When it started: the activity list says grade 12, the additional information says grades 11 and 12.',
          'What a session costs, and why that price counts as affordable.',
          'Where the first clients came from.',
          'One or two lines from a family or student, with their permission (can be anonymous).',
        ]}
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <ChartFrame title="What a family pays for" caption="The largest improvement so far, on the SAT’s 400–1600 scale.">
            <ScoreGain />
          </ChartFrame>
          <ChartFrame title="How it grew">
            <TutorTeam />
          </ChartFrame>
        </div>
      </CaseShell>

      <CaseShell
        id="cravedeals"
        model="The other side pays"
        captions={['The judges scored it.', 'The market is the harder test.']}
        title={['Crave Deals.', 'Third, then the street.']}
        lede={
          <>
            A coupon company I co-founded to help small local restaurants level the playing field against big chains.
            The business plan placed 3rd in Maryland, then 3rd in the nation. Since then we have pitched restaurants
            around Frederick and Urbana, venture firms and investors, and entered pitch competitions.
          </>
        }
        links={[{ href: 'http://crave.deals/', label: 'crave.deals' }]}
        facts={[
          { label: 'Role', value: 'Co-founder, COO', note: <>grades <Tbd>[10–11 or 10–12]</Tbd></> },
          { label: 'Restaurants pitched', value: <Tbd>[40+]</Tbd>, note: 'around Frederick and Urbana' },
          { label: 'Pitch prizes', value: <Tbd>[$120+ or $320+]</Tbd>, note: 'local and national' },
          { label: 'Award', value: '3rd in the nation', note: 'FBLA Business Plan, 2025' },
        ]}
        product={{
          kind: 'shot',
          src: '/media/crave-top.webp',
          alt: 'The top of the Crave Deals website: a banner reading Your Next Meal Awaits, with a town picker',
          width: 1400,
          height: 680,
          caption: 'crave.deals. The restaurants shown are samples, not clients.',
        }}
        photo={{
          src: '/assets/photos/fbla-3.webp',
          alt: 'Alan, right, with two FBLA teammates beside the Welcome to the 2025 National Leadership Conference sign',
          width: 1280,
          height: 1218,
          position: '100% 50%',
          caption: 'FBLA National Leadership Conference, Anaheim, 2025. I am on the right.',
        }}
        team={
          <>
            Three co-founders. As COO I wrote the market analysis and the financial sections and visited restaurants in
            the Frederick area. <Tbd>[Co-founders&rsquo; names, and what each of them does.]</Tbd>
          </>
        }
        blanks={[
          'The real numbers, the same in the activity list, the additional information and here: restaurants pitched (several or 40+), prizes ($120+ or $320+), hours a week (1.5 or 3), grades (10–11 or 10–12).',
          'Is it still running? If any restaurant has signed, say so; if not, “0 signed so far” stays.',
          'Where the mobile app stands.',
          'What the cold start looks like from a restaurant owner’s side, in my own words.',
        ]}
      >
        <ChartFrame title="One plan, two tests">
          <JudgesThenMarket />
        </ChartFrame>
        <ChartFrame
          title="The problem we are working on"
          caption="A cold start: diners won’t visit a site with no deals, and restaurants won’t post deals on a site with no diners."
        >
          <div className="max-w-[560px] mx-auto">
            <ColdStartLoop />
          </div>
        </ChartFrame>
      </CaseShell>
    </>
  )
}
