import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline, IoSpeedometerOutline } from "react-icons/io5";
import { getUser } from "../settings-home/utils/Common";

import AdminSettings from "../admin-settings/AdminSettings";
import right_caret from "../settings-home/assets/cheveron-right.svg";
import classes from "../settings-home/SettingsHome.module.css";

import { useTranslation } from "react-i18next";

const randomizedGreeting = ["Hey there", "Welcome,", "¡Hola,"];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const Home = () => {
  const [greeting, setGreeting] = useState(null);
  useEffect(() => {
    const newNumber = generateRandomNumber(1, 3);
    const greetingProcedure = randomizedGreeting[newNumber];
    setGreeting(greetingProcedure);
  }, []);

  const { t } = useTranslation();

  const user = getUser();
  return (
    <AdminSettings>
      <Container className={`p-4 ${classes.mtN3}`}>
        <div>
          <h1 className="mb-4">
            {greeting} {user.first_name}!
          </h1>
        </div>

        <div className={classes.card}>
          <div className="mt-2">
            <div
              className=""
              style={{
                display: "flex",
                paddingLeft: "1.4em",
                alignItems: "center"
              }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#1C9BD1" }}
                >
                  <IoSettingsOutline className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>{t("settings_settings_home")}</h3>
                  <span className={classes.span_text}>
                    {t("configure_settings_home")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div>
            <Link
              to="/admin/settings/accountsProfile"
              className=""
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#1C9BD1" }}
                >
                  <IoSettingsOutline className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginLeft: " 1em"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>{t("account_settings_home")}</h3>
                  <span className={classes.span_text}>
                    {t("editprofile_settings_home")}
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>

          <hr
            style={{
              width: "calc(100% - 5%)",
              height: "0.5px",
              margin: "1em auto"
            }}
          />

          <div className="mt-2">
            <Link
              to="/admin/settings/ManageWorkspace"
              className=""
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#DE4E2A" }}
                >
                  <BiUser className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3> {t("manageworkspace_settings_home")} </h3>
                  <span className={classes.span_text}>
                    {t("invite_settings_home")}
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className={classes.card}>
          <ul
            className={classes.settings_home_footer}
            style={{
              listStyle: "none",
              fontSize: "1rem",
              textAlign: "left",
              margin: "4rem auto",
              lineHeight: "2rem",
              display: "inline-block"
            }}
          >
            <div className={classes.footer_links}>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/whyzurichat" target="_blank">
                  {t("blog_settings_home")}
                </Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/downloads">{t("downloads_settings_home")}</Link>
              </li>
            </div>
            <div className={classes.footer_links}>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/help">{t("help_settings_home")}</Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/legal">{t("brandguide_settings_home")}</Link>
              </li>
            </div>
            <div className={classes.footer_links}>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/contact-us">{t("contact_settings_home")}</Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/privacy">{t("policy_settings_home")}</Link>
              </li>
            </div>
            <div className={classes.footer_links}>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/pricing">{t("pricing_settings_home")}</Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/signout">{t("signout_settings_home")}</Link>
              </li>
            </div>
          </ul>
        </div>
      </Container>
    </AdminSettings>
  );
};

export default Home;
