import React, { useState } from "react";

import styles from "../about-workspace-tabs/AboutWorkspaceTab.module.css";
import RetentionAndExports from "../retention-exports/RetentionAndExports";
import AdminOwners from "../admin-owners/AdminOwners";
import OverviewWorkspace from "../overview-workspace/OverviewWorkspace";
import { FiMenu } from "react-icons/fi";
import { CardProvider } from "../context/CardContext";
import { useTranslation } from "react-i18next";

const AboutWorkSpaceTabs = ({
  organizationDetails,
  currentWorkspace,
  admins
}) => {
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
            {t("about_workspace_tabs_overview")}
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
            {t("about_workspace_tabs_admins")}
          </div>

          <div
            onClick={() => {
              setActive(3);
              setOpenTab(!openTab);
            }}
            className={
              active === 3 ? styles.tabHeaderItemActive : styles.tabHeaderItem
            }
          >
            {t("about_workspace_tabs_retention")}
          </div>
        </div>

        <div className={styles.tabContent}>
          {active === 2 && (
            <AdminOwners
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
              admins={admins}
            />
          )}
          {active === 3 && (
            <RetentionAndExports
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          )}
          {active === 1 && (
            <OverviewWorkspace
              setActive={setActive}
              setOpenTab={setOpenTab}
              openTab={openTab}
              organizationDetails={organizationDetails}
              currentWorkspace={currentWorkspace}
            />
          )}
        </div>
      </div>
    </CardProvider>
  );
};

export default AboutWorkSpaceTabs;
