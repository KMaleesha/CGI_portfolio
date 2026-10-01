const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our approach', href: '#process' },
  { label: 'About CGI', href: '#about' },
  { label: 'Get in touch', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-topline">
          <span className="footer-eyebrow"><i /> CONNECT GROUP INTERNATIONAL</span>
          <span className="footer-note">Technology with purpose. Built for what’s next.</span>
        </div>

        <div className="footer-main">
          <div className="footer-invitation">
            <p className="footer-kicker">HAVE AN IDEA IN MIND?</p>
            <a className="footer-headline" href="#contact">Let’s build<br /><em>what’s next.</em><span aria-hidden="true">↗</span></a>
          </div>
          <div className="footer-side">
            <p>Big plans start with a conversation. Tell us what you’re working on and let’s find a way forward.</p>
            <a className="footer-email" href="mailto:maleemapalagama@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="#home" className="footer-signature" aria-label="Connect Group International, back to top">
            <span className="footer-monogram">CGI<span>®</span></span>
            <span className="signature-caption">CONNECT GROUP<br />INTERNATIONAL</span>
          </a>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <span className="footer-copyright">© {new Date().getFullYear()} CGI</span>
        </div>
      </div>
    </footer>
  )
}
