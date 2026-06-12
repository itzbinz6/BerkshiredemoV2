'use client'

import { useState } from 'react'

const EEO_YEARS = [2024, 2023, 2022]

const EEO_DATA = {
  2024: {
    summary: [
      { label: 'Total Employees', value: '388,000+' },
      { label: 'Women', value: '41%' },
      { label: 'People of Color', value: '38%' },
      { label: 'Subsidiaries Reporting', value: '62' },
    ],
    segments: [
      { name: 'Insurance & Reinsurance', women: 48, poc: 42 },
      { name: 'BNSF Railway', women: 16, poc: 39 },
      { name: 'Berkshire Hathaway Energy', women: 35, poc: 28 },
      { name: 'Manufacturing', women: 32, poc: 41 },
      { name: 'McLane Company', women: 22, poc: 44 },
      { name: 'Service & Retailing', women: 52, poc: 37 },
    ],
  },
  2023: {
    summary: [
      { label: 'Total Employees', value: '396,500+' },
      { label: 'Women', value: '40%' },
      { label: 'People of Color', value: '37%' },
      { label: 'Subsidiaries Reporting', value: '59' },
    ],
    segments: [
      { name: 'Insurance & Reinsurance', women: 47, poc: 40 },
      { name: 'BNSF Railway', women: 15, poc: 38 },
      { name: 'Berkshire Hathaway Energy', women: 34, poc: 27 },
      { name: 'Manufacturing', women: 31, poc: 40 },
      { name: 'McLane Company', women: 21, poc: 43 },
      { name: 'Service & Retailing', women: 51, poc: 36 },
    ],
  },
  2022: {
    summary: [
      { label: 'Total Employees', value: '383,000+' },
      { label: 'Women', value: '39%' },
      { label: 'People of Color', value: '36%' },
      { label: 'Subsidiaries Reporting', value: '55' },
    ],
    segments: [
      { name: 'Insurance & Reinsurance', women: 46, poc: 39 },
      { name: 'BNSF Railway', women: 14, poc: 37 },
      { name: 'Berkshire Hathaway Energy', women: 33, poc: 26 },
      { name: 'Manufacturing', women: 30, poc: 38 },
      { name: 'McLane Company', women: 20, poc: 42 },
      { name: 'Service & Retailing', women: 50, poc: 35 },
    ],
  },
}

const SUBSIDIARY_SUSTAINABILITY = [
  { name: 'BNSF Railway', url: 'https://www.bnsf.com/about-bnsf/environment-sustainability/' },
  { name: 'Berkshire Hathaway Energy', url: 'https://www.berkshirehathawayenergyco.com/sustainability' },
  { name: 'Clayton Homes', url: 'https://www.claytonhomes.com/sustainability' },
  { name: 'GEICO', url: 'https://www.geico.com/about/corporate/environment/' },
  { name: 'General Re', url: 'https://www.genre.com/about/sustainability.html' },
  { name: 'Johns Manville', url: 'https://www.jm.com/en/sustainability/' },
  { name: 'Lubrizol', url: 'https://www.lubrizol.com/sustainability' },
  { name: 'Marmon Holdings', url: 'https://www.marmon.com/sustainability/' },
  { name: 'McLane Company', url: 'https://www.mclaneco.com/content/mclaneco/en/about-us/sustainability.html' },
  { name: 'MiTek', url: 'https://www.mii.com/sustainability' },
  { name: 'NetJets', url: 'https://www.netjets.com/en-us/about-netjets/sustainability/' },
  { name: 'PacifiCorp', url: 'https://www.pacificorp.com/energy/clean-energy.html' },
  { name: 'Precision Castparts', url: 'https://www.precast.com/environment' },
  { name: 'Shaw Industries', url: 'https://www.shawinc.com/sustainability' },
  { name: 'Brooks Running', url: 'https://www.brooksrunning.com/en_us/sustainability/' },
  { name: 'Benjamin Moore', url: 'https://www.benjaminmoore.com/en-us/about-benjamin-moore/sustainability' },
  { name: 'Duracell', url: 'https://www.duracell.com/en-us/sustainability/' },
  { name: 'Fruit of the Loom', url: 'https://www.fruit.com/sustainability/' },
  { name: 'Forest River', url: 'https://www.forestriverinc.com/sustainability' },
  { name: 'HomeServices of America', url: 'https://www.homeservices.com/about-us/sustainability' },
  { name: 'International Dairy Queen', url: 'https://www.dairyqueen.com/en-us/purpose/' },
  { name: 'Iscar Metalworking', url: 'https://www.iscar.com/sustainability' },
  { name: 'Richline Group', url: 'https://www.richlinegroup.com/sustainability' },
  { name: 'TTI Inc.', url: 'https://www.ttiinc.com/page/corporate-responsibility' },
]

export default function Sustainability() {
  const [activeTab, setActiveTab] = useState('eeo')
  const [activeYear, setActiveYear] = useState(2024)
  const data = EEO_DATA[activeYear]

  return (
    <section id="sustainability">
      <div className="container">
        <div className="section-rule fade-in"><span>Sustainability</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          People &amp;<br /><em>planet.</em>
        </h2>

        {/* Main tabs */}
        <div className="sus-tabs fade-in">
          <button
            className={`sus-tab ${activeTab === 'eeo' ? 'active' : ''}`}
            onClick={() => setActiveTab('eeo')}
          >
            EEO-1 Workforce Data
          </button>
          <button
            className={`sus-tab ${activeTab === 'subsidiary' ? 'active' : ''}`}
            onClick={() => setActiveTab('subsidiary')}
          >
            Subsidiary Sustainability
          </button>
        </div>

        {/* EEO panel */}
        {activeTab === 'eeo' && (
          <div className="fade-in">
            {/* Year selector */}
            <div style={{ display: 'flex', gap: '.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {EEO_YEARS.map((year) => (
                <button
                  key={year}
                  className={`news-year-btn ${activeYear === year ? 'active' : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Summary stats */}
            <div className="eeo-summary">
              {data.summary.map((s) => (
                <div className="eeo-stat" key={s.label}>
                  <div className="eeo-stat-val">{s.value}</div>
                  <div className="eeo-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Segment breakdown */}
            <table className="eeo-table">
              <thead>
                <tr>
                  <th>Business Segment</th>
                  <th>Women</th>
                  <th>People of Color</th>
                </tr>
              </thead>
              <tbody>
                {data.segments.map((seg) => (
                  <tr key={seg.name}>
                    <td>{seg.name}</td>
                    <td>
                      <div className="progress-wrap">
                        <div className="progress-bar" style={{ width: `${seg.women}%` }} />
                        <span>{seg.women}%</span>
                      </div>
                    </td>
                    <td>
                      <div className="progress-wrap">
                        <div className="progress-bar" style={{ width: `${seg.poc}%` }} />
                        <span>{seg.poc}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '.75rem', color: 'var(--text-tertiary)', marginTop: '1rem' }}>
              * Data represents U.S.-based employees only. Figures are approximate and rounded.
              EEO-1 filings cover wholly owned subsidiaries with 100+ employees.
            </p>
          </div>
        )}

        {/* Subsidiary panel */}
        {activeTab === 'subsidiary' && (
          <div className="subsidiary-grid fade-in">
            {SUBSIDIARY_SUSTAINABILITY.map((sub) => (
              <a
                key={sub.name}
                href={sub.url}
                target="_blank"
                rel="noreferrer"
                className="subsidiary-card"
              >
                {sub.name}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
