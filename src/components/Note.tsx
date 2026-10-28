import { Headline, Lede, Row, Rows, Split, Tbd, Wrap } from './ui'

const prompts = [
  '[The first price Alan ever set, and what he was guessing at.]',
  '[What the first paying customer changed.]',
  '[What a price measures when there are no customers yet.]',
]

export default function Note() {
  return (
    <Wrap id="note" labelledBy="h-note" className="pt-[clamp(96px,10vw,144px)]">
      <Split heading={<Headline id="h-note" lines={['A note on pricing', 'before users.']} />}>
        <Lede>
          Reserved for a short piece by Alan, 500 to 800 words, on setting prices for things nobody had bought yet. It
          will answer three questions.
        </Lede>
      </Split>

      <Rows className="mt-[clamp(64px,7vw,104px)]">
        <Row label="Three prompts">
          <ol className="max-w-[44rem] flex flex-col gap-7">
            {prompts.map((p, i) => (
              <li
                key={p}
                className="grid grid-cols-[3rem_minmax(0,1fr)] font-display font-semibold text-[clamp(1.2rem,1.6vw,1.375rem)] leading-[1.4] text-white"
              >
                <span className="font-sans text-[13px] font-medium text-white/50 pt-[0.5em]">0{i + 1}</span>
                <span>
                  <Tbd>{p}</Tbd>
                </span>
              </li>
            ))}
          </ol>
        </Row>
      </Rows>
    </Wrap>
  )
}
