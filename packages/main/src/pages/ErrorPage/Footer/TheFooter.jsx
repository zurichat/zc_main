import React from "react";
import { Link } from "react-router-dom";
import styles from "./TheFooter.module.css";
import footerlogo from "../assets/Zuri Chat Logo.svg";
export default function footer() {
  const style = {
    textDecoration: "none",
    color: "white",
    marginBottom: "1.5rem"
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.fFooter}>
        <img
          className={styles.footer_logo}
          src={footerlogo}
          alt="zuri chat logo"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Company</h5>
          <Link style={style} to="/careers">
            Careers
          </Link>
          <p>About Us</p>
          <Link style={style} to="/contact-us">
            Contact Us
          </Link>
          <Link style={style} to="/whyzurichat">
            Why Zuri Chat?
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Information</h5>
          <p>Privacy & Terms</p>
          <Link style={style} to="/ZurichatBlog">
            Blogs
          </Link>
          <p>Plugins</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Legal</h5>
          <p>Security</p>
          <p>Cookies</p>
          <Link style={style} to="/privacy">
            Privacy
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Know us</h5>
          <Link style={style} to="/privacy">
            About
          </Link>
          <Link style={style} to="/contact-us">
            Contact
          </Link>
          <Link style={style} to="/downloads">
            Downloads
          </Link>
        </div>
      </div>
      <div className={styles.sFooter}>
        <p>&copy; 2022 Zuri Chat. All Rights Reserved</p>
        <p>Version - 1.0.0</p>
      </div>
    </footer>
  );
}
