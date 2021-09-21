import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
import SearchSuggestion from '../searchSuggestion'
import ContactMain from './components/ContactMain'

function ContactUs() {
  return (
    <div>
      <SearchSuggestion />
      <ContactMain />
      <Message />
      <Footer />
    </div>
  )
}

export default ContactUs
