export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">NYSE: BRK.A / BRK.B</div>
            <h1 className="hero-headline">
              The Gibraltar of<br /><em>American business.</em>
            </h1>
            <p className="hero-sub">
              A diversified holding company headquartered in Omaha, Nebraska.
              Owned and operated for the long term.
            </p>
            <a href="#about" className="hero-cta">
              Explore the company <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          <div className="hero-right">
            <div className="hero-stat">
              <span className="stat-label">Subsidiaries</span>
              <span className="stat-val">90<sup>+</sup></span>
            </div>
            <div className="hero-stat">
              <span className="stat-label">Employees worldwide</span>
              <span className="stat-val">~388k</span>
            </div>
            <div className="hero-stat">
              <span className="stat-label">NYSE listings</span>
              <span className="stat-val">2</span>
            </div>
            <div className="hero-stat">
              <span className="stat-label">Founded</span>
              <span className="stat-val">1955</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
