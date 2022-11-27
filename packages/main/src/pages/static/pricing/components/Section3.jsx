import { Link } from "react-router-dom";
import styles from "./Section3.module.css";
import { useTranslation } from "react-i18next";

function Section3() {
  const { t } = useTranslation();

  const textAlign = () => {
    if (
      window.localStorage.myLanguage === "ar" ||
      window.localStorage.myLanguage === "iw"
    ) {
      return {
        textAlign: "right"
      };
    }
  };

  return (
    <section
      id="security-assurance"
      className={`${styles.section3} ${styles.py3}`}
    >
      <div className={styles.container} style={textAlign()}>
        <header>
          <h2 className={`${styles.textHead}`} style={textAlign()}>
            {t("pricing.sectionThree.headline")}
          </h2>
        </header>

        <p>{t("pricing.sectionThree.description")}</p>

        <Link className={styles.textLink} to="./security">
          {t("pricing.sectionThree.link")}
        </Link>
      </div>
    </section>
  );
}

export default Section3;
