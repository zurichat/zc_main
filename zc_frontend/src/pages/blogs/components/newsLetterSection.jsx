import React from 'react'
import style from '../Style/style.module.css'
import second from '../assets/SignUpNewsletter.png'
const newsLetterSection = () => {
  return (
    <div className={style.blog_newletter}>
      <div className={style.newsletter_img}>
        <img src={second} alt="" />
      </div>
      <div className={style.newletter_text}>
        <h2>
          Sign up for Zuri’s <br />
          Newsletter
        </h2>
        <p>
          Sign up for Zuri’s Newsletter and stay up to date
          <br />
          with the latest and trending news, events
          <br />
          and ariticles on the blog.
        </p>
        <a href="#">Register Today</a>
      </div>
    </div>
  )
}

export default newsLetterSection
