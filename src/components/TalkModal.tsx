import { useEffect, useRef, useState } from 'react'

const VIDEO_ID = 'PbbQxn38bcQ'
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )
}

/* "Watch the talk" opens the TEDx video in a dialog on the page instead of leaving it.
   The player only loads while the dialog is open, so closing it stops the video. */
export default function WatchTalk() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <PlayIcon />
        Watch the talk
      </button>

      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false) // a click on the dark backdrop closes it
        }}
        aria-label="TEDxSCA Youth talk: Is Gen-Z Cooked?"
        className="m-auto w-[min(960px,calc(100vw-32px))] max-w-none bg-transparent p-0 text-white backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4 pb-3">
          <span className="text-[14px] font-medium text-white/85">
            Is Gen-Z Cooked? &middot; TEDxSCA Youth, 2026{' '}
            <span className="text-white/50">&middot; on the official TEDx Talks channel</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {/* shown behind the player, and visible on its own wherever embedding is blocked */}
          <a
            href={WATCH_URL}
            target="_blank"
            rel="noopener"
            className="absolute inset-0 grid place-items-center text-[14px] text-white/70 underline underline-offset-4"
          >
            Watch on YouTube
          </a>
          {open && (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Is Gen-Z Cooked? Yibo Wang, TEDxSCA Youth"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </dialog>
    </>
  )
}
