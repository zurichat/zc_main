<<<<<<< HEAD:zc_frontend/src/pages/pricing/index.js
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
=======
import React from 'react'
import Header from '../../components/Header'
import Message from '../../components/Message'
// import PricingTable from './components/PricingTable'
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/pricing/index.js
import Section3 from './components/Section3'
import Section4PricingPage from './components/Section4_pricing_page'
import PricingPageSection1 from './pricingPageSection1/PricingPageSection1'
<<<<<<< HEAD:zc_frontend/src/pages/pricing/index.js
import SearchSuggestion from '../searchSuggestion'
import { useEffect } from 'react'
=======
import FAQ from '../FAQ'
import Footer from '../../components/Footer'
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/pricing/index.js

function Pricing() {
  useEffect(() => {
    sessionStorage.setItem('token', 1234)
    const user = sessionStorage.getItem('token')
    console.log(user)
  })
  return (
<<<<<<< HEAD:zc_frontend/src/pages/pricing/index.js
    <div style={{ justifyContent: 'center' }}>
      <SearchSuggestion />
=======
    <div>
      <Header />
>>>>>>> 580007abd26a6469578ee154622071a0c97ab881:control/src/pages/pricing/index.js
      <PricingPageSection1 />
      <Section3 />
      <FAQ />
      <Section4PricingPage />
      <Message />
      <Footer />
    </div>
  )
}
export default Pricing
