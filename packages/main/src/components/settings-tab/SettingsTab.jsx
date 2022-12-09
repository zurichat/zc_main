import React, { useState } from "react";
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
import { getUser } from "../settings-tab/utils/Common";
import { useTranslation } from "react-i18next";

const SettingsTab = () => {
  const userData = getUser();
  const { t } = useTranslation();
  return (
    <>
      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("Password_SettingsTab")}
          text=""
          btnText={t("expand_SettingsTab")}
        >
          {/* Password input goes uunder here */}
          <SavePassword />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("twofactor_SettingsTab")}
          text={t("active_SettingsTab")}
          btnText={t("expand_SettingsTab")}
        >
          {/* Two factor authentication input field goes under here */}
          <TwoFactor />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("email_SettingsTab")}
          text={`${t("mail_SettingsTab")} ${userData.email}`}
          btnText={t("expand_SettingsTab")}
        >
          {/* Email address input field goes under here */}
          <ChangeEmail />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("zone_SettingsTab")}
          text={`${t("time_SettingsTab")} ${userData.time_zone}.`}
          btnText={t("expand_SettingsTab")}
        >
          {/* TimeZone input field goes under here */}
          <TimeZone />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("lang_SettingsTab")}
          text={t("chooselang_SettingsTab")}
          btnText={t("expand_SettingsTab")}
        >
          {/* Language input field goes under here */}
          <Language />
        </PreferenceWrapper>
      </AnimateSharedLayout>

      <div className={styles.settingsTab} id={styles.settingtab}>
        <div className={styles.settingleft} id={styles.settingleft}>
          {t("sign_SettingsTab")} <br />
          <span>{t("lost_SettingsTab")}</span>
        </div>
        <div className={styles.settingsright}>
          <Link to="/session-signout">
            <button className={styles.signout}>
              {t("signout_SettingsTab")}
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.settingsTab} id={styles.settingtab}>
        <div className={styles.settingleft} id={styles.settingleft}>
          {t("acc_SettingsTab")} <br />
          <span>{t("zuri_SettingsTab")}</span>
          <br />
          <span>
            <strong> {t("note_SettingsTab")}</strong> {t("account_SettingsTab")}{" "}
            <NavLink to="/" className={styles.emailLink}>
              {t("change_SettingsTab")}
            </NavLink>
          </span>
        </div>
        <div className={styles.settingsright}>
          <Link to="/settings/confirm-password">
            <button className={styles.delete}>
              {t("deactivate_SettingsTab")}
            </button>
          </Link>
        </div>
      </div>

      <AnimateSharedLayout>
        <PreferenceWrapper
          title={t("user_SettingsTab")}
          btnText={t("expand_SettingsTab")}
        >
          {/* Username input field goes under here */}
          <UserName />
        </PreferenceWrapper>
      </AnimateSharedLayout>
    </>
  );
};

export default SettingsTab;
