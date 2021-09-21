<<<<<<< HEAD:zc_frontend/src/pages/pricing/index.js
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
=======
import React from 'react'
import Header from '../../components/Header'
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/pricing/index.js
import Section3 from './components/Section3'
import Section4PricingPage from './components/Section4_pricing_page'
import Footer from '../../components/Footer'
import FAQ from '../FAQ'
import PricingPageSection1 from './pricingPageSection1/PricingPageSection1'
<<<<<<< HEAD:zc_frontend/src/pages/pricing/index.js
import SearchSuggestion from '../searchSuggestion'
=======
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/pricing/index.js
import { useEffect } from 'react'

function Pricing() {
  useEffect(() => {
    sessionStorage.setItem('token', 1234)
    const user = sessionStorage.getItem('token')
    console.log(user)
  })
  return (
    <div style={{ justifyContent: 'center' }}>
<<<<<<< HEAD:zc_frontend/src/pages/pricing/index.js
      <SearchSuggestion />
=======
      <Header />
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/pricing/index.js
      <PricingPageSection1 />
      <Section3 />
      <FAQ />
      <Section4PricingPage />
      <Footer showMessage/>
    </div>
  )
}
export default Pricing
