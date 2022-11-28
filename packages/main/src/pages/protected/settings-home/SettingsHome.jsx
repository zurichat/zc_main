import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline, IoSpeedometerOutline } from "react-icons/io5";
import { getUser } from "../settings-home/utils/Common";

import AdminSettings from "../admin-settings/AdminSettings";
import right_caret from "../settings-home/assets/cheveron-right.svg";
import classes from "../settings-home/SettingsHome.module.css";

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
            <div className="" style={{ display: "flex" }}>
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
                  <h3> Settings & Permissions </h3>
                  <span className={classes.span_text}>
                    Configure your workspace settings, permissions, and
                    authentication preferences.
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
              style={{ display: "flex" }}
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
                  marginLeft: " 1em"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Account Settings </h3>
                  <span className={classes.span_text}>
                    Edit your profile, update your username and password, and
                    manage other account settings.
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
              margin: "2em auto"
            }}
          />

          <div className="mt-2">
            <Link
              to="/admin/settings/ManageWorkspace"
              className=""
              style={{ display: "flex" }}
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
                  <h3> Manage your workspace </h3>
                  <span className={classes.span_text}>
                    Invite new members and manage user permissions
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
              textAlign: "center",
              margin: "4rem auto",
              lineHeight: "2rem"
            }}
          >
            <li
              style={{
                display: "inline-block",
                margin: "0.75rem"
              }}
            >
              <Link to="/tour">Tour</Link>
            </li>
            <li
              style={{
                display: "inline-block",
                margin: "0.75rem"
              }}
            >
              <Link to="/download-apps">Download Apps</Link>
            </li>
            <li
              style={{
                display: "inline-block",
                margin: "0.75rem"
              }}
            >
              <Link to="/legal">Brand Guidelines</Link>
            </li>
            <li
              style={{
                display: "inline-block",
                margin: "0.75rem"
              }}
            >
              <Link to="/help">Help</Link>
            </li>
            <li
              style={{
                display: "inline-block",
                margin: "0.75rem"
              }}
            >
              <Link to="/confirm-deactivation" target="_blank">
                API
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                margin: "0.75rem"
              }}
            >
              <Link to="/pricing">Pricing</Link>
            </li>
            <div>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/contact-us">Contact</Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/privacy">Policies</Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/ZurichatBlog" target="_blank">
                  Our Blog
                </Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  margin: "0.75rem"
                }}
              >
                <Link to="/session-signout">Sign Out</Link>
              </li>
            </div>
          </ul>
        </div>
      </Container>
    </AdminSettings>
  );
};

export default Home;
