'use client'

import { useState } from 'react'

const YEARS_WITH_RELEASES = [2026, 2025, 2024]

const RELEASES = {
  2026: [
    { date: 'May 3, 2026', title: 'First Quarter Earnings 2026', url: 'https://www.berkshirehathaway.com/news/may0326.pdf' },
    { date: 'Feb 22, 2026', title: 'Fourth Quarter Earnings 2025', url: 'https://www.berkshirehathaway.com/news/feb2226.pdf' },
    { date: 'Feb 12, 2026', title: 'Annual Report Release Information', url: 'https://www.berkshirehathaway.com/news/feb1226.pdf' },
    { date: 'Jan 2, 2026', title: 'Berkshire Hathaway Inc. Completes Acquisition of OxyChem', url: 'https://www.berkshirehathaway.com/news/jan0226.pdf' },
  ],
  2025: [
    { date: 'Dec 8, 2025', title: 'Berkshire Hathaway Announces Leadership Appointments', url: 'https://www.berkshirehathaway.com/news/dec0825.pdf' },
    { date: 'Nov 10, 2025', title: 'Thanksgiving Message from Warren Buffett', url: 'https://www.berkshirehathaway.com/news/nov1025.pdf' },
    { date: 'Nov 6, 2025', title: 'It\'s Not Me', url: 'https://www.berkshirehathaway.com/news/nov0625.pdf' },
    { date: 'Nov 1, 2025', title: 'Third Quarter Earnings 2025', url: 'https://www.berkshirehathaway.com/news/nov0125.pdf' },
    { date: 'Oct 2, 2025', title: 'Berkshire Hathaway Inc. to Acquire OxyChem', url: 'https://www.berkshirehathaway.com/news/oct0225.pdf' },
    { date: 'Aug 2, 2025', title: 'Second Quarter Earnings 2025', url: 'https://www.berkshirehathaway.com/news/aug0225.pdf' },
    { date: 'Jun 27, 2025', title: 'News Release', url: 'https://www.berkshirehathaway.com/news/jun2725.pdf' },
    { date: 'May 5, 2025', title: 'News Release', url: 'https://www.berkshirehathaway.com/news/may0525.pdf' },
    { date: 'May 3, 2025', title: 'First Quarter Earnings 2025', url: 'https://www.berkshirehathaway.com/news/may0325.pdf' },
    { date: 'Apr 4, 2025', title: 'False Social Media Reports', url: 'https://www.berkshirehathaway.com/news/apr0425.pdf' },
    { date: 'Feb 22, 2025', title: 'Fourth Quarter Earnings 2024', url: 'https://www.berkshirehathaway.com/news/feb2225.pdf' },
    { date: 'Feb 18, 2025', title: 'Annual Report Release Information', url: 'https://www.berkshirehathaway.com/news/feb1825.pdf' },
  ],
  2024: [
    { date: 'Nov 25, 2024', title: 'News Release', url: 'https://www.berkshirehathaway.com/news/nov2524.pdf' },
    { date: 'Nov 2, 2024', title: 'Third Quarter Earnings 2024', url: 'https://www.berkshirehathaway.com/news/nov0224.pdf' },
    { date: 'Aug 3, 2024', title: 'Second Quarter Earnings 2024', url: 'https://www.berkshirehathaway.com/news/aug0324.pdf' },
    { date: 'Jun 28, 2024', title: 'News Release', url: 'https://www.berkshirehathaway.com/news/jun2824.pdf' },
    { date: 'May 4, 2024', title: 'First Quarter Earnings 2024', url: 'https://www.berkshirehathaway.com/news/may0424.pdf' },
    { date: 'Feb 24, 2024', title: 'Fourth Quarter Earnings 2023', url: 'https://www.berkshirehathaway.com/news/feb2424.pdf' },
    { date: 'Jan 16, 2024', title: 'Berkshire Hathaway Completes Acquisition of Remaining Interest in Pilot Travel Centers LLC', url: 'https://www.berkshirehathaway.com/news/jan1624.pdf' },
    { date: 'Jan 7, 2024', title: 'Berkshire Hathaway Reaches Settlement with Pilot Corporation', url: 'https://www.berkshirehathaway.com/news/jan0724.pdf' },
  ],
}

// Archive years just link out
const ARCHIVE_YEARS = [
  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016,
  2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008,
  2007, 2006, 2005, 2004, 2003, 2002, 2001,
]

const ALL_YEARS = [...YEARS_WITH_RELEASES, ...ARCHIVE_YEARS, 'Pre-2001']

export default function NewsReleases() {
  const [activeYear, setActiveYear] = useState(2026)

  function getArchiveUrl(year) {
    if (year === 'Pre-2001') return 'https://www.berkshirehathaway.com/news/oldnews.html'
    return `https://www.berkshirehathaway.com/news/${year}news.html`
  }

  return (
    <section id="news">
      <div className="container">
        <div className="section-rule fade-in"><span>News Releases</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          Official<br /><em>announcements.</em>
        </h2>

        {/* Year tabs */}
        <div className="news-year-grid fade-in">
          {ALL_YEARS.map((year) => (
            <button
              key={year}
              className={`news-year-btn ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Panel content */}
        <div className="fade-in">
          {/* Recent years: inline releases */}
          {YEARS_WITH_RELEASES.includes(activeYear) && (
            <div className="news-list">
              {RELEASES[activeYear].map((item) => (
                <div className="news-item" key={item.url}>
                  <span className="news-date">{item.date}</span>
                  <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                </div>
              ))}
            </div>
          )}

          {/* Archive years: link out */}
          {(ARCHIVE_YEARS.includes(activeYear) || activeYear === 'Pre-2001') && (
            <div style={{ padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Full archive of {activeYear} news releases.
              </p>
              <a
                href={getArchiveUrl(activeYear)}
                target="_blank"
                rel="noreferrer"
                className="report-card-link"
              >
                View {activeYear} archive{' '}
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '.55rem' }} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
