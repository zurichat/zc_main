import React from "react";
import styles from "./NewsLetterSubscribtionThankYouModal.module.css";
import { useTranslation } from "react-i18next";

import NewsletterSubscribedIcon from "./assets/newsletter-mail-icon.svg";

export default function NewsLetterSubscribtionThankYouModal({
  displayModal,
  setDisplayModal
}) {
  const modalRef = React.useRef();

  const closeModal = event => {
    if (modalRef.current === event.target) {
      setDisplayModal(false);
    }
  };
  const { t } = useTranslation();

  return (
    <>
      {displayModal ? (
        <div
          className={`${styles.modalLayer}`}
          onClick={closeModal}
          ref={modalRef}
        >
          <div className={`col-sm-12 d-flex flex-column }`}>
            <div className={`${styles.modalWrap}`}>
              <div className={`row ${styles.modalRow}`}>
                <div
                  className={`col-sm-12 d-flex flex-column ${styles.modalColumn}`}
                >
                  <div className={`mx-auto ${styles.modalIcon}`}>
                    <img
                      src={NewsletterSubscribedIcon}
                      alt="email icon"
                      className={`img-fluid`}
                      width={150}
                    />
                  </div>
                  <h3 className={`text-center my-4 ${styles.modalHeading}`}>
                    {t("thank_you")}
                  </h3>
                  <p className={`text-center ${styles.modalText}`}>
                    {t("modal_text1")} <br /> {t("modal_text2")} <br />{" "}
                    {t("modal_text3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
