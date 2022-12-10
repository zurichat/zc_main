import React from "react";
import { Link } from "react-router-dom";
import styles from "../two-factor/SettingsTab.module.css";
import { useTranslation } from "react-i18next";

const TwoFactor = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.two_factor}>
      <p>{t("protect_twofactor")}</p>
      <p>
        {t("learn_twofactor")}
        <Link to=""> {t("link_twofactor")}</Link>
      </p>

      <div className="col-md-6 mb-1 mt-3">
        <button className="btn py-2">{t("set_twofactor")}</button>
      </div>
      <span>{t("note_twofactor")}</span>
    </div>
  );
};

export default TwoFactor;
