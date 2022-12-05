import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";

import TopNavigationBarStyles from "./TopNavigationBar.module.css";
import uk from "./assets/language/uk.png";
import de from "./assets/language/de.png";
import fr from "./assets/language/fr.png";
import us from "./assets/language/us.png";
import nl from "./assets/language/nl.png";
import zh from "./assets/language/zh.png";
import ar from "./assets/language/ar.png";
import he from "./assets/language/he.png";
import pt from "./assets/language/pt.png";
import es from "./assets/language/es.png";
import it from "./assets/language/it.png";
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
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="ar"
            onClick={() => saveLang("ar")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={ar}
              alt="Arabic"
              title="Arabic"
            />{" "}
            <span>Arabic</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="iw"
            onClick={() => saveLang("iw")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={he}
              alt="Hebrew"
              title="Hebrew"
            />{" "}
            <span>Hebrew</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="es"
            onClick={() => saveLang("es")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={es}
              alt="Spanish"
              title="Spanish"
            />{" "}
            <span>Spanish</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="it"
            onClick={() => saveLang("it")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={it}
              alt="Italian"
              title="Italian"
            />{" "}
            <span>Italian</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="zh"
            onClick={() => saveLang("zh")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={zh}
              alt="Chinese"
              title="Chinese"
            />{" "}
            <span>Chinese</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="pt"
            onClick={() => saveLang("pt")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={pt}
              alt="Portuguese"
              title="Portuguese"
            />{" "}
            <span>Portuguese</span>
          </button>
          <button
            className={`btn ${TopNavigationBarStyles.select}`}
            value="nl"
            onClick={() => saveLang("nl")}
          >
            <img
              className={TopNavigationBarStyles.country_logo}
              src={nl}
              alt="Dutch"
              title="Dutch"
            />{" "}
            <span>Dutch</span>
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LanguageIcon;
