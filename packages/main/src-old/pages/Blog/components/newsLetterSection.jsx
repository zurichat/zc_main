import React from "react";
import style from "../Style/style.module.css";
import second from "../assets/SignUpNewsletter.png";
const newsLetterSection = () => {
  return (
    <div className={style.blog_newletter}>
      <div className={style.newsletter_img}>
        <img src={second} alt="" />
      </div>
      <div className={style.newletter_text}>
        <div style={{ marginBottom: 20 }}>
          <h2>
            Sign up for Zuri’s <br />
            Newsletter
          </h2>
        </div>
        <div style={{ marginTop: 40 }}>
          <p>
            Sign up for Zuri’s Newsletter and stay up to date
            <br />
            with the latest and trending news, events
            <br />
            and ariticles on the blog.
          </p>
        </div>
        <div style={{ marginTop: 30 }}>
          <a href="#">Register Today</a>
        </div>
      </div>
    </div>
  );
};

export default newsLetterSection;
