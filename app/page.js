import FraudAlert from './components/FraudAlert'
import Hero from './components/Hero'
import About from './components/About'
import Reports from './components/Reports'
import NewsReleases from './components/NewsReleases'
import Letters from './components/Letters'
import AnnualMeeting from './components/AnnualMeeting'
import OperatingCompanies from './components/OperatingCompanies'
import Governance from './components/Governance'
import Sustainability from './components/Sustainability'
import { StockInfo, PledgeLetters, SecFilings } from './components/StaticSections'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <FraudAlert />
      <Hero />
      <About />
      <Reports />
      <NewsReleases />
      <Letters />
      <AnnualMeeting />
      <OperatingCompanies />
      <Governance />
      <Sustainability />
      <StockInfo />
      <PledgeLetters />
      <SecFilings />
      <Footer />
    </main>
  )
}
