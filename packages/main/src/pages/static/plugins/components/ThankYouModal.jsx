import React, { useState, useRef } from "react";
import css from "./ThankYouModal.module.css";
import modal_img1 from "./assets/modal-email-icon.svg";
import { useTranslation } from "react-i18next";
// import axios from 'axios'

const ThankYouModal = ({ displayModal, setDisplayModal }) => {
  const modalRef = useRef();
  const { t } = useTranslation();

  const closeModal = event => {
    if (modalRef.current === event.target) {
      setDisplayModal(false);
    }
  };

  return (
    <>
      {displayModal ? (
        <div
          className={`${css.modalLayer}`}
          onClick={closeModal}
          ref={modalRef}
        >
          <div className={`col-sm-12 d-flex flex-column }`}>
            <div className={`p-5 ${css.modalWrap}`}>
              <div className={`row ${css.modalRow}`}>
                <div
                  className={`col-sm-12 d-flex flex-column ${css.modalColumn}`}
                >
                  <div className={`mx-auto ${css.modalIcon}`}>
                    <img
                      src={modal_img1}
                      alt="email icon"
                      className={`img-fluid`}
                    />
                  </div>
                  <h3 className={`text-center my-4 ${css.modalHeading}`}>
                    {t("thank_you")}
                  </h3>
                  <p className={`text-center ${css.modalText}`}>
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
};

export default ThankYouModal;
