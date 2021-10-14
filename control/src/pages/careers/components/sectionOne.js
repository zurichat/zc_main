import React from 'react'

import { Link } from 'react-router-dom'
import styles from '../styles/sectionOne.module.css'
// import image from '../assets/section_one_image.svg'
import groupImage from '../assets/group_image_sectionOne.svg';
import { useTranslation} from "react-i18next";


const SectionOne = () => {
  const { t } = useTranslation();

  return (  
    <div className={`${styles.Section1}`}>
      <div className={`${styles.section1Left}`}>
        <h1>{t("careers.section_one.headline")}</h1>
        <p>{t("careers.section_one.post_headline")}</p>
        <Link to="/signup">
          <a className={styles.JoinBtn}>{t("careers.section_one.join_link")}</a>
        </Link>
      </div>
      <img src={groupImage} alt="people" />
    </div>
  )
}

export default SectionOne
