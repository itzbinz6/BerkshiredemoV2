'use client'

import { useState } from 'react'

const COMPANIES = [
  { name: 'ACME Brick', url: 'https://www.acmebrick.com' },
  { name: 'Alleghany Corporation', url: 'https://www.alleghany.com' },
  { name: 'Applied Underwriters', url: 'https://www.applieduw.com' },
  { name: 'Ben Bridge Jeweler', url: 'https://www.benbridge.com' },
  { name: 'Benjamin Moore', url: 'https://www.benjaminmoore.com' },
  { name: 'Berkshire Hathaway Automotive', url: 'https://www.berkshirehathawayautomotive.com' },
  { name: 'Berkshire Hathaway Energy', url: 'https://www.berkshirehathawayenergyco.com' },
  { name: 'Berkshire Hathaway HomeServices', url: 'https://www.berkshirehathawayhs.com' },
  { name: 'Berkshire Hathaway GUARD Insurance', url: 'https://www.guard.com' },
  { name: 'Berkshire Hathaway Life Insurance', url: 'https://www.berkshirelife.com' },
  { name: 'Berkshire Hathaway Specialty Insurance', url: 'https://www.bhspecialty.com' },
  { name: 'BNSF Railway', url: 'https://www.bnsf.com' },
  { name: 'Borsheims Fine Jewelry', url: 'https://www.borsheims.com' },
  { name: 'Brooks Running', url: 'https://www.brooksrunning.com' },
  { name: 'Buffalo News', url: 'https://www.buffalonews.com' },
  { name: 'Business Wire', url: 'https://www.businesswire.com' },
  { name: 'Central States Indemnity', url: 'https://www.csi-omaha.com' },
  { name: 'Charter Brokerage', url: 'https://www.charterbrokerage.net' },
  { name: 'Clayton Homes', url: 'https://www.claytonhomes.com' },
  { name: 'CORT Business Services', url: 'https://www.cort.com' },
  { name: 'CTB Inc.', url: 'https://www.ctbinc.com' },
  { name: 'Duracell', url: 'https://www.duracell.com' },
  { name: 'FECHHEIMER Brothers', url: 'https://www.fechheimer.com' },
  { name: 'FlightSafety International', url: 'https://www.flightsafety.com' },
  { name: 'Forest River', url: 'https://www.forestriverinc.com' },
  { name: 'Fruit of the Loom', url: 'https://www.fruit.com' },
  { name: 'GEICO', url: 'https://www.geico.com' },
  { name: 'General Re', url: 'https://www.genre.com' },
  { name: 'H.H. Brown Shoe Group', url: 'https://www.berkshirehathaway.com/subs/hhbrown.html' },
  { name: 'Helzberg Diamonds', url: 'https://www.helzberg.com' },
  { name: 'HomeServices of America', url: 'https://www.homeservices.com' },
  { name: 'IMC Credit Services', url: 'https://www.berkshirehathaway.com/subs/imc.html' },
  { name: 'International Dairy Queen', url: 'https://www.dairyqueen.com' },
  { name: 'Iscar Metalworking', url: 'https://www.iscar.com' },
  { name: 'Johns Manville', url: 'https://www.jm.com' },
  { name: 'Jordan\'s Furniture', url: 'https://www.jordans.com' },
  { name: 'Justin Brands', url: 'https://www.justinbrands.com' },
  { name: 'Kansas Bankers Surety', url: 'https://www.kansasbankers.com' },
  { name: 'Larson-Juhl', url: 'https://www.larsonjuhl.com' },
  { name: 'LiquidPower Technologies', url: 'https://www.liquidpowertech.com' },
  { name: 'Lubrizol Corporation', url: 'https://www.lubrizol.com' },
  { name: 'Marmon Holdings', url: 'https://www.marmon.com' },
  { name: 'McLane Company', url: 'https://www.mclaneco.com' },
  { name: 'MedPro Group', url: 'https://www.medpro.com' },
  { name: 'MITEK', url: 'https://www.mitek.com' },
  { name: 'National Indemnity Company', url: 'https://www.nationalindemnity.com' },
  { name: 'Nebraska Furniture Mart', url: 'https://www.nfm.com' },
  { name: 'NetJets', url: 'https://www.netjets.com' },
  { name: 'Northern Natural Gas', url: 'https://www.northernnaturalgas.com' },
  { name: 'Northwestern Energy', url: 'https://www.berkshirehathaway.com/subs/northwestern.html' },
  { name: 'OrthoWest', url: 'https://www.berkshirehathaway.com/subs/orthowest.html' },
  { name: 'PacifiCorp', url: 'https://www.pacificorp.com' },
  { name: 'Pampered Chef', url: 'https://www.pamperedchef.com' },
  { name: 'Pilot Travel Centers', url: 'https://www.pilottravelcenters.com' },
  { name: 'Precision Castparts', url: 'https://www.precast.com' },
  { name: 'R.C. Willey Home Furnishings', url: 'https://www.rcwilley.com' },
  { name: 'Richline Group', url: 'https://www.richlinegroup.com' },
  { name: 'See\'s Candies', url: 'https://www.sees.com' },
  { name: 'Shaw Industries', url: 'https://www.shawinc.com' },
  { name: 'Star Furniture', url: 'https://www.starfurniture.com' },
  { name: 'WESCO Financial', url: 'https://www.berkshirehathaway.com/subs/wescofin.html' },
  { name: 'Wesco Aircraft', url: 'https://www.wescoair.com' },
  { name: 'The Buffalo News', url: 'https://www.buffalonews.com' },
  { name: 'The Pampered Chef', url: 'https://www.pamperedchef.com' },
  { name: 'TTI Inc.', url: 'https://www.ttiinc.com' },
  { name: 'United States Liability Insurance', url: 'https://www.usli.com' },
  { name: 'XTRA Corporation', url: 'https://www.xtracorp.com' },
]

export default function OperatingCompanies() {
  const [open, setOpen] = useState(false)

  return (
    <section id="companies">
      <div className="container">
        <div className="section-rule fade-in"><span>Operating Companies</span></div>
        <h2 className="fade-in" style={{ marginBottom: '3rem' }}>
          The Berkshire<br /><em>family of businesses.</em>
        </h2>

        <div className="accordion fade-in">
          <button
            className={`accordion-trigger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span>View all {COMPANIES.length} subsidiaries</span>
            <i className={`fa-solid fa-chevron-down ${open ? 'rotated' : ''}`} />
          </button>

          {open && (
            <div className="accordion-body">
              <div className="companies-grid">
                {COMPANIES.map((company) => (
                  <a
                    key={company.name}
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="company-link"
                  >
                    {company.name}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
