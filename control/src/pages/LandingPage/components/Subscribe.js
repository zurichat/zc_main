import React, { useState } from 'react'
import css from './styles/subscribe.module.css'
import sub_img1 from './assets/email-sub-img.svg'
import axios from 'axios'

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    await axios
      .post('https://api.zuri.chat/external/subscribe', { email })
      .then(response => {
        const { data, message } = response.data
        console.log(response.data)
        alert(message)
      })
      .catch(error => {
        const { data } = error.response
      })
  }

  const handleChange = event => setEmail(event.target.value)

  return (
    <section className={`container my-5 ${css.sectionContainer}`}>
      <div className={`row`}>
        <div className={`col-md-6 col-sm-12 ${css.leftColumn}`}>
          <div className={`mr-5 ${css.image}`}>
            <img src={sub_img1} alt="Hero Top" className={`img-fluid`} />
          </div>
        </div>
        <div
          className={`col-md-6 col-sm-12 d-flex flex-column ${css.rightColumn}`}
        >
          <div className={` ${css.text}`}>
            <h2 className={` ${css.heading2}`}>
              Be the First to get updates and exclusive offers from Zuri Chat
            </h2>
            <p className={`py-4 mb-4 px-0 ${css.subtext}`}>
              Enrich your Zuri Chat experience by signing up here to get the
              latest news and special deals on Zuri Chat
            </p>
            <div className={`${css.formContainer}`}>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="jazeelandteam@yes.com"
                  value={email}
                  onChange={handleChange}
                  required
                  className={`mb-3 ${css.inputField}`}
                />
                <button type="submit" className={`${css.subscribeBtn}`}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
