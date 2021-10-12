import Footer from '../../components/Footer'
import CareersSection2 from './components/CareersSection2'
import CareerGrid from './components/CareerGrid'
// import Section3 from './components/Section3'
import SectionOne from './components/sectionOne'
import styles from './styles/CareerGrid.module.css'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'

function Careers() {
  return (
    <div>
      <Helmet>
        <title> Careers - Zuri Chat</title>
      </Helmet>
      <Header />
      <div className={`${styles.grid}`}>
        <SectionOne />
        <CareersSection2 />
        <CareerGrid />
        {/* <Section3 /> */}
      </div>
      <Footer showMessage />
    </div>
  )
}

export default Careers
