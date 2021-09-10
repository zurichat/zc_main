import Section4 from './components/Section4'
import Section6 from './components/Section6'
import Section3 from './components/Section3'
import Section2 from './components/Section2'
import Section1 from './components/Section1'
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import SpecialFeatures from './components/SpecialFeatures'
import SearchSuggestion from '../searchSuggestion'
const Features = () => {
  return (
    <>
      <SearchSuggestion />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <SpecialFeatures />
      <Section6 />
      <Footer />
    </>
  )
}

export default Features
