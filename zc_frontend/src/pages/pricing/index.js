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
      {/* <Header /> */}
      <PricingPageSection1 />
      <PricingTable />
      {/* <Section4PricingPage /> */}
      <FAQ />
      <Message />
      <Footer />
    </div>
  )
}
export default Pricing
