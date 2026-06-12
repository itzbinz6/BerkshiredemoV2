'use client'

import { usePdfModal } from '../context/PdfModalContext'

const BUFFETT_YEARS = [
  2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,
  2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,
  2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,
  1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,
]

const MUNGER_YEARS = [
  2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,
  2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,
  1989,1988,1987,1986,1985,1984,1983,
]

function buffettUrl(year) {
  return `https://www.berkshirehathaway.com/letters/${year}ltr.pdf`
}

function mungerUrl(year) {
  return `https://www.berkshirehathaway.com/wesco/${year}wescoanual.pdf`
}

export default function Letters() {
  const { openModal } = usePdfModal()

  return (
    <section id="letters">
      <div className="container">
        <div className="section-rule fade-in"><span>Shareholder Letters</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          Words from<br /><em>the principals.</em>
        </h2>

        <div className="letters-grid fade-in">

          {/* Warren Buffett */}
          <div className="letter-block">
            <div className="letter-block-header">
              <div className="letter-author">Warren E. Buffett</div>
              <div className="letter-role">Chairman &amp; CEO · 1977–2024</div>
            </div>
            <div className="letter-tags">
              {BUFFETT_YEARS.map((year) => (
                <button
                  key={year}
                  className="letter-tag"
                  onClick={() => openModal(buffettUrl(year), `Warren Buffett — ${year} Shareholder Letter`)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Greg Abel */}
          <div className="letter-block">
            <div className="letter-block-header">
              <div className="letter-author">Greg Abel</div>
              <div className="letter-role">Chairman &amp; CEO · 2025–present</div>
            </div>
            <p style={{ fontSize: '.9rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Greg Abel's inaugural shareholder letter as Chairman and CEO of Berkshire Hathaway.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="doc-btn"
                onClick={() => openModal('https://www.berkshirehathaway.com/letters/2025ltr.pdf', 'Greg Abel — 2025 Shareholder Letter')}
              >
                <i className="fa-regular fa-file-pdf" /> Preview
              </button>
              <a
                href="https://www.berkshirehathaway.com/letters/2025ltr.pdf"
                download
                className="doc-btn"
              >
                <i className="fa-solid fa-download" /> Download
              </a>
            </div>
          </div>

          {/* Special 50th Anniversary Essays */}
          <div className="letter-block">
            <div className="letter-block-header">
              <div className="letter-author">50th Anniversary Essays</div>
              <div className="letter-role">2015 Annual Report — Special Essays</div>
            </div>
            {[
              {
                title: 'Berkshire: Past, Present and Future',
                author: 'Warren E. Buffett',
                url: 'https://www.berkshirehathaway.com/letters/2014ltr.pdf',
              },
              {
                title: "Vice Chairman's Thoughts",
                author: 'Charles T. Munger',
                url: 'https://www.berkshirehathaway.com/letters/2014ltr.pdf',
              },
            ].map((essay) => (
              <div key={essay.title} style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 500, marginBottom: '.25rem' }}>{essay.title}</div>
                <div style={{ fontSize: '.8rem', color: 'var(--text-secondary)', marginBottom: '.75rem' }}>
                  {essay.author}
                </div>
                <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                  <button className="doc-btn" onClick={() => openModal(essay.url, essay.title)}>
                    <i className="fa-regular fa-file-pdf" /> Preview
                  </button>
                  <a href={essay.url} download className="doc-btn">
                    <i className="fa-solid fa-download" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Charlie Munger / Wesco */}
          <div className="letter-block">
            <div className="letter-block-header">
              <div className="letter-author">Charles T. Munger</div>
              <div className="letter-role">Wesco Financial · 1983–2011</div>
            </div>
            <div className="letter-tags">
              {MUNGER_YEARS.map((year) => (
                <button
                  key={year}
                  className="letter-tag"
                  onClick={() => openModal(mungerUrl(year), `Charlie Munger / Wesco — ${year} Annual Letter`)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
