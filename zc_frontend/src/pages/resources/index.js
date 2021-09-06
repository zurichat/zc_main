import Footer from '../../components/externalPagesComponents/Footer/Footer.js'
import Header from '../../components/externalPagesComponents/Header.js'
import SectionFour from '../../components/externalPagesComponents/Resources/SectionFour/SectionFour.js'
import Section1 from './components/section1'
import Section4 from './components/section4'

function Resources() {
  return (
    <div style={{"overflow":"hidden"}}>
      <Header /> 
      <Section1 />
      <Section4 />
      <SectionFour />
      {/* <Footer /> */}
    </div>
  )
}

export default Resources
