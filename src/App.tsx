import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Spectrum from './components/Spectrum'
import ProductBar from './components/ProductBar'
import Cases from './components/Cases'
import People from './components/People'
import Note from './components/Note'
import About from './components/About'
import Contact from './components/Contact'
import { RELEASE } from './release'

function App() {
  // Review aid: shows every blank Yibo still has to fill in. Remove at launch.
  const [showBlanks, setShowBlanks] = useState(true)

  return (
    <>
      <main className={`bg-[#0b1210] min-h-screen ${showBlanks ? '' : 'tbd-plain'}`}>
        <Navbar />
        <Hero />
        <People />
        <Spectrum />
        {/* the product bar sticks only while the cases are on screen */}
        <div>
          <ProductBar />
          <Cases />
        </div>
        {!RELEASE && <Note />}
        <About />
        <Contact />

        <footer className={`flex flex-wrap justify-between gap-x-6 gap-y-2 px-6 md:px-12 pt-7 ${RELEASE ? 'pb-10' : 'pb-[84px]'} text-[13px] leading-[1.6] text-white/50`}>
          <span>Yibo Wang &middot; Urbana High School &middot; Frederick, Maryland &middot; Class of 2027</span>
          <span>Product screenshots as published, October 2026. TEDxSCA Youth photographs by Dong Ho.</span>
          <span className="basis-full">Content and data by Yibo Wang; site designed and built with Claude Code.</span>
        </footer>
      </main>

      {!RELEASE && (
      <label className="fixed right-4 bottom-4 z-60 inline-flex items-center gap-2 min-h-10 pl-3 pr-4 rounded-full bg-[#16211e] text-[13px] font-medium text-white/80 cursor-pointer shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <input
          id="tbd-toggle"
          type="checkbox"
          checked={showBlanks}
          onChange={(e) => setShowBlanks(e.target.checked)}
          className="size-4 accent-[#7fb8a8]"
        />
        Show what&rsquo;s left to write
      </label>
      )}
    </>
  )
}

export default App
