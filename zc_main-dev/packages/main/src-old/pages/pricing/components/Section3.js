import { Link } from "react-router-dom";
import styles from "../styles/Section3.module.css";
import "../../../i18n";
import { useTranslation } from "react-i18next";

function Section3() {
  const { t } = useTranslation();

  return (
    <section
      id="security-assurance"
      className={`${styles.section3} ${styles.py3}`}
    >
      <div className={styles.container}>
        <header>
          <h2 className={`${styles.textHead}`}>
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
