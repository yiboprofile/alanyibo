# Alan Wang · three cinematic directions

One brief, three treatments. Every direction uses the same real content (the hero intro, the four products, the record, the contact line) and only Alan's own media, so the comparison is about design, not copy.

**Brief.** Alan Wang, a senior at Urbana High School in Frederick, Maryland, wrote one business plan and built three apps with student teams. The page shows what each one charged, who paid, and what that says about the people on the other side. Visitors: admissions readers, competition judges, possible mentors and collaborators. Scope: hero plus a short landing page (cases, record, contact). Output: one self-contained `index.html` per direction, no build step.

Shared copy

- H1: "Some products sell. / I want to know why." (draft headline, to be approved by Alan)
- Sub: "I'm Alan Wang, a senior at Urbana High School in Frederick, Maryland. With student teams I wrote one business plan and built three apps. Each one answered the same question differently: who pays, and how?"
- Primary CTA: "Read the four cases". Secondary: "About Alan". Nav: Cases · Note · About · Write to Alan.
- Products, in price order: Dermat AI ($0, free, 5.0 from 1 rating) · SoundSplit ($14.99–$119.99 a block of minutes, 4.0 from 4 ratings) · HolidayHelperAI ($2–$8.99 a month, 10+ people paid) · CraveDeals (the restaurant pays, price to come, 3rd in the nation, 0 restaurants signed).

---

## A · The Crowd

**Aesthetic:** nocturnal, measured, documentary.
**Signature:** the street-crowd film runs full-bleed with a camera-like depth-of-field band at the bottom (stepped backdrop blur 2/4/8/16px over the lower 55%), and the serif headline exhales in word by word. Below, the four cases are dealt over each other as sticky stacking cards, each led by a giant price numeral.

**Fonts.** Instrument Serif 400 + italic (H1, price numerals) · Geist 300/400/500 (UI, body) · Geist Mono 400 (labels).

**Tokens.**
```css
--bg:#070808; --fg:#F2F1EC; --muted:rgba(242,241,236,.62); --faint:rgba(242,241,236,.4);
--line:rgba(242,241,236,.14); --card:#0E1010; --accent:none;  /* monochrome: the footage is the colour */
```

**Media.** `hero.mp4` (1280×720, 10 s, street crowd from above; the lone figure in a dark coat sits at centre, the bottom 30% is pale pavement). `object-fit:cover; object-position:50% 38%`, settles from `scale(1.06)` to 1 over 1.8s `cubic-bezier(.16,1,.3,1)`. Scrims: vertical `rgba(7,8,8,.45) → 0 @42% → .78 @100%`, plus the stepped bottom blur. Contact band: `tedx-audience.webp`, dimmed to 35%.

**Hero (100svh, min 680px).**

| Element | Copy | Style | Motion |
|---|---|---|---|
| Nav | Alan Wang ✦ · Cases · Note · About · [Write to Alan] | wordmark Instrument Serif 26px; links Geist 13.5px at 70%; CTA liquid-glass pill 10×20px | fade down 0→1, y −12→0, 0.8s, delay 0.1s |
| Eyebrow (top 26%, left) | FREDERICK, MD — CLASS OF 2027 | Geist Mono 11px, +.2em, 50% | fade 0.6s, delay 0.3s |
| Eyebrow (top 26%, right) | 01 PLAN · 03 APPS | same, right aligned | same |
| H1 (bottom-left) | Some products *sell.* / I want to know *why.* | Instrument Serif 400, `clamp(54px,8.6vw,136px)`, lh .9, −.035em; italic words at 62% | word blur-in: blur 10→0, y 50→−5→0, 0.7s, stagger 90ms, base 0.35s |
| Sub (bottom-right, 360px) | shared sub | Geist 300 15.5px/1.6 at 62% | rise y 24→0, 0.8s, delay 1.0s |
| CTAs | Read the four cases · About Alan | white pill 13.5px/500 12×24px with arrow disc; text link with arrow | delay 1.15s |
| Bottom strip | Dermat AI · SoundSplit · HolidayHelperAI · CraveDeals | Geist Mono 11px at 45%, top hairline | delay 1.3s |

