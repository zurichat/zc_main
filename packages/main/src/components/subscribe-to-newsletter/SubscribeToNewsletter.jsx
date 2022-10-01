import React from "react";
import axios from "axios";
import { BASE_API_URL } from "@zuri/utilities";
import { useTranslation } from "react-i18next";

import styles from "./SubscribeToNewsletter.module.css";
import NewsletterMailIcon from "./assets/newsletter-mail-icon.svg";
import NewsLetterSubscribtionThankYouModal from "./NewsLetterSubscribtionThankYouModal";

export default function SubscribeToNewsletter() {
  const { t } = useTranslation();

  const [email, setEmail] = React.useState("");
  const [displayModal, setDisplayModal] = React.useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    await axios
      .post(`${BASE_API_URL}/external/subscribe`, { email })
      .then(response => {
        const { data, message, status } = response.data;
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
      <NewsLetterSubscribtionThankYouModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <section className={`container my-5 ${styles.sectionContainer}`}>
        <div className={`row`}>
          <div className={`col-md-6 col-sm-12 ${styles.leftColumn}`}>
            <div className={`mr-5 ${styles.image}`}>
              <img
                src={NewsletterMailIcon}
                alt="Hero Top"
                className={`img-fluid`}
              />
            </div>
          </div>
          <div
            className={`col-md-6 col-sm-12 d-flex flex-column ${styles.rightColumn}`}
          >
            <div className={`py-sm-4 ${styles.text}`}>
              <h2 className={` ${styles.heading2}`}>{t("title")}</h2>
              <p className={`py-4 mb-4 px-0 ${styles.subtext}`}>
                {t("description")}
              </p>
              <div className={`${styles.formContainer}`}>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="jazeelandteam@yes.com"
                    value={email}
                    onChange={handleChange}
                    required
                    className={`mb-3 ${styles.inputField}`}
                  />
                  <button type="submit" className={`${styles.subscribeBtn}`}>
                    {t("button")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
