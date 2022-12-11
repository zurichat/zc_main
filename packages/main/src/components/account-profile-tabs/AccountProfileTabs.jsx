import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../account-profile-tabs/AboutWorkspaceTab.module.css";

import SettingsTab from "../settings-tab/SettingsTab";
import NotificationTab from "../notification-tab/NotificationTab";

import { FiMenu } from "react-icons/fi";
import { CardProvider } from "../context/CardContext";
import { useTranslation } from "react-i18next";

const AccountsProfileTabs = () => {
  const history = useHistory();
  const [openTab, setOpenTab] = useState(false);
  const [active, setActive] = useState(1);
  const { t } = useTranslation();
  return (
    <CardProvider>
      <div className={styles.tabWrapper}>
        <div
          className={styles.mobileToggle}
          onClick={() => setOpenTab(!openTab)}
        >
          <FiMenu className={styles.menuIcon} />
        </div>
        <div className={openTab ? styles.tabHeaderActive : styles.tabHeader}>
          <div
            onClick={() => {
              setActive(1);
              setOpenTab(!openTab);
            }}
            className={
              active === 1 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            {t("account_profile_tabs_settings")}
          </div>
          <div
            onClick={() => {
              setActive(2);
              setOpenTab(!openTab);
            }}
            className={
              active === 2 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            {t("account_profile_tabs_notification")}
          </div>
          <div
            onClick={() => {
              history.push("./home");
            }}
            className={
              active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          ></div>
        </div>

        <div className={styles.tabContent}>
          {active === 1 && (
            <SettingsTab
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          )}
          {active === 2 && (
            <NotificationTab
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          )}
        </div>
      </div>
    </CardProvider>
  );
};

export default AccountsProfileTabs;
