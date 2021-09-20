import React from 'react'
import Header from '../../components/Header'
import Message from '../../components/Message'
// import PricingTable from './components/PricingTable'
import Section3 from './components/Section3'
import Section4PricingPage from './components/Section4_pricing_page'
import PricingPageSection1 from './pricingPageSection1/PricingPageSection1'
import FAQ from '../FAQ'
import Footer from '../../components/Footer'

function Pricing() {
  return (
    <div>
      <Header />
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
