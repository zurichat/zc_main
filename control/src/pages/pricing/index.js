import React from 'react'
import Header from '../../components/Header'
import Section3 from './components/Section3'
import Section4PricingPage from './components/Section4_pricing_page'
import Footer from '../../components/Footer'
import FAQ from '../FAQ'
import PricingPageSection1 from './pricingPageSection1/PricingPageSection1'
import { useEffect } from 'react'

function Pricing() {
  useEffect(() => {
    sessionStorage.setItem('token', 1234)
    const user = sessionStorage.getItem('token')
    console.log(user)
  })
  return (
    <div style={{ justifyContent: 'center' }}>
      <Header />
      <PricingPageSection1 />
      <Section3 />
      <FAQ />
      <Section4PricingPage />
      <Footer showMessage/>
    </div>
  )
}
export default Pricing
