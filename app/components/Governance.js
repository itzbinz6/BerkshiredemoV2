const GOV_ITEMS = [
  {
    icon: 'fa-solid fa-scroll',
    title: 'Corporate Governance Guidelines',
    url: 'https://www.berkshirehathaway.com/govern/corpgov.pdf',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Board of Directors',
    url: 'https://www.berkshirehathaway.com/govern/directors.pdf',
  },
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Code of Business Conduct and Ethics',
    url: 'https://www.berkshirehathaway.com/govern/ethics.pdf',
  },
  {
    icon: 'fa-solid fa-magnifying-glass-dollar',
    title: 'Audit Committee Charter',
    url: 'https://www.berkshirehathaway.com/govern/audit.pdf',
  },
  {
    icon: 'fa-solid fa-user-tie',
    title: 'Compensation Committee Charter',
    url: 'https://www.berkshirehathaway.com/govern/compensate.pdf',
  },
  {
    icon: 'fa-solid fa-clipboard-check',
    title: 'Governance, Compensation and Nominating Committee Charter',
    url: 'https://www.berkshirehathaway.com/govern/govcompnom.pdf',
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Communicating with Directors',
    url: 'https://www.berkshirehathaway.com/govern/communicate.pdf',
  },
  {
    icon: 'fa-solid fa-building-columns',
    title: 'Shareholder Rights Plan',
    url: 'https://www.berkshirehathaway.com/govern/rights.pdf',
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Director Independence Standards',
    url: 'https://www.berkshirehathaway.com/govern/independence.pdf',
  },
]

export default function Governance() {
  return (
    <section id="governance">
      <div className="container">
        <div className="section-rule fade-in"><span>Corporate Governance</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          Structure &amp;<br /><em>accountability.</em>
        </h2>
        <div className="gov-grid fade-in">
          {GOV_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="gov-card"
            >
              <i className={item.icon} />
              <span>{item.title}</span>
              <i className="fa-solid fa-arrow-up-right-from-square gov-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
