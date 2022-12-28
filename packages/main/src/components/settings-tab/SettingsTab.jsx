import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../settings-tab/SettingsTab.module.css";
import TimeZone from "../time-zone/TimeZone";
import PreferenceWrapper from "../preference-wrapper/PreferenceWrapper";
import { AnimateSharedLayout } from "framer-motion";
import SavePassword from "../save-password/SavePassword";
import TwoFactor from "../two-factor/TwoFactor";
import ChangeEmail from "../change-email/ChangeEmail";
import Language from "../language/Language";
import UserName from "../user-name/UserName";
import { getUser, getLanguage } from "../settings-tab/utils/Common";
import { useTranslation } from "react-i18next";

const SettingsTab = () => {
  const userData = getUser();
  const lang = getLanguage();
  const { t } = useTranslation();
  const handleSignOut = () => {};
  return (
    <>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("password_settings_tab")}
          text={t("change_password_settings_tab")}
          btnText={t("expand_settings_tab")}
        >
          {/* Password input goes uunder here */}
          <SavePassword />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("twofactor_settings_tab")}
          text={t("active_settings_tab")}
          btnText={t("expand_settings_tab")}
        >
          {/* Two factor authentication input field goes under here */}
          <TwoFactor />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("email_settings_tab")}
          text={`${t("mail_settings_tab")} ${userData.email}`}
          btnText={t("expand_settings_tab")}
        >
          {/* Email address input field goes under here */}
          <ChangeEmail />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("zone_settings_tab")}
          text={`${t("time_settings_tab")} ${userData.time_zone}.`}
          btnText={t("expand_settings_tab")}
        >
          {/* TimeZone input field goes under here */}
          <TimeZone />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("lang_settings_tab")}
          text={`${t("chooselang_settings_tab")}  ${
            lang.user.settings.languages_and_regions.language
          }.`}
          btnText={t("expand_settings_tab")}
        >
          {/* Language input field goes under here */}
          <Language />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <div className={styles.settingsTab} id={styles.settingtab}>
        <div
          className={styles.settingleft}
          id={styles.settingleft}
          style={{ fontSize: "24px" }}
        >
          {t("sign_settings_tab")} <br />
          <span style={{ fontSize: "18px" }}>{t("lost_settings_tab")}</span>
        </div>
        <div className={styles.settingsright}>
          <Link to="/session-signout">
            <button onClick={handleSignOut} className={styles.signout}>
              {t("signout_settings_tab")}
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.settingsTab} id={styles.settingtab}>
        <div
          className={styles.settingleft}
          id={styles.settingleft}
          style={{ fontSize: "24px" }}
        >
          {t("acc_settings_tab")} <br />
          <span style={{ fontSize: "18px" }}>{t("zuri_settings_tab")}</span>
          <br />
          <span style={{ fontSize: "18px" }}>
            <strong> {t("note_settings_tab")}</strong>{" "}
            {t("account_settings_tab")}{" "}
            <NavLink to="/" className={styles.emailLink}>
              {t("change_settings_tab")}
            </NavLink>
          </span>
        </div>
        <div className={styles.settingsright}>
          <Link to="/admin/settings/accountsProfile/account-deactivation">
            <button className={styles.delete}>
              {t("deactivate_settings_tab")}
            </button>
          </Link>
        </div>
      </div>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("user_settings_tab")}
          text={t("change_username_settings_tab")}
          btnText={t("expand_settings_tab")}
        >
          {/* Username input field goes under here */}
          <UserName />
        </PreferenceWrapper>
      </AnimateSharedLayout>
    </>
  );
};

export default SettingsTab;
