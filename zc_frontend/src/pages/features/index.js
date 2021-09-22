import Section4 from './components/section4/Section4'
import Section6 from './components/section6/Section6'
import Section3 from './components/section3/Section3'
import Section2 from './components/section2/Section2'
import Section1 from './components/section1/Section1'
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Section5 from './components/section5/Section5'
import SearchSuggestion from '../searchSuggestion'
import styles from './styles/layoutStyle.module.css'
const Features = () => {
  return (
    <>
      <SearchSuggestion />
      <div className={styles.layoutStyle}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </>
  )
}

export default Features
