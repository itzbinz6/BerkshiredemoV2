export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-rule fade-in"><span>About</span></div>
        <div className="about-grid fade-in">
          <div>
            <h2 style={{ marginBottom: '2rem' }}>A company built for<br /><em>permanence.</em></h2>
            <p className="about-body">
              Berkshire Hathaway is a holding company owning subsidiaries engaged in
              a number of diverse business activities. The most important of these is
              the property and casualty insurance business conducted on both a direct
              and reinsurance basis through a number of subsidiaries.
            </p>
            <p className="about-body" style={{ marginTop: '1.25rem' }}>
              Other important activities include freight rail transportation through
              BNSF, and regulated gas and electric utility businesses through
              Berkshire Hathaway Energy Company.
            </p>
            <ul className="operations-list" style={{ marginTop: '2rem' }}>
              {[
                'Insurance & Reinsurance', 'BNSF Railway',
                'Berkshire Hathaway Energy', 'Manufacturing',
                'McLane Company', 'Service & Retailing',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <blockquote className="about-pull">
              "Price is what you pay. Value is what you get."
            </blockquote>
            <blockquote className="about-pull">
              "It's far better to buy a wonderful company at a fair price than a
              fair company at a wonderful price."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
