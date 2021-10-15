import styles from '../styles/CareersSection2.module.css'
import { useTranslation} from "react-i18next";


function CareersSection2() {

  const { t } = useTranslation();

  return (
    <div className={`${styles.Section2}`}>
      <h2>{t("careers.section_two.headline")}</h2>
      <p>{t("careers.section_two.post_headline")}</p>
      <div className={`${styles.subSection2}`}>
        <div>
          <h3>{t("careers.section_two.digital_wellness.headline")}</h3>
          <p>{t("careers.section_two.digital_wellness.post_headline")}</p>
        </div>
        <div>
          <h3>{t("careers.section_two.just_for_you.headline")}</h3>
          <p>{t("careers.section_two.just_for_you.post_headline")}</p>
        </div>
        <div>
          <h3>{t("careers.section_two.health_and_wellness.headline")}</h3>
          <p>{t("careers.section_two.health_and_wellness.post_headline")}</p>
        </div>
      </div>
    </div>
  )
}

export default CareersSection2
