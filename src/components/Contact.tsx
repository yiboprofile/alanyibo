import { Captions, Headline, MoreLink } from './ui'

const email = '[email removed]'

/* Closes the page the way the hero opens it: full-bleed image, captions at 30%, content pinned to the bottom */
export default function Contact() {
  return (
    <section
      id="write"
      aria-labelledby="h-write"
      className="relative w-full h-screen min-h-[700px] mt-[clamp(96px,10vw,144px)] overflow-hidden"
    >
      <img
        src="/media/tedx-forward.webp"
        alt=""
        width={1280}
        height={720}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-[70%_45%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/75" />
      <div className="absolute inset-0" style={{ background: 'rgba(11,18,16,0.28)' }} />

      <Captions
        left="About the plan, the prices,"
        right="or the numbers."
        className="absolute inset-x-0 top-[30%] z-10 px-6 md:px-12"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-12 pb-14 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-7xl mx-auto">
          <Headline id="h-write" lines={['Questions?', 'Write to me.']} />

          <div className="max-w-sm md:pb-1">
            <p className="text-white/60 text-[14.5px] leading-[1.7] font-light">
              Questions about the plan, the prices or the numbers are welcome at{' '}
              <span className="text-white select-all">{email}</span>.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${email}?subject=A%20question%20about%20your%20products`}
                className="inline-flex items-center px-6 py-2.5 rounded-full text-[13px] font-semibold text-black bg-white transition-all duration-200 hover:bg-white/85"
              >
                Email Alan
              </a>
              <MoreLink href="#home">Back to the top</MoreLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
