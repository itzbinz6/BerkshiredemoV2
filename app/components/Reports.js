const REPORTS = [
  { year: 2026, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ26.pdf', q2: null, q3: null, annual: null },
  { year: 2025, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ25.pdf', q2: 'https://www.berkshirehathaway.com/qtrly/2ndQ25.pdf', q3: 'https://www.berkshirehathaway.com/qtrly/3rdQ25.pdf', annual: 'https://www.berkshirehathaway.com/2025ar/2025ar.pdf' },
  { year: 2024, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ24.pdf', q2: 'https://www.berkshirehathaway.com/qtrly/2ndQ24.pdf', q3: 'https://www.berkshirehathaway.com/qtrly/3rdQ24.pdf', annual: 'https://www.berkshirehathaway.com/2024ar/2024ar.pdf' },
  { year: 2023, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ23.pdf', q2: 'https://www.berkshirehathaway.com/qtrly/2ndQ23.pdf', q3: 'https://www.berkshirehathaway.com/qtrly/3rdQ23.pdf', annual: 'https://www.berkshirehathaway.com/2023ar/2023ar.pdf' },
  { year: 2022, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ22.pdf', q2: 'https://www.berkshirehathaway.com/qtrly/2ndQ22.pdf', q3: 'https://www.berkshirehathaway.com/qtrly/3rdQ22.pdf', annual: 'https://www.berkshirehathaway.com/2022ar/2022ar.pdf' },
  { year: 2021, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ21.pdf', q2: 'https://www.berkshirehathaway.com/qtrly/2ndQ21.pdf', q3: 'https://www.berkshirehathaway.com/qtrly/3rdQ21.pdf', annual: 'https://www.berkshirehathaway.com/2021ar/2021ar.pdf' },
  { year: 2020, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ20.pdf', q2: 'https://www.berkshirehathaway.com/qtrly/2ndQ20.pdf', q3: 'https://www.berkshirehathaway.com/qtrly/3rdQ20.pdf', annual: 'https://www.berkshirehathaway.com/2020ar/2020ar.pdf' },
  { year: 2019, q1: 'https://www.berkshirehathaway.com/qtrly/1stQ19.pdf', q2: 'https://www.berkshirehathaway.com/qtrly/2ndQ19.pdf', q3: 'https://www.berkshirehathaway.com/qtrly/3rdQ19.pdf', annual: 'https://www.berkshirehathaway.com/2019ar/2019ar.pdf' },
  { year: 2018, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2018ar/2018ar.pdf' },
  { year: 2017, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2017ar/2017ar.pdf' },
  { year: 2016, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2016ar/2016ar.pdf' },
  { year: 2015, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2015ar/2015ar.pdf' },
  { year: 2014, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2014ar/2014ar.pdf' },
  { year: 2013, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2013ar/2013ar.pdf' },
  { year: 2012, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2012ar/2012ar.pdf' },
  { year: 2011, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2011ar/2011ar.pdf' },
  { year: 2010, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2010ar/2010ar.pdf' },
  { year: 2009, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2009ar/2009ar.pdf' },
  { year: 2008, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2008ar/2008ar.pdf' },
  { year: 2007, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2007ar/2007ar.pdf' },
  { year: 2006, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2006ar/2006ar.pdf' },
  { year: 2005, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2005ar/2005ar.pdf' },
  { year: 2004, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2004ar/2004ar.pdf' },
  { year: 2003, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2003ar/2003ar.pdf' },
  { year: 2002, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2002ar/2002ar.pdf' },
  { year: 2001, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2001ar/2001ar.pdf' },
  { year: 2000, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/2000ar/2000ar.pdf' },
  { year: 1999, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/1999ar/1999ar.pdf' },
  { year: 1998, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/1998ar/1998ar.pdf' },
  { year: 1997, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/1997ar/1997ar.pdf' },
  { year: 1996, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/1996ar/1996ar.pdf' },
  { year: 1995, q1: null, q2: null, q3: null, annual: 'https://www.berkshirehathaway.com/1995ar/1995ar.pdf' },
]

function ReportLink({ href, label }) {
  if (!href) return <span style={{ color: 'var(--text-tertiary)', fontSize: '.75rem' }}>—</span>
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  )
}

export default function Reports() {
  return (
    <section id="reports">
      <div className="container">
        <div className="section-rule fade-in"><span>Annual &amp; Interim Reports</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          Financial<br /><em>performance.</em>
        </h2>
        <div className="reports-grid fade-in">
          {/* Left: scrollable table */}
          <div>
            <div className="scrollable-table">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {REPORTS.map((r) => (
                    <tr key={r.year}>
                      <td>{r.year}</td>
                      <td><ReportLink href={r.q1} label="Q1" /></td>
                      <td><ReportLink href={r.q2} label="Q2" /></td>
                      <td><ReportLink href={r.q3} label="Q3" /></td>
                      <td><ReportLink href={r.annual} label="Annual" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: cards */}
          <div>
            {[
              {
                label: 'News Releases',
                title: 'Press Releases',
                desc: 'Earnings announcements, acquisition notices, and official company statements.',
                href: '#news',
                cta: 'View all releases',
              },
              {
                label: 'BHE Investor Relations',
                title: 'BHE Presentations',
                desc: 'Investor presentations from Berkshire Hathaway Energy Company.',
                href: 'https://www.berkshirehathawayenergyco.com/investors',
                cta: 'Visit BHE investor site',
                external: true,
              },
              {
                label: 'Annual Meeting',
                title: '2026 Annual Meeting',
                desc: 'Materials, schedule, and documents for the 2026 Annual Shareholders Meeting.',
                href: '#meeting',
                cta: 'View meeting info',
              },
            ].map((card) => (
              <div className="report-card" key={card.title}>
                <div className="report-card-label">{card.label}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <a
                  href={card.href}
                  className="report-card-link"
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noreferrer' : undefined}
                >
                  {card.cta} <i className="fa-solid fa-arrow-right" style={{ fontSize: '.55rem' }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
