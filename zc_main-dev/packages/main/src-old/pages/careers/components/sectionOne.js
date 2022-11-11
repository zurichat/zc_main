import React from "react";

import { Link } from "react-router-dom";
import styles from "../styles/sectionOne.module.css";
// import image from '../assets/section_one_image.svg'
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import person4 from "../assets/person4.svg";
import groupImage from "../assets/group_image_sectionOne.svg";
import { useTranslation } from "react-i18next";

const SectionOne = () => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.Section1}`}>
      <div className={styles.section1_content}>
        <section className={`${styles.section1Left}`}>
          <div className={styles.section1_info}>
            <h1>{t("careers.section_one.headline")}</h1>
            <p>{t("careers.section_one.post_headline")}</p>
            <div className={styles.section1_btn}>
              <Link to="/signup" className={styles.JoinBtn}>
                {t("careers.section_one.join_link")}
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.group_images}>
          <img className={styles.person1} src={person1} alt="" />
          <img className={styles.person2} src={person2} alt="" />
          <img className={styles.person3} src={person3} alt="" />
          <img className={styles.person4} src={person4} alt="" />
        </section>
      </div>
    </section>
  );
};

export default SectionOne;
