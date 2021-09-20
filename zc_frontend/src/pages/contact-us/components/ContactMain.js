import contactStyle from '../styles/contactMain.module.css'
import ContactUs from './ContactUsImg.png'
import FAQselected from './FAQSelected.js'

const contactTitle = () => {
  return (
    <div>
      <div className={contactStyle.contactHead}>
        <h1>Contact Us</h1>
        <p>
          We are dedicated to making your online communication experience with
          us a pleasure We’d like to hear from you.
        </p>
      </div>

      <div className={contactStyle.contactBody}>
        <div className={contactStyle.getHelpCard}>
          <FAQselected />
        </div>

        <img className="d-none d-xl-flex" src={ContactUs} alt="contact us" />
      </div>
    </div>
  )
}

export default contactTitle
