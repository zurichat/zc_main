import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
// import PricingTable from './components/PricingTable'
import Section3 from './components/Section3'
import Section4PricingPage from './components/Section4_pricing_page'
import FAQ from '../FAQ'
import PricingPageSection1 from './pricingPageSection1/PricingPageSection1'
import SearchSuggestion from '../searchSuggestion'
import { useEffect } from 'react'

function Pricing() {
  useEffect(() => {
    sessionStorage.setItem('token', 1234)
    const user = sessionStorage.getItem('token')
    console.log(user)
  })
  return (
    <div>
      <SearchSuggestion />
      <PricingPageSection1 />
      {/* <PricingTable /> */}
      <Section3 />
      <FAQ />
      <Section4PricingPage />
      <Message />
      <Footer />
    </div>
  )
}
export default Pricing
