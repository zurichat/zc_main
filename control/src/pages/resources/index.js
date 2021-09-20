import Footer from '../../components/Footer'
import SectionFour from '../../components/SectionFour'
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
