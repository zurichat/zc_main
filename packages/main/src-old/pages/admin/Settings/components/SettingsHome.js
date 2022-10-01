import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BsCreditCard2Back } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline, IoSpeedometerOutline } from "react-icons/io5";
import { FaMagic } from "react-icons/fa";
import { getUser } from "../../Utils/Common";
// import
import AdminSettings from "../../.";
import right_caret from "../../assets/cheveron-right.svg";
import classes from "../styles//SettingsHome.module.css";
import { GoPlug } from "react-icons/go";

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
          {/* Picture of User */}
          <h1 className="mb-4">
            {greeting} {user.first_name}!
          </h1>
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
        </div>

        {/* Customize Zuri  */}
        <div className={classes.card}>
          {/* Settings and permissions*/}
          <div className="mt-2">
            <Link to="/admin/settings" className="" style={{ display: "flex" }}>
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
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>
          {/* Manage workspace */}
          <div className="mt-2">
            <Link to="/admin/stats" className="" style={{ display: "flex" }}>
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

          {/* Billing */}
          <div className="mt-2" style={{}}>
            <Link
              to="/admin/settings/billings"
              className=""
              style={{ display: "flex" }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#007A5A" }}
                >
                  <BsCreditCard2Back className={classes.settings_icon} />
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
                  <h3> Billing </h3>
                  <p>
                    Your workspace is on the <b>Free Plan</b> <br />
                    Upgrade to the <b>Pro Plan</b> or <b>Business + Plan</b> for
                    additional features including:
                  </p>
                  <ul style={{ fontSize: "1.1em", color: "#000" }}>
                    <li>Unlimited messages archives and search</li>
                    <li>Unlimited integrations with external services</li>
                    <li>Premuim Support</li>
                    <li>Guest accounts</li>
                    <li>Voice and video calls for group</li>
                    <li>Screen Sharing</li>
                  </ul>
                  <div style={{ display: "flex", gap: "1em" }}>
                    <button
                      style={{
                        padding: "0.4em 0.5em",
                        backgroundColor: "#007A5A",
                        color: "white",
                        borderRadius: "4px"
                      }}
                    >
                      Upgrade your team
                    </button>
                    <button
                      style={{
                        padding: " 0.4em 0.5em",
                        border: "1px solid #333",
                        borderRadius: "4px",
                        backgroundColor: "transparent"
                      }}
                    >
                      Compare Plans
                    </button>
                  </div>
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

          {/* Customize Zuri  */}
          <div>
            <Link
              to="/admin/settings/customize"
              className=""
              style={{ display: "flex" }}
            >
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#007A5A" }}
                >
                  <FaMagic className={classes.settings_icon} />
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
                  <h3>Customize Zuri</h3>
                  <span className={classes.span_text}>
                    Use these settings to make Zuri your own.
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>

          {/* Analytics  */}
          <div className="mt-2">
            <Link to="/admin/stats" className="" style={{ display: "flex" }}>
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#4D394B" }}
                >
                  <IoSpeedometerOutline className={classes.settings_icon} />
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
                  <h3> Analytics </h3>
                  <span className={classes.span_text}>
                    View stats for your workspace, including activity, files,
                    and integrations.
                  </span>
                </div>
                <div>
                  <img src={right_caret} alt="go" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Applications*/}
        <div className={classes.card}>
          {/* Settings and permissions*/}
          <div className="mt-2">
            <Link to="/admin/settings" className="" style={{ display: "flex" }}>
              <div>
                <span
                  className={classes.settings_icon_holder}
                  style={{ backgroundColor: "#1C9BD1" }}
                >
                  <GoPlug className={classes.settings_icon} />
                </span>
              </div>
              <div
                className=""
                style={{
                  alignItems: "center",
                  marginLeft: " 1em",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3> Applications </h3>
                  <span className={classes.span_text}>
                    Applications automatically let you pull information and
                    activity from outside tools into Slack in a way that's
                    timely, relevant and searchable. Get started with some of
                    our most popular applications:
                  </span>
                </div>
                <div>
                  <p
                    className={`${classes.services_promo} ${classes.align_center}`}
                  >
                    <Link
                      to="/services/new/dropbox"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Dropbox"
                      style={{
                        display: "inline-block",
                        margin: "1rem"
                      }}
                    >
                      <img
                        src="https://a.slack-edge.com/80588/img/services/dropbox_128.png"
                        style={{
                          width: "56px",
                          height: "56px"
                        }}
                      />
                    </Link>
                    <Link
                      to="/services/new/trello"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Trello"
                      style={{
                        display: "inline-block",
                        margin: "1rem"
                      }}
                    >
                      <img
                        src="https://a.slack-edge.com/80588/img/services/trello_128.png"
                        style={{
                          width: "56px",
                          height: "56px"
                        }}
                      />
                    </Link>
                    <Link
                      to="/services/new/gdrive"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Google Drive"
                      style={{
                        display: "inline-block",
                        margin: "1rem"
                      }}
                    >
                      <img
                        src="https://a.slack-edge.com/6ee36/img/services/gdrive_128.png"
                        style={{
                          width: "56px",
                          height: "56px"
                        }}
                      />
                    </Link>
                    <Link
                      to="/services/new/github"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="GitHub"
                      style={{
                        display: "inline-block",
                        margin: "1rem"
                      }}
                    >
                      <img
                        src="https://a.slack-edge.com/80588/img/services/github_128.png"
                        style={{
                          width: "56px",
                          height: "56px"
                        }}
                      />
                    </Link>
                    <Link
                      to="/services/new/twitter"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Twitter"
                      style={{
                        display: "inline-block",
                        margin: "1rem"
                      }}
                    >
                      <img
                        src="https://a.slack-edge.com/80588/img/services/twitter_128.png"
                        style={{
                          width: "56px",
                          height: "56px"
                        }}
                      />
                    </Link>
                    <Link
                      to="/services/new/hangouts"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Google Hangouts"
                      style={{
                        display: "inline-block",
                        margin: "1rem"
                      }}
                    >
                      <img
                        src="https://a.slack-edge.com/80588/img/services/hangouts_128.png"
                        style={{
                          width: "56px",
                          height: "56px"
                        }}
                      />
                    </Link>
                  </p>
                  <p
                    className={classes.align_center}
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <Link
                      to="/"
                      className={`${classes.btn} ${classes.btn_large} ${classes.hide_on_mobile} ${classes.large_bottom_margin}`}
                      style={{
                        display: "inline-block",
                        margin: "1em",
                        background: "#00ba7c",
                        padding: "1.2em",
                        color: "#eee"
                      }}
                    >
                      <GoPlug
                        style={{
                          marginRight: "1em"
                        }}
                      />
                      View App Directory
                    </Link>
                  </p>
                </div>
              </div>
              <div className={classes.overlay}></div>
            </Link>
          </div>
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