**Cases (stacking cards).** Intro: label "// Four ways to set a price", h2 Instrument Serif `clamp(40px,5.6vw,84px)`. Four sticky slots (`height:88vh; top:0`), card `top: i×26px`, radius 40px, 1px `--line` border on `--card`, padding `clamp(22px,3vw,44px)`. Grid `minmax(0,1.05fr) minmax(0,1fr)`: left = mono index "01 / 04 · FREE", price numeral Instrument Serif `clamp(96px,13vw,200px)` lh .8 −.04em, product name 28px, one-line story, two result chips (mono 11px outline pills); right = product image in a 28px-radius panel. Scale per card `1 − (n−1−i)×0.035` interpolated over section progress.

**Close.** Full-bleed audience photo, H2 "Questions? / Write to *me.*" bottom-left, email shown as selectable text, white pill "Email Alan".

**Responsive.** <768: H1 `clamp(46px,12vw,64px)`, sub moves under H1, nav links hidden (CTA stays), stacking cards become plain stacked cards (no sticky), image above text. Reduced motion: all final states, no scaling.

---

## B · The Stage

**Aesthetic:** warm, theatrical, confident.
**Signature:** the TEDx stage film plays full-bleed. As you scroll, it shrinks into a framed "slide" (stage inset 0 → 5vw, radius 0 → 28px, footage dims to 30%) and Alan's four cases play on that screen as a talk: one slide per product, with a speaker-style counter "02 / 05" and a progress rail.

**Fonts.** Anton 400 (uppercase display, prices) · Inter Tight 300/400/500 (UI, body) · IBM Plex Mono 400 (counters).

**Tokens.**
```css
--bg:#0B0706; --fg:#FFF6EE; --muted:rgba(255,246,238,.64); --faint:rgba(255,246,238,.4);
--line:rgba(255,246,238,.16); --accent:#FFB547;  /* stage light; only on: counter, progress rail, primary CTA hover */
```

**Media.** `tedx-hero.mp4` (1280×720, 7.9 s, stage with screen at top centre, Alan at right of centre, audience heads along the bottom 18%), poster `tedx-hero-poster.webp`. `object-position:50% 30%`. Scrim: `to bottom rgba(11,7,6,.55) → 0 @30% → 0 @55% → .92 @100%`.

**Hero (inside the sticky stage, first 100vh of a 520vh runway).**

| Element | Copy | Style | Motion |
|---|---|---|---|
| Nav | ALAN WANG · Cases · Note · About · [Write to Alan] | wordmark Anton 20px +.04em; links Inter Tight 13.5px at 72% | fade down, 0.8s |
| Chip (top-left 22%) | ● TEDxSCA YOUTH, 2026 | Plex Mono 11px +.16em in a 1px `--line` pill, dot in accent | fade 0.6s, delay 0.3s |
| H1 (bottom, left) | SOME PRODUCTS SELL. / I WANT TO KNOW WHY. | Anton, `clamp(52px,9.2vw,150px)`, lh .88, +.005em; line 2 at 100%, line 1 at 70% | masked line rise from 110%, 0.9s, stagger 120ms, base 0.35s |
| Sub (bottom-right, 380px) | shared sub | Inter Tight 300 16px/1.6 at 64% | rise, delay 0.9s |
| CTAs | Read the four cases · About Alan | cream pill (`--fg` bg, `#0B0706` text) 13.5px/500, hover bg accent; text link | delay 1.05s |
| Scroll cue | SCROLL TO START THE TALK ↓ | Plex Mono 10.5px at 45%, bottom centre | fade, delay 1.4s |

**Talk choreography** (`p` = runway progress 0→1, smoothed with lerp .14):

