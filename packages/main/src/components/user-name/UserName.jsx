import React from "react";
import styles from "../user-name/SettingsTab.module.css";
import { useTranslation } from "react-i18next";

const UserName = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5 mt-2">
          <input type="text" className="form-control" required />
        </div>
        <div className="col-md-4 mb-3 mt-3">
          <button className="btn"> {t("save_username")}</button>
        </div>
        <p>{t("profile _username")}</p>
      </form>
    </div>
  );
};

export default UserName;
