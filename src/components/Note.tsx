import { Headline, Label, Lede, Split, Tbd, Wrap } from './ui'

/* The essay will answer these in order: the first guess, the first customer, the question underneath */
const prompts = [
  'The first price Alan ever set, and what he was guessing at.',
  'What the first paying customer changed.',
  'What a price measures when there are no customers yet.',
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

      <ol className="mt-[clamp(48px,5vw,72px)] grid gap-3 md:grid-cols-3">
        {prompts.map((p, i) => (
          <li key={p} className="bg-panel p-6 md:p-8 flex flex-col gap-8">
            <Label className="text-accent">Question {i + 1} of 3</Label>
            <p className="font-display font-semibold text-[clamp(1.15rem,1.6vw,1.375rem)] leading-[1.4] text-white">
              <Tbd>{p}</Tbd>
            </p>
          </li>
        ))}
      </ol>
    </Wrap>
  )
}
