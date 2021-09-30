import Footer from '../../components/Footer'
import CareersSection2 from './components/CareersSection2'
import Section3 from './components/Section3'
import SectionOne from './components/sectionOne'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'

function Careers() {
  return (
    <div>
      <Helmet>
        <title> Careers - Zuri Chat</title>
      </Helmet>
      <Header />
      <SectionOne />
      <CareersSection2 />
      <Section3 />
      <Footer showMessage />
    </div>
  )
}

export default Careers
