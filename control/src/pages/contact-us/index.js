import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ContactMain from "./components/ContactMain"
import { googleTranslateElementInit } from '../../translator'


function ContactUs() {
  googleTranslateElementInit()
  return (
    <div>
      <Header />
      <ContactMain />
      <Footer showMessage />
    </div>
  )
}

export default ContactUs
