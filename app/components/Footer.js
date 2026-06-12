export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: 'Annual Reports', href: '#reports' },
    { label: 'News Releases', href: '#news' },
    { label: 'Shareholder Letters', href: '#letters' },
    { label: 'Annual Meeting', href: '#meeting' },
    { label: 'Operating Companies', href: '#companies' },
    { label: 'Corporate Governance', href: '#governance' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Stock Information', href: '#stock' },
    { label: 'Pledge Letters', href: '#pledges' },
    { label: 'SEC Filings', href: '#sec' },
  ]

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">Berkshire Hathaway Inc.</div>
            <address>
              3555 Farnam Street<br />
              Omaha, Nebraska 68131<br />
              United States
            </address>
            <p style={{ marginTop: '1rem', fontSize: '.8rem' }}>
              This site is an independent portfolio redesign concept.
              Not affiliated with or endorsed by Berkshire Hathaway Inc.
            </p>
          </div>
          <nav className="footer-nav">
            {links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {year} Berkshire Hathaway Inc.</span>
          <span>NYSE: BRK.A · BRK.B</span>
		  <span>Made by. <a href="https://abisolaajayi0.vercel.app" target="_blank" rel="noopener noreferrer">Ajayi Abisola Enoch</a></span>

        </div>
      </div>
    </footer>
  )
}
