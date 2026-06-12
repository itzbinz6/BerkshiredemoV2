export function StockInfo() {
  return (
    <section id="stock">
      <div className="container">
        <div className="section-rule fade-in"><span>Common Stock Information</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          Share structure &amp;<br /><em>investor relations.</em>
        </h2>
        <div className="stock-grid fade-in">
          {[
            {
              ticker: 'BRK.A',
              exchange: 'NYSE',
              desc: 'Class A common stock. Each share carries one vote. Not subject to stock splits — currently the highest-priced share on the NYSE.',
            },
            {
              ticker: 'BRK.B',
              exchange: 'NYSE',
              desc: 'Class B common stock. Each share is economically equivalent to 1/1,500th of a Class A share and carries 1/10,000th of a vote.',
            },
            {
              ticker: 'Dividends',
              exchange: null,
              desc: 'Berkshire Hathaway does not pay a cash dividend. Warren Buffett has long argued that retained earnings create more value than dividends distributed to shareholders.',
            },
            {
              ticker: 'Investor Relations',
              exchange: null,
              desc: 'For shareholder information, contact information, and stock transfer services.',
              link: 'https://www.berkshirehathaway.com/shareholderinfo.html',
              linkLabel: 'Shareholder information →',
            },
          ].map((item) => (
            <div className="stock-card" key={item.ticker}>
              <div className="stock-ticker">{item.ticker}</div>
              {item.exchange && <div className="stock-exchange">{item.exchange}</div>}
              <p className="stock-desc">{item.desc}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="report-card-link">
                  {item.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="share-explainer fade-in">
          <p>
            Class A shares can be converted to Class B shares at any time at a ratio of 1:1,500.
            The conversion is one-way — Class B shares cannot be converted back to Class A.
          </p>
        </div>
      </div>
    </section>
  )
}

export function PledgeLetters() {
  return (
    <section id="pledges">
      <div className="container">
        <div className="section-rule fade-in"><span>Pledge Letters</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          The Giving<br /><em>Pledge.</em>
        </h2>
        <div className="pledge-grid fade-in">
          <div className="pledge-card">
            <div className="pledge-label">Annual Letters</div>
            <p>
              Warren Buffett's annual pledge letters detailing his charitable giving
              commitments and progress toward donating the majority of his Berkshire
              Hathaway shares.
            </p>
            <a
              href="https://www.berkshirehathaway.com/letters/pledge.html"
              target="_blank"
              rel="noreferrer"
              className="report-card-link"
            >
              View all pledge letters →
            </a>
          </div>
          <div className="pledge-card">
            <div className="pledge-label">Original Announcement</div>
            <p>
              The original June 2006 letter announcing Warren Buffett's intention to
              donate the great majority of his Berkshire Hathaway shares to five
              charitable foundations.
            </p>
            <a
              href="https://www.berkshirehathaway.com/letters/giving.pdf"
              target="_blank"
              rel="noreferrer"
              className="report-card-link"
            >
              Read original announcement →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SecFilings() {
  return (
    <section id="sec">
      <div className="container">
        <div className="section-rule fade-in"><span>SEC Filings</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          Regulatory<br /><em>disclosures.</em>
        </h2>
        <div className="sec-grid fade-in">
          {[
            {
              icon: 'fa-solid fa-database',
              title: 'All SEC Filings',
              desc: 'Complete filing history on EDGAR — 10-K, 10-Q, 8-K, proxy statements, and all other SEC documents.',
              url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067983&type=&dateb=&owner=include&count=40',
              cta: 'View on EDGAR',
            },
            {
              icon: 'fa-solid fa-file-lines',
              title: '10-K Annual Reports',
              desc: 'Annual report filings with the SEC containing comprehensive audited financial statements.',
              url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067983&type=10-K&dateb=&owner=include&count=10',
              cta: 'View 10-K filings',
            },
            {
              icon: 'fa-solid fa-file-invoice',
              title: '10-Q Quarterly Reports',
              desc: 'Quarterly unaudited financial statements filed with the Securities and Exchange Commission.',
              url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067983&type=10-Q&dateb=&owner=include&count=10',
              cta: 'View 10-Q filings',
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="sec-card"
            >
              <i className={item.icon} />
              <div>
                <div className="sec-title">{item.title}</div>
                <div className="sec-desc">{item.desc}</div>
                <div className="report-card-link" style={{ marginTop: '.75rem' }}>
                  {item.cta} <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '.55rem' }} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
