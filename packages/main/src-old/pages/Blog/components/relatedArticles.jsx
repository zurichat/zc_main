import React from "react";
import style from "../Style/style.module.css";
import first from "../assets/Card1.png";
import second from "../assets/Card2.png";

const relatedArticles = () => {
  return (
    // <div className={style.reading}>
    //   <h1>Keep reading</h1>
    <div className={style.main_conainer}>
      <h1>Keep reading</h1>
      <div className={style.reading}>
        <div className={style.keep_reading_box}>
          <div className={style.keep_reading_img}>
            <img src={first} alt="" />
          </div>
          <div className={style.keep_reading_text}>
            <p className={style.getting}>Getting Started</p>
            <h3 style={{ fontSize: 25, padding: 0, margin: 0 }}>
              Getting Started with Zuri Chat
            </h3>
            <p className={style.getting_text}>
              Getting Started on Zuri Chat. This is a concise guide <br />
              that will help you use this ease... <a href="">Read More</a>
            </p>
            <div className={style.date_min}>
              <p className={style.date}>27 August 2021</p>
              <p className={style.min}>4 Mins Read</p>
            </div>
          </div>
        </div>

        <div className={style.keep_reading_box}>
          <div className={style.keep_reading_img}>
            <img src={second} alt="" />
          </div>
          <div className={style.keep_reading_text}>
            <p className={style.getting}>Getting Started</p>
            <h3 style={{ fontSize: 25, padding: 0, margin: 0 }}>
              Getting Started with Zuri Chat
            </h3>
            <p className={style.getting_text}>
              Getting Started on Zuri Chat. This is a concise guide <br />
              that will help you use this ease... <a href="">Read More</a>
            </p>
            <div className={style.date_min}>
              <p className={style.date}>27 August 2021</p>
              <p className={style.min}>4 Mins Read</p>
            </div>
          </div>
        </div>
        <div className={style.keep_reading_box}>
          <div className={style.keep_reading_img}>
            <img src={first} alt="" />
          </div>
          <div className={style.keep_reading_text}>
            <p className={style.getting}>Getting Started</p>
            <h3 style={{ fontSize: "1.7em", padding: 0, margin: 0 }}>
              Getting Started with Zuri Chat
            </h3>
            <p className={style.getting_text}>
              Getting Started on Zuri Chat. This is a concise guide <br />
              that will help you use this ease... <a href="">Read More</a>
            </p>
            <div className={style.date_min}>
              <p className={style.date}>27 August 2021</p>
              <p className={style.min}>4 Mins Read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default relatedArticles;
