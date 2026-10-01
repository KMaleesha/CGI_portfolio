const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit footer-orbit--one" />
      <div className="footer-orbit footer-orbit--two" />
      <div className="footer-inner">
        <div className="footer-topline"><span>HAVE A GOOD ONE IN MIND?</span><span className="footer-status"><i /> AVAILABLE FOR SELECT PROJECTS</span></div>
        <div className="footer-main">
          <div>
            <p className="footer-kicker">A LITTLE MAGIC STARTS WITH A HELLO.</p>
            <a className="footer-headline" href="mailto:hello@maleesha.dev">Let’s make<br /><em>something matter.</em><span>↗</span></a>
          </div>
          <div className="footer-side">
            <p>Have a project, a question, or just want to say hi? My inbox is always open.</p>
            <a className="footer-email" href="mailto:hello@maleesha.dev">hello@maleesha.dev <span>↗</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="#home" className="footer-signature">M<span>.</span> <span className="signature-caption">MALEESHA · CREATIVE DEVELOPER</span></a>
          <div className="footer-socials">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<span>↗</span></a>)}</div>
          <span className="footer-copyright">© {new Date().getFullYear()} · MADE WITH INTENTION</span>
        </div>
      </div>
    </footer>
  )
}
