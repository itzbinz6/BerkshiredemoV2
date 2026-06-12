'use client'

import { usePdfModal } from '../context/PdfModalContext'

const MEETING_DOCS = [
  {
    title: 'Shareholder Event Information',
    desc: 'Complete guide to the 2026 Annual Shareholders Meeting weekend.',
    url: '/pdfs/shareholder-event-info-2026.pdf',
  },
  {
    title: 'Shareholders Visitor Guide 2026',
    desc: 'Maps, hotel recommendations, and visitor information for Omaha.',
    url: '/pdfs/visitor-guide-2026.pdf',
  },
  {
    title: '2026 Proxy Statement',
    desc: 'Official proxy statement for the 2026 Annual Meeting of Shareholders.',
    url: '/pdfs/proxy-2026.pdf',
  },
  {
    title: 'Route Map to CHI Health Center',
    desc: 'Directions and parking information for the meeting venue.',
    url: '/pdfs/route-map-2026.pdf',
  },
  {
    title: 'Clear Bag Policy',
    desc: 'Security policy — only clear bags are permitted at the venue.',
    url: '/pdfs/clear-bag-policy-2026.pdf',
  },
]

const SCHEDULE = [
  { time: '7:00 AM', event: 'Doors open — shopping floor opens' },
  { time: '8:30 AM', event: 'Movie (new Berkshire film debut)' },
  { time: '9:30 AM', event: 'Opening remarks' },
  { time: '9:45 AM', event: 'Q&A Session begins — journalists, analysts, shareholders' },
  { time: '12:00 PM', event: 'Lunch break' },
  { time: '1:00 PM', event: 'Afternoon Q&A resumes' },
  { time: '3:00 PM', event: 'Business meeting (formal agenda)' },
  { time: '3:30 PM', event: 'Business meeting adjourned' },
  { time: '4:00 PM', event: 'Shopping floor closes' },
]

const WEEKEND_EVENTS = [
  'Friday & Sunday shopping days at CHI Health Center',
  "Nebraska Furniture Mart shareholder discount (May 1–11)",
  'Borsheims shareholder event — Sunday, May 4',
  'Brooks Running 5K — Sunday morning',
  'CNBC live coverage all day Saturday',
]

export default function AnnualMeeting() {
  const { openModal } = usePdfModal()

  return (
    <section id="meeting">
      <div className="container">
        <div className="section-rule fade-in"><span>Annual Meeting 2026</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          Woodstock for<br /><em>capitalists.</em>
        </h2>

        <div className="meeting-grid fade-in">
          {/* Left: schedule + events */}
          <div>
            <div className="meeting-meta">
              <div><i className="fa-regular fa-calendar" /> Saturday, May 2, 2026</div>
              <div><i className="fa-solid fa-location-dot" /> CHI Health Center Omaha, Nebraska</div>
            </div>

            <h3 style={{ marginBottom: '1.25rem', marginTop: '2rem' }}>Saturday Schedule</h3>
            <div className="schedule-list">
              {SCHEDULE.map((item) => (
                <div className="schedule-item" key={item.time}>
                  <span className="schedule-time">{item.time}</span>
                  <span className="schedule-event">{item.event}</span>
                </div>
              ))}
            </div>

            <h3 style={{ marginBottom: '1.25rem', marginTop: '2.5rem' }}>Weekend Events</h3>
            <ul className="operations-list">
              {WEEKEND_EVENTS.map((e) => <li key={e}>{e}</li>)}
            </ul>

            <div style={{ marginTop: '2rem', padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '4px' }}>
              <div style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.5rem', color: 'var(--text-secondary)' }}>
                CNBC Question Submissions
              </div>
              <p style={{ fontSize: '.875rem' }}>
                Questions for the shareholder Q&amp;A can be submitted via CNBC before and during the meeting.
              </p>
              <a
                href="https://www.cnbc.com/berkshire-hathaway-annual-meeting/"
                target="_blank"
                rel="noreferrer"
                className="report-card-link"
                style={{ marginTop: '.75rem', display: 'inline-block' }}
              >
                Submit a question <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '.55rem' }} />
              </a>
            </div>
          </div>

          {/* Right: documents */}
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Meeting Documents</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {MEETING_DOCS.map((doc) => (
                <div className="meeting-doc-card" key={doc.title}>
                  <div>
                    <div className="meeting-doc-title">{doc.title}</div>
                    <div className="meeting-doc-desc">{doc.desc}</div>
                  </div>
                  <div className="meeting-doc-btns">
                    <button className="doc-btn" onClick={() => openModal(doc.url, doc.title)}>
                      <i className="fa-regular fa-file-pdf" /> Preview
                    </button>
                    <a href={doc.url} download className="doc-btn">
                      <i className="fa-solid fa-download" /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
