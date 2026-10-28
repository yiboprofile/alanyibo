import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import CaseStudy from './components/CaseStudy'
import Note from './components/Note'
import About from './components/About'
import Contact from './components/Contact'
import { cases } from './data/cases'

function App() {
  // Review aid: highlights every blank Alan still has to fill in. Remove at launch.
  const [highlight, setHighlight] = useState(true)

  return (
    <>
      <main className={`bg-[#0b1210] min-h-screen ${highlight ? '' : 'tbd-plain'}`}>
        <Navbar />
        <Hero />
        <Overview />
        {cases.map((c) => (
          <CaseStudy key={c.id} c={c} />
        ))}
        <Note />
        <About />
        <Contact />

        <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 px-6 md:px-12 pt-7 pb-[84px] text-[13px] leading-[1.6] text-white/50">
          <span>Alan Wang &middot; Urbana High School &middot; Frederick, Maryland &middot; Class of 2027</span>
          <span>Product screenshots as published, October 2026. TEDxSCA Youth photographs by Dong Ho.</span>
        </footer>
      </main>

      <label className="fixed right-4 bottom-4 z-60 inline-flex items-center gap-2 min-h-10 pl-3 pr-4 rounded-full bg-[#16211e] text-[13px] font-medium text-white/80 cursor-pointer shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <input
          id="tbd-toggle"
          type="checkbox"
          checked={highlight}
          onChange={(e) => setHighlight(e.target.checked)}
          className="size-4 accent-[#7fb8a8]"
        />
        Highlight the blanks
      </label>
    </>
  )
}

export default App
