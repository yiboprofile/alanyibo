import CaseShell from './CaseShell'
import {
  ColdStartLoop,
  JudgesThenMarket,
  MinutePacks,
  Ratings,
  StemSplit,
  TierLadder,
  TrustScale,
  YearlyMonths,
} from './charts'
import { ChartFrame, Tbd } from './ui'

/* Ordered along the price spectrum in the overview: from free, to pay per use, to pay per month, to a two-sided market */
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
            An iPhone app that photographs skin, reports what it may be looking at with a confidence score, keeps a
            history and compares scans. On the App Store since August 2025, free, with nothing to buy inside.
          </>
        }
        link={{ href: 'https://apps.apple.com/us/app/dermat-ai/id6748587012', label: 'On the App Store' }}
        facts={[
          { label: 'Launched', value: 'Aug 2025', note: 'iPhone, rated 18+ for health' },
          { label: 'Price', value: '$0', note: 'nothing to buy inside' },
          { label: 'Rating', value: '5.0', note: 'from 1 rating' },
          { label: 'Award', value: 'Emerging Standout', note: 'DFW IT Talent Champion, Sep 2025' },
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
        team={<Tbd>[Teammates, and who did what.]</Tbd>}
        blanks={[
          'Who the app was for, and how the problem came up.',
          'Why it has no price, in Alan’s words.',
          'What the app says it does and does not do, from its own screens, and what Alan thinks it should say.',
          'Downloads, and over what period.',
          'What giving something away taught him that charging for the other two did not.',
          'What he would change, and what he would keep.',
          'Stack: framework, the model, where it runs.',
        ]}
      >
        <ChartFrame
          title="When can you tell if it was right?"
          caption="A skin check is a trust good: you can’t tell whether the answer was right until someone qualified tells you, so what a person will pay depends on what they believe about who made it. What does $0 say about a health app from a student team?"
        >
          <TrustScale />
        </ChartFrame>
      </CaseShell>

      <CaseShell
        id="soundsplit"
        model="Per minute"
        captions={['Free to download.', 'Every minute has a cost.']}
        title={['SoundSplit.', 'Sold by the minute.']}
        lede={
          <>
            An iPhone app that separates a song into vocals, drums and instruments, each on its own slider. On the App
            Store since August 2024. I chose to meter it instead of selling a subscription, which ties what a person
            pays to how much they use.
          </>
        }
        link={{ href: 'https://apps.apple.com/us/app/sound-split/id6618147632', label: 'On the App Store' }}
        facts={[
          { label: 'Launched', value: 'Aug 2024', note: 'iPhone, free to download' },
          { label: 'Price', value: '$14.99–$119.99', note: 'a block of minutes' },
          { label: 'Rating', value: '4.0', note: 'from 4 ratings' },
          { label: 'Award', value: 'Future Star', note: 'DFW IT Association' },
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
            Alan with Vaibhav Sykhesh, Raymond Zhou, Bradley Chen and Mihir Kumar. Sound Split and Dermat AI are
            published through a family member&rsquo;s company developer account, APIDEED LLC.
          </>
        }
        blanks={[
          'Who the app was for, and how the problem came up.',
          'Minutes in each block: Basic, Standard, Premium.',
          'Why metered rather than a subscription, and how the three amounts were set.',
          'Purchases by tier, the revenue, and the period.',
          'Downloads, and over what period.',
          'What the buyers chose, and what that said about the three amounts.',
          'What he would change, and what he would keep.',
          'Who did what, and the stack: framework, separation model, where it runs.',
        ]}
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <ChartFrame title="What one import does" caption="One song in, three tracks out. The waveforms are drawn for illustration.">
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
            A web app for planning a trip: an AI assistant, travel plans, an inspiration board and a journal. I led the
            team of five that built it, and I set the prices. More than ten people have paid for it.
          </>
        }
        link={{ href: 'https://holidayhelperai.com/', label: 'holidayhelperai.com' }}
        facts={[
          { label: 'Built', value: <Tbd>2023</Tbd>, note: 'web app, still online' },
          { label: 'Price', value: '$2–$8.99', note: 'a month, three tiers' },
          { label: 'Paid', value: '10+', note: 'people, exact count to come' },
          { label: 'Award', value: 'Stellar Young Achiever', note: 'DCIA' },
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
        team={<>Alan (lead), William Liu, Raymond Zhou, Owen Liu and Hanna Lee, with James Wang as advisor.</>}
        blanks={[
          'The year it was built (2023, to confirm).',
          'Who the first users were meant to be, and how the problem came up.',
          'Why three tiers and not one price, why $2, and what “Enterprise” meant to a team of five students.',
          'Exact paying count by tier, monthly or yearly, and the period.',
          'Sign-ups and active users over the same period.',
          'What the people who paid taught him about the price, and which tier they chose.',
          'What he would change about the tiers, and what he would keep.',
          'Who built what, and the stack: framework, hosting, the AI service.',
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
        id="cravedeals"
        model="The other side pays"
        captions={['The judges scored it.', 'The market never did.']}
        title={['CraveDeals.', 'Third, then zero.']}
        lede={
          <>
            A business plan for a coupon platform for small restaurants in Frederick, Montgomery and Baltimore. It
            placed 3rd in Maryland, then 3rd in the nation. Then we tried to start the market, and it did not start.
          </>
        }
        link={{ href: 'http://crave.deals/', label: 'crave.deals' }}
        facts={[
          { label: 'Written', value: '2025', note: 'FBLA, Urbana chapter' },
          { label: 'Restaurant pays', value: <Tbd>[price]</Tbd>, note: 'the diner pays nothing' },
          { label: 'Signed', value: '0', note: 'restaurants, 0 coupons' },
          { label: 'Award', value: '3rd in the nation', note: 'FBLA Business Plan Event' },
        ]}
        product={{
          kind: 'shot',
          src: '/media/crave-top.webp',
          alt: 'The top of the CraveDeals prototype: a banner reading Your Next Meal Awaits, with a town picker',
          width: 1400,
          height: 680,
          caption: 'The CraveDeals prototype, still online. The restaurants on it are samples, not clients.',
        }}
        photo={{
          src: '/assets/photos/fbla-3.webp',
          alt: 'Alan, right, with two FBLA teammates beside the Welcome to the 2025 National Leadership Conference sign',
          width: 1280,
          height: 1218,
          position: '100% 50%',
          caption: 'FBLA National Leadership Conference, Anaheim, 2025. Alan is on the right.',
        }}
        team={
          <>
            A team of three. Alan wrote the market analysis and the financial sections, visited restaurants in the
            Frederick area, and built part of the site. <Tbd>[Teammate names, and what each of them did.]</Tbd>
          </>
        }
        blanks={[
          'How the question came up: which restaurant owners Alan talked to, what they said about commissions and regulars.',
          'Why a restaurant would give a discount: the plan’s answer and figures, with the page number.',
          'What the plan charged restaurants, and why that price.',
          'The plan’s launch sequence: which side joins first.',
          'How many restaurants were approached, over which months.',
          'Three pages from the plan: market sizing, pricing, breakeven.',
          'What the cold start looked like from a restaurant owner’s side, and what would have started it.',
          'What he would do differently, and what he would keep. Stack: framework, hosting.',
        ]}
      >
        <ChartFrame title="One plan, two scores">
          <JudgesThenMarket />
        </ChartFrame>
        <ChartFrame
          title="Why it never started"
          caption="A cold-start problem: diners won’t visit a site with no deals, and restaurants won’t post deals on a site with no diners."
        >
          <div className="max-w-[560px] mx-auto">
            <ColdStartLoop />
          </div>
        </ChartFrame>
      </CaseShell>
    </>
  )
}
