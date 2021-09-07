import Footer from '../../components/externalPagesComponents/Footer/Footer.js'
import SectionFour from '../../components/externalPagesComponents/Resources/SectionFour/SectionFour.js'
import SearchSuggestion from '../searchSuggestion/index.js'
import Section1 from './components/section1'
import Section4 from './components/section4'

function Resources() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <SearchSuggestion /> <Section1 />
      <Section4 />
      <SectionFour />
      <Footer />
    </div>
  )
}

export default Resources
