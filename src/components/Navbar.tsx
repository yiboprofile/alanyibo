const navLinks = [
  { label: 'People', href: '#people' },
  { label: 'Cases', href: '#cases' },
  { label: 'Pricing note', href: '#note' },
  { label: 'About', href: '#about' },
]

function AnchorMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="7.25" stroke="white" strokeWidth="1.3" strokeOpacity="0.9" />
      <circle cx="9" cy="9" r="2" fill="white" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2.5 shrink-0">
        <AnchorMark />
        <span
          className="text-white text-[15px] font-semibold tracking-[0.01em]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Alan Wang
        </span>
      </a>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-9">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Contact */}
      <a
        href="#write"
        className="shrink-0 text-[13px] font-medium text-white/85 hover:text-white transition-colors duration-200"
      >
        Contact
      </a>
    </nav>
  )
}
