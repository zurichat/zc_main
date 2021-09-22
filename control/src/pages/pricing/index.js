<<<<<<< HEAD:control/src/pages/pricing/index.js
import React from 'react'
import Header from '../../components/Header'
=======
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
>>>>>>> 685502ac6df2845dd53fb0dbf969d47faf4f64f5:zc_frontend/src/pages/pricing/index.js
import Section3 from './components/Section3'
import Section4PricingPage from './components/Section4_pricing_page'
import Footer from '../../components/Footer'
import FAQ from '../FAQ'
import PricingPageSection1 from './pricingPageSection1/PricingPageSection1'
<<<<<<< HEAD:control/src/pages/pricing/index.js
=======
import SearchSuggestion from '../searchSuggestion'
>>>>>>> 685502ac6df2845dd53fb0dbf969d47faf4f64f5:zc_frontend/src/pages/pricing/index.js
import { useEffect } from 'react'

function Pricing() {
  useEffect(() => {
    sessionStorage.setItem('token', 1234)
    const user = sessionStorage.getItem('token')
    console.log(user)
  })
  return (
    <div style={{ justifyContent: 'center' }}>
<<<<<<< HEAD:control/src/pages/pricing/index.js
      <Header />
=======
      <SearchSuggestion />
>>>>>>> 685502ac6df2845dd53fb0dbf969d47faf4f64f5:zc_frontend/src/pages/pricing/index.js
      <PricingPageSection1 />
      <Section3 />
      <FAQ />
      <Section4PricingPage />
      <Footer showMessage />
    </div>
  )
}
export default Pricing
