const articles = [
  {
    category: 'Engineering',
    title: 'How Code Reviews Benefit Software Development',
    description:
      'A practical introduction to code reviews: what they are, why teams use them, and how they contribute to better software development.',
    href: 'https://medium.com/towardsdev/how-code-reviews-benefit-software-development-e3101ada9fbb?sharedUserId=maleeshakumarasinghe',
    visual: 'review',
    visualLabel: 'Code review',
    number: '01',
  },
  {
    category: 'AI & emerging tech',
    title: 'What and Why MCP',
    description:
      'A clear introduction to the Model Context Protocol and why a shared way to connect AI applications with tools and context matters.',
    href: 'https://medium.com/towardsdev/what-and-why-mcp-1722b0da9f84?sharedUserId=maleeshakumarasinghe',
    visual: 'mcp',
    visualLabel: 'Connected AI tools',
    number: '02',
  },
]

export default function BlogPosts() {
  return (
    <div className="blog-section" aria-labelledby="blog-title">
      <div className="blog-heading">
        <div>
          <p className="blog-eyebrow"><span /> THE CGI JOURNAL</p>
          <h2 id="blog-title">Ideas worth<br className="blog-mobile-break" /> <em>sharing.</em></h2>
        </div>
        <p className="blog-intro">
          Notes and perspectives from our team on thoughtful engineering and the technologies shaping what&apos;s next.
        </p>
      </div>

      <div className="blog-grid">
        {articles.map((article) => (
          <article className="blog-card" key={article.number}>
            <a
              className={`blog-visual blog-visual--${article.visual}`}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Read ${article.title} on Medium`}
            >
              <span className="blog-visual__top"><span>CGI / INSIGHTS</span><span>{article.number}</span></span>
              {article.visual === 'review' ? (
                <div className="review-illustration" aria-hidden="true">
                  <div className="review-code">
                    <span><i>01</i> const change = await review();</span>
                    <span><i>02</i> <b>if</b> (clear &amp;&amp; tested) {'{'}</span>
                    <span className="review-code__highlight"><i>03</i> &nbsp; approve(change);</span>
                    <span><i>04</i> {'}'}</span>
                  </div>
                  <div className="review-stamp"><span>&#10003;</span> REVIEWED</div>
                  <span className="review-orbit" />
                </div>
              ) : (
                <div className="mcp-illustration" aria-hidden="true">
                  <div className="mcp-node mcp-node--ai">AI</div>
                  <div className="mcp-node mcp-node--protocol">MCP</div>
                  <div className="mcp-node mcp-node--tools">TOOLS</div>
                  <span className="mcp-line mcp-line--left" />
                  <span className="mcp-line mcp-line--right" />
                  <span className="mcp-pulse" />
                </div>
              )}
              <span className="blog-visual__label">{article.visualLabel}</span>
              <span className="blog-visual__arrow" aria-hidden="true">&#8599;</span>
            </a>

            <div className="blog-card__body">
              <div className="blog-card__meta"><span>{article.category}</span><span>TEAM PERSPECTIVE</span></div>
              <h3><a href={article.href} target="_blank" rel="noreferrer">{article.title}</a></h3>
              <p>{article.description}</p>
              <a className="blog-read-link" href={article.href} target="_blank" rel="noreferrer">
                Read article on Medium <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-footer-note"><span>01 &#8212; 02</span><span>Curiosity is part of the work.</span></div>
    </div>
  )
}
