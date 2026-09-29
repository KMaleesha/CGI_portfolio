import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Notes', id: 'blogs' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ;[...links.map((link) => link.id), 'contact'].forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#home" className="brand-mark" aria-label="Maleesha, home" onClick={() => setOpen(false)}>
          <span className="brand-monogram">M<span>.</span></span>
          <span className="brand-copy"><strong>MALEESHA</strong><small>CREATIVE DEVELOPER</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'nav-link nav-link--active' : 'nav-link'}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contact"><span>Let’s talk</span><span aria-hidden="true">↗</span></a>

        <button
          className={`menu-toggle ${open ? 'menu-toggle--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
                <span className="mobile-index">0{index + 1}</span>{link.label}<span className="mobile-arrow">↗</span>
              </a>
            ))}
            <a className="mobile-cta" href="#contact" onClick={() => setOpen(false)}>Start a conversation <span>↗</span></a>
          </nav>
        </div>
      )}
    </header>
  )
}
