export default function Home() {
  return (
    <section id="home" className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__wash" aria-hidden="true" />

      <div className="home-hero__inner">
        <div className="home-hero__content">
          <p className="home-eyebrow"><span /> CONNECT GROUP INTERNATIONAL <b>·</b> DIGITAL STUDIO</p>
          <h1 id="home-title">Ideas deserve<br />to move <em>forward.</em></h1>
          <p className="home-intro">
            We bring strategy, design, and technology together to turn ambitious ideas into useful digital experiences.
          </p>

          <div className="home-actions">
            <a className="home-primary" href="#contact">Let’s talk about your project <span aria-hidden="true">↗</span></a>
            <a className="home-secondary" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
          </div>

          <div className="home-proof">
            <span className="home-proof__mark" aria-hidden="true">CGI<span>®</span></span>
            <span>One connected team<br /><strong>From first thought to launch</strong></span>
          </div>
        </div>

        <div className="home-art" role="img" aria-label="CGI brings strategy, design, and technology together to create meaningful progress">
          <div className="home-art__top"><span>IDEAS INTO IMPACT</span><span>01 — 03</span></div>
          <div className="home-art__orbit home-art__orbit--outer" />
          <div className="home-art__orbit home-art__orbit--inner" />
          <div className="home-art__spark home-art__spark--one" />
          <div className="home-art__spark home-art__spark--two" />
          <div className="home-art__core"><span>CGI</span><i>®</i><small>CONNECT<br />POSSIBILITY</small></div>
          <span className="home-art__label home-art__label--strategy">01 <b>STRATEGY</b></span>
          <span className="home-art__label home-art__label--design">02 <b>DESIGN</b></span>
          <span className="home-art__label home-art__label--technology">03 <b>TECHNOLOGY</b></span>
          <div className="home-art__caption"><span className="home-art__caption-icon" aria-hidden="true">↗</span><span><small>BUILT AROUND YOU</small><b>Make the next move matter.</b></span></div>
        </div>

        <div className="home-bottomline">
          <span>THOUGHTFUL BY DESIGN. READY FOR WHAT’S NEXT.</span>
          <a href="#about">Get to know CGI <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  )
}
