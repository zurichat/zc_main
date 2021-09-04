import contactStyles from '../styles/contactMain.module.css'
const contactTitle = () => {
  return (
    <div>
      <section className={contactStyles.contact__us}>
        <div className={contactStyles.contactus__text}>
          <h1 className={contactStyles.contact__header}>Contact Us</h1>
        </div>

        <div className={contactStyles.we__help}>
          <h2 className={contactStyles.help__header}>We are here to help!</h2>
          <p className={contactStyles.help__text}>
            Already use Slack? Sign in so we can tailor your support experience.
            If that’s not possible, we’d still like to hear from you.
          </p>
        </div>

        <section className={contactStyles.faq__elsesubscribe}>
          <div className={contactStyles.faq__else}>
            <div className={contactStyles.faq}>
              <h3 className={contactStyles.box__header}>FAQ</h3>
              <p className={contactStyles.box__word}>
                For quick answers to common questions, try our FAQ first!
              </p>
              <p className={contactStyles.box__btmword}>Help Center</p>
            </div>

            <div className={contactStyles.else}>
              <h3 className={contactStyles.box__header}>Everything Else</h3>
              <p className={contactStyles.box__word}>
                Still seeking your answers? Let us help you directly
              </p>
              <p className={contactStyles.box__btmword}>Submit your request</p>
            </div>
          </div>

          <div className={contactStyles.subscribe}>
            <h2 className={contactStyles.subscribe__header}>
              Want to get be the first to know about any updates? Suscribe to
              get our newsletters.
            </h2>
            <div className={contactStyles.input__button}>
              <input type="text" placeholder="Email" />
              <button className={contactStyles.subscribe__btn}>
                Subscribe
              </button>
            </div>
            <p className={contactStyles.subscribe__bottomword}>
              By submitting your email, I consent to Zuri Chat sending me
              marketing communication via email. I may opt out at anytime. Read
              Zuri Chat’s Privacy Policy .
            </p>
          </div>
        </section>
      </section>
    </div>
  )
}

export default contactTitle
