import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'About Us', id: 'about' },
  { label: 'Blogs', id: 'blogs' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ;[...links.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-lg font-bold text-white shadow-md shadow-brand/30">
            M
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            Maleesha
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.id
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-orange-50 text-ink'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-ink'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand" />
                )}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full border-2 border-brand px-5 py-2 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/30 md:inline-flex"
        >
          Let&apos;s Talk
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-lg text-ink hover:bg-slate-100 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-medium ${
                  active === l.id ? 'bg-orange-50 text-ink' : 'text-slate-600'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-brand px-5 py-3 text-center font-semibold text-white"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}