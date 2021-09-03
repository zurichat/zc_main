import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
// import Header from '../../components/externalPagesComponents/Header'
import PricingTable from './components/PricingTable'
// import Section4PricingPage from './components/Section4_pricing_page'
import FAQ from '../FAQ'
import PricingPageSection1 from './pricingPageSection1/PricingPageSection1'

function Pricing() {
  return (
    <div>
      <div id="header">{/* <Header /> */}</div>
      <div id="section1">
        <PricingPageSection1 />
      </div>
      <div id="section4">
        <PricingTable />
        {/* <Section4PricingPage /> */}
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="message">
        <Message />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}
export default Pricing
