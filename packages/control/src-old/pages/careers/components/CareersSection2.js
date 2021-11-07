import styles from "../styles/CareersSection2.module.css";
import { useTranslation } from "react-i18next";

function CareersSection2() {
  const { t } = useTranslation();

  return (
    <section className={`${styles.Section2}`}>
      <header className={styles.section2_header}>
        <h2>{t("careers.section_two.headline")}</h2>
        <p>{t("careers.section_two.post_headline")}</p>
      </header>
      <div className={`${styles.subSection2}`}>
        <section className={styles.subsection2_content}>
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
        </section>
      </div>
    </section>
  );
}

export default CareersSection2;
