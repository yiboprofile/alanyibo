import type { Case } from '../components/CaseStudy'
import { PlanPages, Questions } from '../components/CaseParts'
import PriceChart from '../components/PriceChart'
import { Figures, InlineLink, Small, Tbd } from '../components/ui'

export const cases: Case[] = [
  {
    id: 'cravedeals',
    name: 'CraveDeals',
    captions: ['The judges scored it.', 'The market never did.'],
    title: ['CraveDeals.', 'Third, then zero.'],
    lede: (
      <>
        In 2025 three of us from Urbana&rsquo;s FBLA chapter wrote a business plan for a coupon platform for small
        restaurants in Frederick, Montgomery and Baltimore. It placed 3rd in Maryland, then 3rd in the nation. Then we
        tried to start the market, and it did not start.
      </>
    ),
    link: { href: 'http://crave.deals/', label: 'crave.deals' },
    product: {
      kind: 'shot',
      src: '/media/crave-top.webp',
      alt: 'The top of the CraveDeals prototype: a banner reading Your Next Meal Awaits, with a town picker',
      width: 1400,
      height: 680,
      caption: 'The CraveDeals prototype, still online. The restaurants on it are samples, not clients.',
    },
    photo: {
      src: '/assets/photos/fbla-3.webp',
      alt: 'Alan, right, with two FBLA teammates beside the Welcome to the 2025 National Leadership Conference sign',
      width: 1280,
      height: 1218,
      position: '100% 50%',
      caption: 'FBLA National Leadership Conference, Anaheim, 2025. Alan is on the right.',
    },
    rows: [
      {
        label: 'Where the problem came from',
        body: (
          <p>
            The question I was working on: what does it cost a small restaurant to reach one new customer through a
            delivery app, and what would the same customer cost through a coupon?{' '}
            <Tbd>
              [How the question came up: which restaurant owners Alan talked to around Frederick, what they said about
              commissions and regulars, and when.]
            </Tbd>
          </p>
        ),
      },
      {
        label: 'The product',
        body: (
          <p>
            A website where a diner picks a town, browses deals, saves or prints a coupon and shows it at the counter,
            with a sign-in for restaurants to post their own offers. The prototype is still online at{' '}
            <InlineLink href="http://crave.deals/">crave.deals</InlineLink>.
          </p>
        ),
      },
      {
        label: 'The decision',
        body: (
          <>
            <p>Three questions the plan had to answer, and where its answers are:</p>
            <Questions
              items={[
                {
                  q: 'Why would a restaurant give a discount at all?',
                  a: (
                    <>
                      A coupon is a price cut that only some people take, and the people who take it are mostly the ones
                      who would not have come at full price.{' '}
                      <Tbd>[The plan&rsquo;s answer and the figures it used, with the page number.]</Tbd>
                    </>
                  ),
                },
                {
                  q: 'What should a restaurant pay us, and for what?',
                  a: (
                    <Tbd>
                      [What the plan charged restaurants: per coupon redeemed, per month, or a share of the discount,
                      and why that price.]
                    </Tbd>
                  ),
                },
                {
                  q: 'Which side joins first, diners or restaurants?',
                  a: (
                    <>
                      Neither gains much from an empty platform.{' '}
                      <Tbd>[The plan&rsquo;s launch sequence, with the page number.]</Tbd>
                    </>
                  ),
                },
              ]}
            />
          </>
        ),
      },
      {
        label: 'What the numbers say',
        body: (
          <>
            <Figures
              items={[
                { value: '3rd', label: 'in the nation, FBLA Business Plan Event, 2025' },
                { value: '3rd', label: 'in Maryland, the same year' },
                { value: '0', label: 'restaurants signed' },
                { value: '0', label: 'coupons redeemed' },
              ]}
            />
            <p>
              After the conference, <Tbd>[how many restaurants we approached, over which months]</Tbd>, no restaurant
              signed up and no coupon was redeemed, and we stopped. The site stays up as a record.
            </p>
            <PlanPages />
          </>
        ),
      },
      {
        label: 'What it taught me',
        body: (
          <p>
            The name for what happened is a cold-start problem: diners won&rsquo;t visit a site with no deals, and
            restaurants won&rsquo;t post deals on a site with no diners.{' '}
            <Tbd>
              [In Alan&rsquo;s words, two to four sentences: what the cold start looked like from a restaurant
              owner&rsquo;s side, and what he thinks would have started it.]
            </Tbd>
          </p>
        ),
      },
      {
        label: 'If I did it again',
        body: (
          <p>
            <Tbd>[In Alan&rsquo;s words: what he would do differently, and what he would keep.]</Tbd>
          </p>
        ),
      },
      {
        label: 'Who did what',
        body: (
          <>
            <p>
              A team of three. I wrote the market analysis and the financial sections, visited restaurants in the
              Frederick area, and built part of the site. <Tbd>[Teammate names, and what each of them did.]</Tbd>
            </p>
            <Small>
              Stack: <Tbd>[framework, hosting]</Tbd>
            </Small>
          </>
        ),
      },
    ],
  },

  {
    id: 'holidayhelperai',
    name: 'HolidayHelperAI',
    captions: ['I set the prices.', 'More than ten people paid.'],
    title: ['HolidayHelperAI.', 'Three tiers.'],
    lede: (
      <>
        A web app for planning a trip: an AI assistant, travel plans, an inspiration board and a journal. I led the team
        of five that built it, <Tbd>[in 2023, to confirm]</Tbd>, and it won the DCIA Stellar Young Achiever Award.
      </>
    ),
    link: { href: 'https://holidayhelperai.com/', label: 'holidayhelperai.com' },
    product: {
      kind: 'shot',
      src: '/media/hhai-pricing.webp',
      alt: 'The HolidayHelperAI pricing page: Standard $2 a month or $20 a year, Premium $4 or $40, Enterprise $8.99 or $80.99',
      width: 1280,
      height: 980,
      caption: 'holidayhelperai.com/pricing, October 2026.',
    },
    photo: {
      src: '/assets/photos/award-holidayhelper.webp',
      alt: 'The DCIA Stellar Young Achiever Award slide for HolidayHelperAI, naming Alan Wang as team leader',
      width: 1386,
      height: 782,
      position: '0 50%',
      caption: 'The DCIA award slide, with the team listed.',
    },
    rows: [
      {
        label: 'Where the problem came from',
        body: (
          <p>
            <Tbd>[Who the first users were meant to be, and how the problem came up.]</Tbd>
          </p>
        ),
      },
      {
        label: 'The product',
        body: (
          <p>
            Sign up, plan a trip, keep a journal of it. Still online at{' '}
            <InlineLink href="https://holidayhelperai.com/">holidayhelperai.com</InlineLink>.
          </p>
        ),
      },
      {
        label: 'The decision',
        body: (
          <>
            <p>
              I set the prices. Three tiers: Standard at $2 a month or $20 a year; Premium at $4 or $40, which adds
              albums; Enterprise at $8.99 or $80.99, which adds an event calendar.
            </p>
            <PriceChart
              tiers={[
                {
                  name: 'Standard',
                  monthly: { price: '$2', note: 'a month', share: 0.222 },
                  yearly: { price: '$20', note: 'a year, the price of 10 months', share: 0.247 },
                },
                {
                  name: 'Premium, adds albums',
                  monthly: { price: '$4', note: 'a month', share: 0.445 },
                  yearly: { price: '$40', note: 'a year, the price of 10 months', share: 0.494 },
                },
                {
                  name: 'Enterprise, adds a calendar',
                  monthly: { price: '$8.99', note: 'a month', share: 1 },
                  yearly: { price: '$80.99', note: 'a year, the price of 9 months', share: 1 },
                },
              ]}
              caption="Prices on holidayhelperai.com in October 2026. A year costs ten months on the first two tiers and nine on the third."
            />
            <p>
              The tiers are one product with features taken away, so what a person pays depends on which feature they
              can&rsquo;t do without.{' '}
              <Tbd>
                [Why three tiers and not one price, why $2, and what &ldquo;Enterprise&rdquo; meant to a team of five
                high-school students, in Alan&rsquo;s words.]
              </Tbd>
            </p>
          </>
        ),
      },
      {
        label: 'What the numbers say',
        body: (
          <>
            <Figures
              items={[
                { value: '10+', label: 'people have paid for it' },
                { value: <Tbd>[N]</Tbd>, label: 'sign-ups, period to come' },
                { value: '3', label: 'tiers, and a yearly price for each' },
              ]}
            />
            <p>
              More than ten people have paid for it.{' '}
              <Tbd>[The exact count by tier, monthly or yearly, and the period.]</Tbd>{' '}
              <Tbd>[Sign-ups and active users over the same period.]</Tbd>
            </p>
          </>
        ),
      },
      {
        label: 'What it taught me',
        body: (
          <p>
            <Tbd>
              [In Alan&rsquo;s words: what the people who paid taught him about the price, and which tier they chose.]
            </Tbd>
          </p>
        ),
      },
      {
        label: 'If I did it again',
        body: (
          <p>
            <Tbd>[In Alan&rsquo;s words: what he would change about the tiers, and what he would keep.]</Tbd>
          </p>
        ),
      },
      {
        label: 'Who did what',
        body: (
          <>
            <p>
              I led the team of five: William Liu, Raymond Zhou, Owen Liu and Hanna Lee, with James Wang as advisor.{' '}
              <Tbd>[Who built what.]</Tbd>
            </p>
            <Small>
              Stack: <Tbd>[framework, hosting, the AI service behind the assistant]</Tbd>
            </Small>
          </>
        ),
      },
    ],
  },

  {
    id: 'soundsplit',
    name: 'SoundSplit',
    captions: ['Free to download.', 'Every minute has a cost.'],
    title: ['SoundSplit.', 'Sold by the minute.'],
    lede: (
      <>
        An iPhone app that separates a song into vocals, drums and instruments, each on its own slider. On the App Store
        since August 2024, built with five other students; it won the DFW IT Association&rsquo;s Future Star Award.
      </>
    ),
    link: { href: 'https://apps.apple.com/us/app/sound-split/id6618147632', label: 'On the App Store' },
    product: {
      kind: 'phone',
      src: '/media/soundsplit-mixer.webp',
      alt: "SoundSplit's mixer screen: ten sliders, one per instrument, above a song called Shape of You",
      width: 900,
      height: 1950,
      caption: 'The mixer: one slider per stem.',
    },
    photo: {
      src: '/assets/photos/Future-star-award-soundsplit.webp',
      alt: 'The Future Star Award slide for SoundSplit projected in a hall, listing the team',
      width: 1600,
      height: 1200,
      caption: <>The DFW IT Association&rsquo;s Future Star Award, as it was announced.</>,
    },
    rows: [
      {
        label: 'Where the problem came from',
        body: (
          <p>
            <Tbd>[Who the app was for, and how the problem came up.]</Tbd>
          </p>
        ),
      },
      {
        label: 'The product',
        body: (
          <p>
            Free to download; the separation itself is paid for by the minute of audio you import. On the{' '}
            <InlineLink href="https://apps.apple.com/us/app/sound-split/id6618147632">App Store</InlineLink>.
          </p>
        ),
      },
      {
        label: 'The decision',
        body: (
          <>
            <p>
              I chose to meter it instead of selling a subscription: Basic at $14.99, Standard at $34.99, Premium at
              $119.99, each buying a block of minutes. Metering ties what a person pays to how much they use, which
              matters when every minute processed has a cost.
            </p>
            <PriceChart
              tiers={[
                { name: 'Basic', monthly: { price: '$14.99', note: 'a block of minutes', share: 0.125 } },
                { name: 'Standard', monthly: { price: '$34.99', note: 'a block of minutes', share: 0.292 } },
                { name: 'Premium', monthly: { price: '$119.99', note: 'a block of minutes', share: 1 } },
              ]}
              caption={
                <>
                  In-app purchases on the App Store, October 2026. Each buys <Tbd>[N, N and N minutes]</Tbd>.
                </>
              }
            />
            <p>
              <Tbd>
                [Why metered rather than a subscription, how the three amounts and the minutes in each were set, in
                Alan&rsquo;s words.]
              </Tbd>
            </p>
          </>
        ),
      },
      {
        label: 'What the numbers say',
        body: (
          <>
            <Figures
              items={[
                { value: '4.0', label: 'stars from 4 ratings on the App Store' },
                { value: <Tbd>[N]</Tbd>, label: 'purchases, by tier and period' },
                { value: <Tbd>[N]</Tbd>, label: 'downloads, period to come' },
              ]}
            />
            <p>
              A few people have bought minutes. <Tbd>[Purchases by tier, the revenue, and the period.]</Tbd>
            </p>
          </>
        ),
      },
      {
        label: 'What it taught me',
        body: (
          <p>
            <Tbd>[In Alan&rsquo;s words: what the buyers chose, and what that said about the three amounts.]</Tbd>
          </p>
        ),
      },
      {
        label: 'If I did it again',
        body: (
          <p>
            <Tbd>[In Alan&rsquo;s words: what he would change, and what he would keep.]</Tbd>
          </p>
        ),
      },
      {
        label: 'Who did what',
        body: (
          <>
            <p>
              Built with Vaibhav Sykhesh, Raymond Zhou, Bradley Chen and Mihir Kumar. <Tbd>[Who did what.]</Tbd>
            </p>
            <Small>
              Sound Split and Dermat AI are published through a family member&rsquo;s company developer account, APIDEED
              LLC.
            </Small>
            <Small>
              Stack: <Tbd>[framework, the separation model, where it runs]</Tbd>
            </Small>
          </>
        ),
      },
    ],
  },

  {
    id: 'dermat',
    name: 'Dermat AI',
    captions: ['A skin check is a trust good.', 'What does $0 say?'],
    title: ['Dermat AI.', 'No price at all.'],
    lede: (
      <>
        An iPhone app that photographs skin, reports what it may be looking at with a confidence score, keeps a history
        and compares scans. On the App Store since August 2025, free, with nothing to buy inside.
      </>
    ),
    link: { href: 'https://apps.apple.com/us/app/dermat-ai/id6748587012', label: 'On the App Store' },
    product: {
      kind: 'phone',
      src: '/media/dermat-dashboard.webp',
      alt: "Dermat AI's skin health dashboard: a latest scan reading healthy skin at 90 percent confidence, a trend line and a conditions breakdown",
      width: 512,
      height: 1104,
      caption: 'The dashboard: the latest scan, the trend, the history.',
    },
    photo: {
      src: '/assets/photos/award-dermat.webp',
      alt: 'Certificate: Emerging Standout Award, DFW IT Talent Champion Competition, to Team Dermat AI, 15 September 2025',
      width: 1600,
      height: 1244,
      caption: 'Emerging Standout Award, DFW IT Talent Champion Competition, September 2025.',
    },
    rows: [
      {
        label: 'Where the problem came from',
        body: (
          <p>
            <Tbd>[Who the app was for, and how the problem came up.]</Tbd>
          </p>
        ),
      },
      {
        label: 'The product',
        body: (
          <p>
            Scan, read the report, keep the history. Rated 18+ on the{' '}
            <InlineLink href="https://apps.apple.com/us/app/dermat-ai/id6748587012">App Store</InlineLink> because it
            deals with health. The team won the Emerging Standout Award at the DFW IT Talent Champion Competition in
            September 2025.
          </p>
        ),
      },
      {
        label: 'The decision',
        body: (
          <>
            <p>
              This one has no price. <Tbd>[Why, in Alan&rsquo;s words.]</Tbd>
            </p>
            <p>
              A skin check is a trust good: you can&rsquo;t tell whether the answer was right until someone qualified
              tells you, so what a person will pay depends on what they believe about who made it. What does $0 say
              about a health app from a student team, and what should such an app promise, and not promise?{' '}
              <Tbd>
                [What the app says it does and does not do, from its own screens, and what Alan thinks it should say.]
              </Tbd>
            </p>
          </>
        ),
      },
      {
        label: 'What the numbers say',
        body: (
          <Figures
            items={[
              { value: '$0', label: 'the price, with nothing to buy inside' },
              { value: '5.0', label: 'stars from 1 rating on the App Store' },
              { value: <Tbd>[N]</Tbd>, label: 'downloads, period to come' },
            ]}
          />
        ),
      },
      {
        label: 'What it taught me',
        body: (
          <p>
            <Tbd>
              [In Alan&rsquo;s words: what giving something away taught him that charging for the other two did not.]
            </Tbd>
          </p>
        ),
      },
      {
        label: 'If I did it again',
        body: (
          <p>
            <Tbd>[In Alan&rsquo;s words: what he would change, and what he would keep.]</Tbd>
          </p>
        ),
      },
      {
        label: 'Who did what',
        body: (
          <>
            <p>
              <Tbd>[Teammates, and who did what.]</Tbd>
            </p>
            <Small>
              Stack: <Tbd>[framework, the model, where it runs]</Tbd>
            </Small>
          </>
        ),
      },
    ],
  },
]
