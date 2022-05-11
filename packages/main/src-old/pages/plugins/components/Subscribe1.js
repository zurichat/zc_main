import React, { useState } from "react";
import css from "./styles/subscribe.module1.css";
import sub_img1 from "./assets/emails.jpg";
import axios from "axios";
import ThankYouModal from "./ThankYouModal1";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const [displayModal, setDisplayModal] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    await axios
      .post("https://api.zuri.chat/external/subscribe", { email })
      .then(response => {
        const { data, message, status } = response.data;
        // console.log(response.data)
        // alert(message)
        if (status == "200") {
          setEmail("");
          setDisplayModal(true);
          setTimeout(() => {
            setDisplayModal(false);
          }, 7000);
        }
      })
      .catch(error => {
        const { data } = error.response;
      });
  };

  const handleChange = event => setEmail(event.target.value);

  return (
    <>
      <ThankYouModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
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
            <div className={`py-sm-4 ${css.text}`}>
              <h2 className={` ${css.heading2}`}>
                {t("plugin.subscribe.headline")}
                <br></br>
                {t("plugin.subscribe.headline_br")}
              </h2>
              <p className={`py-4 mb-4 px-0 ${css.subtext}`}>
                {t("plugin.subscribe.description")}
                <br></br>
                {t("plugin.subscribe.description_br")}
                <br></br>
                {t("plugin.subscribe.description_brr")}
              </p>
              <div className={`${css.formContainer}`}>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="zurichat@gmail.com"
                    value={email}
                    onChange={handleChange}
                    required
                    className={`mb-3 ${css.inputField}`}
                  />
                  <button type="submit" className={`${css.subscribeBtn}`}>
                    {t("plugin.subscribe.button")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
