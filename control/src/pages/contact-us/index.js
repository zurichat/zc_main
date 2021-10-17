import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ContactMain from './components/ContactMain'
import { Helmet } from 'react-helmet'
import { googleTranslateElementInit } from '../../translator'



function ContactUs() {
  googleTranslateElementInit()
  return (
    <div>
      <Helmet>
        <title>Contact-us-Zuri Chat</title>
      </Helmet>
      <Header />
      <ContactMain />
      <Footer showMessage />
    </div>
  )
}

export default ContactUs
