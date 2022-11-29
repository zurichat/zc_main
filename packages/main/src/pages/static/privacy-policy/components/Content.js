import React, { useState, useRef } from "react";
import Link from "../../../../components/link/Link";
import Style from "../styles/content.module.css";

import veryBigLock from "../assets/padlock.png";
import Icon from "../assets/close-modal.png";
import Modal from "../components/modal/Modal";
import { policyData } from "../policyData";
import { useTranslation } from "react-i18next";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const applRef = useRef(null);
  const infoRef = useRef(null);
  const dataRef = useRef(null);
  const partnerRef = useRef(null);

  const handleToUpdate = action => {
    setIsModalOpen(action);
  };

  const changeContent = data => {
    setModalContent([data]);
    handleToUpdate(true);
  };

  const handleClick = curRef => {
    curRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { t } = useTranslation();

  return (
    <div className={Style.privacyContainer}>
      <div className={Style.mainContainer}>
        <div className={Style.partContainer}>
          <h1 className={Style.headingOne}>{t("privacy_header_title")}</h1>
          <div className={Style.info}>{t("privacy_header_description")}</div>
        </div>
        <div className={Style.imageWrapper}>
          <div className={Style.bigLockImage}>
            <img
              src={veryBigLock}
              className={Style.veryBigLock}
              alt="very big lock"
            />
          </div>
        </div>
      </div>
      <div className={Style.subContainer}>
        <h2 className={Style.section}>{t("privacy_content_one_date")}</h2>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_one_title")}</strong>
        </p>
        <p>{t("privacy_content_one_description_one")}</p>
        <p>{t("privacy_content_one_description_two")}</p>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_two_title")}</strong>
        </p>
        <p>
          {t("privacy_content_two_description_one_head")}{" "}
          <Link to="/cookies-banner" title={t("privacy_content_link_one")} />{" "}
          {t("privacy_content_two_description_one-bottom")}
        </p>
        <p>
          {t("privacy_content_two_description_two")}{" "}
          <Link
            to="/nigeria-privacy-disclosure"
            title={t("privacy_content_link_two")}
          />
        </p>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_three_title")}</strong>
        </p>
        <div className={Style.contentBox}>
          <div className={Style.contentBox_1}>
            {policyData.map(data => (
              <div key={data.id}>
                <button
                  className={Style.button_link}
                  onClick={() => changeContent(data)}
                >
                  {t(data.title)}
                </button>
              </div>
            ))}
          </div>
          <div className={Style.effectiveAll}>
            <p className={Style.textUnderline}>
              <strong>{t("privacy_content_three_sub_title_one")}</strong>
            </p>
            <p className={Style.parinfo}>
              {t("privacy_content_three_sub_description_one")}
            </p>
            <p className={Style.referZuri}>
              {t("privacy_content_three_sub_description_two")}
            </p>
            <p className={Style.textUnderline}>
              <strong>{t("privacy_content_three_sub_title_two")}</strong>
            </p>
            <div className={Style.tablelinks}>
              <button
                className={Style.tb_button}
                onClick={() => handleClick(applRef)}
                underline
              >
                {t("privacy_content_three_sub_text_one")}
              </button>{" "}
              <br />
              <button
                className={Style.tb_button}
                onClick={() => handleClick(infoRef)}
                underline
              >
                {t("privacy_content_three_sub_text_two")}
              </button>{" "}
              <br />
              <button
                className={Style.tb_button}
                onClick={() => handleClick(dataRef)}
                underline
              >
                {t("privacy_content_three_sub_text_three")}
              </button>{" "}
              <br />
              <button
                className={Style.tb_button}
                onClick={() => handleClick(partnerRef)}
                underline
              >
                {t("privacy_content_three_sub_text_four")}
              </button>{" "}
              <br />
              {/* <Link title="Security" underline /> <br />
                    <Link title="Age Limitations" underline /> <br />
                    <Link
                      title="Changes to this Privacy Policy"
                      underline
                    />{" "}
                    <br />
                    <Link title="International Data Transfers" underline />{" "}
                    <br />
                    <Link title="Data Protection Officer" underline /> <br />
                    <Link
                      title="Identifying the Data Controller and Processor"
                      underline
                    />{" "}
                    <br />
                    <Link title="Your Rights" underline /> <br />
                    <Link title="California Privacy Rights" underline /> <br />
                    <Link title="Data Protection Authority" underline s />{" "}
                    <br />
                    <Link title="Contacting Zurichat" underline /> */}
            </div>
          </div>
        </div>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_four_title")}</strong>
        </p>
        <p>{t("privacy_content_four_description_one")}</p>
        <p>
          {t("privacy_content_four_description_two_sub_text_one")}
          <Link
            to="/choices"
            title={t("privacy_content_link_three")}
            size
          />{" "}
          {t("privacy_content_four_description_two_sub_text_two")}{" "}
          <Link to="/privacy " title={t("privacy_content_link_four")} size />{" "}
          <Link
            to="/cookies-banner"
            title={t("privacy_content_link_one")}
            size
          />{" "}
          {t("privacy_content_four_description_two_sub_text_three")}{" "}
          <Link to="/contact-us" title={t("privacy_content_link_five")} size />{" "}
        </p>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_five_title")}</strong>
        </p>
        <p>
          {t("privacy_content_five_description_one_sub_text_one")}{" "}
          <Link to="/" title="Zurichat.com" />
          {t("privacy_content_five_description_one_sub_text_two")}
        </p>
        <p>
          {t("privacy_content_five_description_two_sub_text_one")}{" "}
          <Link to="/pricing" title="http://Zurichat.com/account/team" />,{" "}
          {t("privacy_content_five_description_two_sub_text_one")}
        </p>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_six_title")}</strong>
        </p>
        <p>{t("privacy_content_six_description")}</p>
        <ul className="privacy-info-list">
          <li>
            <strong>{t("privacy_content_six_list_item_one_head")} </strong> -{" "}
            {t("privacy_content_six_list_item_one_sub_text_one")}{" "}
            <Link
              to="/create-workspace"
              title={t("privacy_content_link_six")}
            />
            {t("privacy_content_six_list_item_one_sub_text_two")}
          </li>
          <li>
            <strong>
              {t("privacy_content_six_list_item_two_sub_text_one")}{" "}
            </strong>{" "}
            - {t("privacy_content_six_list_item_two_sub_text_two")}
          </li>
          <li>
            <strong>
              {t("privacy_content_six_list_item_three_sub_text_one")}{" "}
            </strong>{" "}
            -{t("privacy_content_six_list_item_three_sub_text_two")}
          </li>
          <li>
            <strong>
              {t("privacy_content_six_list_item_four_sub_text_one")}{" "}
            </strong>{" "}
            - {t("privacy_content_six_list_item_four_sub_text_two")}
          </li>
          <li>
            <strong>
              {t("privacy_content_six_list_item_five_sub_text_one")}{" "}
            </strong>{" "}
            -{t("privacy_content_six_list_item_five_sub_text_two")}
          </li>
        </ul>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_seven_title")}</strong>
        </p>
        <p>{t("privacy_content_seven_description")}</p>
        <p className={Style.textUnderline}>
          <strong>{t("privacy_content_eight_title")}</strong>
        </p>
        <p>{t("privacy_content_eight_description")}</p>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} handleToUpdate={handleToUpdate}>
          {modalContent.map(content => (
            <div className={Style.modal} key={content.id}>
              <div className={Style.modal_head}>
                <img
                  src={Icon}
                  alt="close"
                  height={50}
                  onClick={() => {
                    handleToUpdate(false);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={Style.modal_body}>
                <h1 className={Style.modal_title}>{t(content.title)}</h1>
                <p className={Style.modal_text}>{t(content.text)}</p>
                <p className={Style.modal_text}>{t(content.text2)}</p>
                <p className={Style.modal_text}>{t(content.text3)}</p>
              </div>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default Content;
