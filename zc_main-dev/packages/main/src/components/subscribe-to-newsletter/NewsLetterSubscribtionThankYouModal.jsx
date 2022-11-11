import React from "react";
import styles from "./NewsLetterSubscribtionThankYouModal.module.css";

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
                    Thank you for subscribing!
                  </h3>
                  <p className={`text-center ${styles.modalText}`}>
                    Now, you'll be the first to receive updates <br /> and
                    unique offers from the <br /> Zuri Chat team.
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
