import CaseShell from './CaseShell'
import {
  ColdStartLoop,
  DownloadsByMonth,
  InstalledOverTime,
  WhereInstalled,
  JudgesThenMarket,
  MinutePacks,
  PriceVsMarket,
  Ratings,
  ScoreGain,
  StemSplit,
  TierLadder,
  TrustScale,
  TutorTeam,
  WhoPaysAndroid,
  YearlyMonths,
} from './charts'
import { ChartFrame, Tbd } from './ui'
import * as dermat from '../data/dermat'
import * as soundsplit from '../data/soundsplit'

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
            An iPhone and Android app for looking after your skin. Scan a photo to see what it may be and how confident
            the model is, track every result over time in a skin diary, follow a morning and evening routine built for
            your skin, and ask an AI assistant questions at any hour. On the App Store since August 2025 and now on
            Google Play, free, with nothing to buy inside.
          </>
        }
        links={[
          { href: 'https://dermatai.com/', label: 'dermatai.com' },
          { href: 'https://apps.apple.com/us/app/dermat-ai/id6748587012', label: 'On the App Store' },
          { href: 'https://play.google.com/store/apps/details?id=com.dermatai.app', label: 'On Google Play' },
        ]}
        facts={[
          { label: 'Price', value: '$0', note: 'nothing to buy inside' },
          { label: 'Downloads', value: '1,996', note: '811 App Store, 1,185 Google Play, in 15 months' },
          { label: 'Still installed', value: '~117', note: 'Android devices now; peak 221' },
          { label: 'Award', value: 'Emerging Standout', note: 'DFW IT Talent Champion, 2025–26' },
        ]}
        screens={[
          {
            src: '/media/dermat-scan.webp',
            alt: 'Dermat AI scanner: a photo of a face, buttons for gallery and camera, and a skin analysis reading healthy skin with severity none',
            width: 540,
            height: 1170,
            caption: 'Scan: a photo in, a condition and a confidence score out.',
          },
          {
            src: '/media/dermat-analysis.webp',
            alt: 'Dermat AI skin health dashboard: latest scan healthy at 90 percent confidence, a health score trend and a conditions breakdown',
            width: 540,
            height: 1170,
            caption: 'Dashboard: the latest result, the trend, the breakdown.',
          },
          {
            src: '/media/dermat-diary.webp',
            alt: 'Dermat AI skin diary: dated entries for face and hand, each with a photo, a note and recommendations',
            width: 540,
            height: 1170,
            caption: 'Diary: each scan saved with notes, to compare over time.',
          },
          {
            src: '/media/dermat-routine.webp',
            alt: 'Dermat AI personalized skin routine: morning steps, evening routine and recommended product types',
            width: 540,
            height: 1170,
            caption: 'Routine: morning and evening steps for the result.',
          },
          {
            src: '/media/dermat-assistant.webp',
            alt: 'Dermat AI skin assistant: a chat where the assistant answers questions about skin concerns',
            width: 540,
            height: 1170,
            caption: 'Assistant: questions answered in a chat.',
          },
        ]}
        photo={{
          src: '/assets/photos/award-dermat.webp',
          alt: 'Certificate: Emerging Standout Award, DFW IT Talent Champion Competition, to Team Dermat AI, 15 September 2025',
          width: 1600,
          height: 1244,
          caption: 'Emerging Standout Award, DFW IT Talent Champion, September 2025. Entered on my own.',
        }}
        team={<>Just me. I designed and built Dermat AI, connected the AI model, published it on both stores and did the marketing, all on my own.</>}
        blanks={[
          'The social media behind the November–January rise: which platforms, one or two posts with their views, and whether any of it was paid.',
          'How many countries in all: both consoles list them.',
          'A screenshot of the notice that opens from the button at the top of the assistant (or of an answer ending with the note), to replace the current assistant screenshot, whose two greetings show no note.',
          'Why it has no price, in my own words.',
          'One sentence on what the app does and does not claim. The honor list says it recommends treatment; the site says it reports what it may be looking at. Pick one wording for both.',
          'What giving something away taught me that charging for the other apps did not.',
        ]}
      >
        <div className="grid gap-3 lg:grid-cols-2">
          <ChartFrame
            title="Who found it"
            caption="Downloads by month. App Store: “Total Downloads” from App Store Connect. Google Play: “User acquisition, all users” from the Play Console. Both count reinstalls; the last month is as exported. The rise from November to January came from my social media marketing."
          >
            <DownloadsByMonth
              months={dermat.monthlyDownloads}
              appStoreTotal={dermat.appStoreTotal}
              googlePlayTotal={dermat.googlePlayTotal}
              top={400}
              step={100}
            />
          </ChartFrame>
          <ChartFrame
            title="Who kept it"
            caption={<>Google Play “installed audience”: devices with the app installed, averaged by week, from the Play Console. It counts people who kept the app, not new downloads.</>}
          >
            <InstalledOverTime />
          </ChartFrame>
        </div>
        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
          <ChartFrame
            title="Where Android installs came from"
            caption="Share of all 1,185 Google Play installs. The console names its top four countries; the rest are grouped."
          >
            <WhereInstalled rows={dermat.playWhere} />
          </ChartFrame>
          <ChartFrame
          title="When can you tell if it was right?"
          caption="A skin check is a trust good: you can’t tell whether the answer was right until someone qualified tells you, so what a person will pay depends on what they believe about who made it. What does $0 say about a health app from a student team? Every answer Dermat AI gives ends with a note that it is not a medical diagnosis, and the button at the top of the assistant opens the full notice."
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
            An iPhone and Android app that separates a song into its stems, so you can take the vocals out for karaoke or
            mute the piano to practise along. On the App Store and Google Play since August 2024. I chose to meter it
            instead of selling a subscription: every minute we process costs us money, so the cost follows how much a
            person uses. A flat subscription would invite heavy use, and the heaviest users would cost more than they
            paid.
          </>
        }
        links={[
          { href: 'https://soundsplitai.com/', label: 'soundsplitai.com' },
          { href: 'https://apps.apple.com/us/app/sound-split/id6618147632', label: 'On the App Store' },
          { href: 'https://play.google.com/store/apps/details?id=sound.split.ai', label: 'On Google Play' },
        ]}
        facts={[
          { label: 'Downloads', value: '854', note: '606 App Store, 248 Google Play, in 27 months' },
          { label: 'Price', value: '$14.99–$119.99', note: 'a block of minutes; free to download' },
          { label: 'Bought minutes', value: '9', note: 'people, about 1 in 95 downloads; $404.91 spent' },
          { label: 'Award', value: 'Future Star', note: 'DFW IT Association, 2024–25' },
        ]}
        screens={[
          {
            src: '/media/soundsplit-import.webp',
            alt: 'SoundSplit: an empty song screen with an Add Song button and a Subscribe button',
            width: 540,
            height: 1170,
            caption: 'Import: add a song from the phone.',
          },
          {
            src: '/media/soundsplit-stems.webp',
            alt: 'SoundSplit: a grid of stems to choose, such as vocals, drums, bass, piano and guitar, with waveform previews',
            width: 540,
            height: 1170,
            caption: 'Split: choose the stems and preview each one.',
          },
          {
            src: '/media/soundsplit-mixer-hd.webp',
            alt: "SoundSplit's mixer: one slider per instrument above a song called Shape of You",
            width: 540,
            height: 1170,
            caption: 'Mix: one slider per stem.',
          },
          {
            src: '/media/soundsplit-pricing.webp',
            alt: 'SoundSplit Go Premium screen: Basic 50 minutes for $15, Standard 150 minutes for $35, Premium 800 minutes for $120, one-time fees',
            width: 540,
            height: 1170,
            caption: 'Pay: three blocks of minutes, one-time fees.',
          },
          {
            src: '/media/soundsplit-balance.webp',
            alt: 'SoundSplit balance screen: minutes left on a timer, an Add Minutes button, and a history of songs processed',
            width: 540,
            height: 1170,
            caption: 'Meter: minutes left, and what each song used.',
          },
        ]}
        photo={{
          src: '/assets/photos/Future-star-award-soundsplit.webp',
          alt: 'The Future Star Award slide for SoundSplit projected in a hall, listing the team',
          width: 1600,
          height: 1200,
          caption: <>The DFW IT Association&rsquo;s Future Star Award, as it was announced.</>,
        }}
        team={
          <>
            Vaibhav Sykhesh, Raymond Zhou, Bradley Chen, Mihir Kumar and me.
            <br />
            SoundSplit and Dermat AI are published through a family member&rsquo;s company developer account, APIDEED LLC.
          </>
        }
        blanks={[
          'What the 4–3–2 split says about the three prices, in my own words: most buyers chose the cheapest block, but the two Premium buyers brought in most of the money.',
        ]}
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)]">
          <ChartFrame
            title="Who found it"
            caption="Downloads by month. App Store: “Total Downloads” from App Store Connect. Google Play: “User acquisition, all users” from the Play Console. Both count reinstalls, the same measures used for Dermat AI."
          >
            <DownloadsByMonth
              months={soundsplit.monthlyDownloads}
              appStoreTotal={soundsplit.appStoreTotal}
              googlePlayTotal={soundsplit.googlePlayTotal}
              top={100}
              step={25}
            />
          </ChartFrame>
          <ChartFrame
            title="Where Android installs came from"
            caption="Share of all 248 Google Play installs. The console names its top four countries; the rest are grouped."
          >
            <WhereInstalled rows={soundsplit.playWhere} />
          </ChartFrame>
        </div>
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ChartFrame
            title="What a block of minutes costs"
            caption="In-app purchase prices; minutes per block from the app’s purchase screen; buyers by block from the store records. Amounts are before the stores’ fees. Bars share one scale."
          >
            <MinutePacks />
          </ChartFrame>
          <ChartFrame
            title="Who pays"
            caption="The same app, paid for two ways: advertisers pay for people who have not bought minutes, and buying any block of minutes removes the ad. Banner ads have earned under $90 in total."
          >
            <WhoPaysAndroid />
            <p className="mt-6 border-l-2 border-accent/60 pl-4 text-[14.5px] leading-[1.65] text-white/80">
              I can&rsquo;t yet tell whether the banner pushes anyone to buy: I never tracked how many ads a person saw
              before paying. What the numbers do show is the gap. Each free user earned at most about ten cents in ads,
              while each of the 9 buyers spent about $45, so one person who paid was worth roughly four hundred who
              didn&rsquo;t.
            </p>
          </ChartFrame>
        </div>
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <ChartFrame title="What one import does" caption="One song in, separate tracks out. The waveforms are drawn for illustration.">
            <StemSplit />
          </ChartFrame>
          <ChartFrame title="What people thought" caption="One dot per rating. Four ratings is a small sample.">
            <Ratings average="4.0" count={4} store="App Store" />
          </ChartFrame>
        </div>
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
            An affordable one-on-one SAT tutoring business in Urbana that I co-founded: $40 a session, where one-on-one
            SAT tutoring usually costs $80 to $120. Every student gets a weekly and monthly plan. We have worked with more than ten clients, and when the founders could not take on more, we
            hired three tutors.
          </>
        }
        links={[]}
        facts={[
          { label: 'Started', value: <Tbd>[grade 11]</Tbd>, note: 'co-founder and tutor' },
          { label: 'Price', value: '$40', note: 'a session; the usual rate is $80–120' },
          { label: 'Clients', value: '10+', note: 'with personal plans' },
          { label: 'Best gain', value: '+280', note: '1220 to 1510' },
        ]}
        team={<>I co-founded it and tutor; three more tutors joined as it grew.</>}
        blanks={[
          'When it started: the activity list says grade 12, the additional information says grades 11 and 12.',
          'Why $40 when others charge $80–120: what the low price cost you, and what it brought in (more students, word of mouth?).',
          'Where the $80–120 range comes from (local tutors, test-prep companies), so a reader can check it.',
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
        <ChartFrame title="What a session costs" caption="$40 a session against the usual $80–120 for one-on-one SAT tutoring, on one dollar scale.">
          <PriceVsMarket />
        </ChartFrame>
      </CaseShell>

      <CaseShell
        id="cravedeals"
        model="Commission on results"
        captions={['The judges scored it.', 'The market is the harder test.']}
        title={['Crave Deals.', 'Third, then the street.']}
        lede={
          <>
            A coupon company I co-founded, and run as COO, to help small local restaurants level the playing field
            against big chains. We promote a restaurant&rsquo;s deals and take a commission only on what the diners we
            bring in spend, so a restaurant pays nothing unless it works. The plan placed 3rd in Maryland, then 3rd in
            the nation; since then we have pitched restaurants around Frederick and Urbana, venture firms and
            investors.
          </>
        }
        links={[{ href: 'http://crave.deals/', label: 'crave.deals' }]}
        facts={[
          { label: 'Commission', value: <Tbd>[x%]</Tbd>, note: 'of what new diners spend; diners pay nothing' },
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
            the Frederick area.
            <br />
            <Tbd>[Co-founders&rsquo; names, and what each of them does.]</Tbd>
          </>
        }
        blanks={[
          'The commission rate, and why that rate. Delivery apps also take a cut of every order: how does Crave Deals compare, and why would a restaurant prefer it?',
          'How a diner brought in by Crave Deals is counted (a coupon code, a scan at the counter?), since the commission depends on it.',
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