| p | What happens |
|---|---|
| 0 → .12 | Hero copy fades/sinks (+60px); stage inset 0→5vw, radius 0→28px, footage brightness 1→.3, blur 0→6px |
| .12 → .28 | Slide 01 "FOUR PRODUCTS. / FOUR PRICES." with the four prices in a row |
| .28 → .46 | Slide 02 Dermat AI · $0 |
| .46 → .64 | Slide 03 SoundSplit · $14.99+ |
| .64 → .82 | Slide 04 HolidayHelperAI · $2+ |
| .82 → 1 | Slide 05 CraveDeals · ? (3rd in the nation, 0 restaurants signed) |

Each slide: model label (Plex Mono 11px, accent), price in Anton `clamp(96px,16vw,260px)` lh .82, product name Inter Tight 500 26px, one sentence at 70%, outcome line. Windows crossfade over 4% of p with y 30→0. Counter "0N / 05" and a 5-segment rail bottom-left of the frame.

**After the talk.** "Notes from the record" (four rows: year, title, one line, Inter Tight) and the close: H2 "QUESTIONS? / WRITE TO ME." over the audience photo.

**Responsive.** <768: runway 420vh, inset to 12px, prices `clamp(84px,24vw,120px)`, sub under H1. Reduced motion: no sticky stage; slides render as a normal vertical list.

---

## C · The Price Board

**Aesthetic:** crisp, kinetic, analytical. Light page.
**Signature:** a split-flap price board, like a station departures display. Four rows (product, how it charges, price, result) flip character by character into place on load; hovering a row flips it again. The board is the hero object; no video.

**Fonts.** Geist 400/500 (H1, body) · Geist Mono 400/500 (board, labels).

**Tokens.**
```css
--bg:#EEEEEA; --ink:#101211; --muted:rgba(16,18,17,.6); --faint:rgba(16,18,17,.4); --line:rgba(16,18,17,.14);
--board:#0F1010; --tile:#1A1C1B; --flap:#F3F2EC; --accent:#F2C230;  /* only on: status lamps, the "?" tile, CTA arrow disc */
```

**Hero (min 100svh).** 12-column grid, gutter 24px, max 1320px.

| Element | Copy | Style | Motion |
|---|---|---|---|
| Nav | Alan Wang · Cases · Note · About · [Write to Alan] | Geist 500 15px wordmark; links 13.5px at 60%; black pill CTA | fade 0.6s |
| Eyebrow | ● LIVE · WHO PAYS, AND HOW | Geist Mono 11px +.18em, lamp dot accent | fade, delay 0.15s |
| H1 (cols 1–8) | Some products sell. / I want to know why. | Geist 500, `clamp(44px,6.6vw,108px)`, lh .95, −.05em; line 2 at 42% | masked line rise, 0.9s, stagger 110ms |
| Sub (cols 9–12, aligned to H1 baseline) | shared sub | Geist 400 15.5px/1.6 at 60% | rise, delay 0.5s |
| Board (full width) | header + 4 rows | `--board` panel, radius 18px, padding 18px; tiles Geist Mono 500 `clamp(15px,1.55vw,22px)`, each char in a 0.78em×1.32em tile on `--tile`, radius 3px, 1px mid hairline `rgba(0,0,0,.55)` | per row delay 0.6 + i×0.18s; each char cycles 6–14 random glyphs at 38ms, a 90ms `rotateX(−80deg→0)` flap on each change |
| CTAs | Read the four cases · About Alan | black pill with accent arrow disc; text link | delay 1.2s |

Board columns: `minmax(0,1.25fr) minmax(0,1.25fr) minmax(0,.8fr) minmax(0,1.4fr) 28px` (product · how it charges · price · result · lamp). Header row in Geist Mono 10.5px at 45% of `--flap`. On <900px the board becomes four stacked tickets (product + price on one line, model and result below).

**Below.** "The ledger": 2×2 grid of case cards on white (`#FAFAF8`, radius 24px, `0 1px 2px rgba(16,18,17,.06), 0 8px 24px rgba(16,18,17,.06)`), each with the product image, a mono model label, Geist 500 26px name, price and two-line story. Then the record as a horizontal year rail (2023 → 2026), then a black contact band with the email in Geist Mono.

**Reduced motion.** Board renders final text immediately, no flips.
