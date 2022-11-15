import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";

import TopNavigationBarStyles from "./TopNavigationBar.module.css";
import uk from "./assets/language/uk.png";
import de from "./assets/language/de.png";
import fr from "./assets/language/fr.png";
import us from "./assets/language/us.png";
import world from "./assets/language/world.png";

const LanguageIcon = ({ style }) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const saveLang = lang => {
    localStorage.setItem("myLanguage", lang);
    location.reload();
  };

  return (
    <div style={style}>
      <button
        onClick={() => setIsModalOpen(true)}
        className={TopNavigationBarStyles.world}
      >
        <img src={world} alt="Change Language" title="Choose your Language" />{" "}
      </button>
      <Modal
        size="lg"
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header
          className={TopNavigationBarStyles.modal_header}
          closeButton
          closeLabel
        >
          <Modal.Title id="example-modal-sizes-title-lg">
            Select your language
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={TopNavigationBarStyles.country}>
          <button
            value="en"
            onClick={() => saveLang("en")}
            className={`btn ${TopNavigationBarStyles.select}`}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={uk}
              alt="English (UK)"
              title="English (UK)"
            />{" "}
            <span>English (UK)</span>
          </button>
          <button
            value="en-us"
            onClick={() => saveLang("en-us")}
            className={`btn ${TopNavigationBarStyles.select}`}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={us}
              alt="English (US)"
              title="English (US)"
            />{" "}
            <span>English (US)</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="fr"
            onClick={() => saveLang("fr")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={fr}
              alt="French"
              title="French"
            />{" "}
            <span>French</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="de"
            onClick={() => saveLang("de")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={de}
              alt="Deutch"
              title="Deutch"
            />{" "}
            <span>Deutch</span>
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LanguageIcon;
