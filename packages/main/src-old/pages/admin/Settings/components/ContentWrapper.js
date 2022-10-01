import React, { useState } from "react";
import AdminSettings from "../..";
import { FiMenu } from "react-icons/fi";
import classes from "../styles/ContentWrapper.module.css";

const ContentWrapper = ({
  title,
  text,
  span,
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tab1Content,
  tab2Content,
  tab3Content,
  tab4Content,
  tab5Content
}) => {
  const [openTab, setOpenTab] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div>
      <AdminSettings>
        <div className={classes.container}>
          <div className={classes.contentHeading}>
            <h1>{title}</h1>
            <p>
              {text} <span>{span}</span>
            </p>
          </div>
          <div className={classes.contentWrapper}>
            <div className={classes.tabWrapper}>
              <div className={classes.tabs}>
                <div
                  onClick={() => setOpenTab(!openTab)}
                  className={classes.mobileToggle}
                >
                  <FiMenu className={classes.menuIcon} />
                </div>
                <div
                  className={
                    openTab ? classes.tabHeaderActive : classes.tabHeader
                  }
                >
                  <div
                    onClick={() => {
                      setActive(1);
                      setOpenTab(!openTab);
                    }}
                    className={
                      active === 1
                        ? classes.tabHeaderItemActive
                        : classes.tabHeaderItem
                    }
                  >
                    {tab1}
                  </div>
                  <div
                    onClick={() => {
                      setActive(2);
                      setOpenTab(!openTab);
                    }}
                    className={
                      active === 2
                        ? classes.tabHeaderItemActive
                        : classes.tabHeaderItem
                    }
                  >
                    {tab2}
                  </div>
                  <div
                    onClick={() => {
                      setActive(3);
                      setOpenTab(!openTab);
                    }}
                    className={
                      active === 3
                        ? classes.tabHeaderItemActive
                        : classes.tabHeaderItem
                    }
                  >
                    {tab3}
                  </div>
                  <div
                    onClick={() => {
                      setActive(4);
                      setOpenTab(!openTab);
                    }}
                    className={
                      active === 4
                        ? classes.tabHeaderItemActive
                        : classes.tabHeaderItem
                    }
                  >
                    {tab4}
                  </div>
                  <div
                    onClick={() => {
                      setActive(5);
                      setOpenTab(!openTab);
                    }}
                    className={
                      active === 5
                        ? classes.tabHeaderItemActive
                        : classes.tabHeaderItem
                    }
                  >
                    {tab5}
                  </div>
                </div>
              </div>
              <div className={classes.tabContents}>
                {active === 1 && tab1Content}
                {active === 2 && tab2Content}
                {active === 3 && tab3Content}
                {active === 4 && tab4Content}
                {active === 5 && tab5Content}
              </div>
            </div>
          </div>
        </div>
      </AdminSettings>
    </div>
  );
};

export default ContentWrapper;
