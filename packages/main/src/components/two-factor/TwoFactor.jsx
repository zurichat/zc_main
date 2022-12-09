import React from "react";
import { Link } from "react-router-dom";
import styles from "../two-factor/SettingsTab.module.css";
import { useTranslation } from "react-i18next";

const TwoFactor = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.two_factor}>
      <p>{t("Protect_Twofactor")}</p>
      <p>
        {t("learn_Twofactor")}
        <Link to=""> {t("link_Twofactor")}</Link>
      </p>

      <div className="col-md-6 mb-1 mt-3">
        <button className="btn py-2">{t("set_Twofactor")}</button>
      </div>
      <span>{t("note_Twofactor")}</span>
    </div>
  );
};

export default TwoFactor;
