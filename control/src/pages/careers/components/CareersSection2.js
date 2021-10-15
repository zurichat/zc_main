import styles from '../styles/CareersSection2.module.css'
import { useTranslation} from "react-i18next";


function CareersSection2() {

  const { t } = useTranslation();

  return (
    <section className={`${styles.Section2}`}>
      <header className={styles.section2_header}>
        <h2>{t("Working and Thriving")}</h2>
        <p>{t("We offer benefits that help you feel your best and do your best")}</p>
      </header>
      <div className={`${styles.subSection2}`}>
        <section className={styles.subsection2_content}>
          <div>
            <h3>{t("Digital-first office")}</h3>
            <p>{t("With remote roles, office free onboarding and flexible working practices, we are set up for ever-changing  realities, schedules and responsibilities.")}</p>
          </div>
          <div>
            <h3>{t("Just for you")}</h3>
            <p>{t("Recieve an annual allowance for professional development, plus a monthly stipend you can use toward  anything. A new work look, a pet. Whatever matters most to you.")}</p>
          </div>
          <div>
            <h3>{t("Health and Wellness")}</h3>
            <p>{t("Zurichat pays 100% of your premiums. We also offer access to a range of free mental health and well-being  resources.")}</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default CareersSection2
