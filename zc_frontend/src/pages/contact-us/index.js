import Footer from '../../components/externalPagesComponents/Footer/Footer'
import SearchSuggestion from '../searchSuggestion'
import Message from '../../components/externalPagesComponents/Footer/Message'
import ContactMain from './components/ContactMain'

function ContactUs() {
  return (
    <div>
      <SearchSuggestion />
      <ContactMain />
      <Message type="contact" />
      <Footer />
    </div>
  )
}

export default ContactUs
