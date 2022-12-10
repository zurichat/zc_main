import React from "react";
import { Link } from "react-router-dom";
import footerStyles from "./Footer.module.css";
import footerLogo from "../assets/Zuri Chat Logo.svg";
export default function footer() {
  const myStyle = {
    textDecoration: "none",
    color: "white",
    marginBottom: "1.5rem"
  };
  return (
    <footer className={footerStyles.mainFooter}>
      <div className={footerStyles.cFooter}>
        <img
          className={footerStyles.footer_logo}
          src={footerLogo}
          alt="zuri chat logo"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Company</h5>
          <Link style={myStyle} to="/careers">
            Careers
          </Link>
          <p>About Us</p>
          <Link style={myStyle} to="/contact-us">
            Contact Us
          </Link>
          <Link style={myStyle} to="/whyzurichat">
            Why Zuri Chat?
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Information</h5>
          <p>Privacy & Terms</p>
          <Link style={myStyle} to="/ZurichatBlog">
            Blogs
          </Link>
          <p>Plugins</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Legal</h5>
          <p>Security</p>
          <p>Cookies</p>
          <Link style={myStyle} to="/privacy">
            Privacy
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>Know us</h5>
          <Link style={myStyle} to="/privacy">
            About
          </Link>
          <Link style={myStyle} to="/contact-us">
            Contact
          </Link>
          <Link style={myStyle} to="/downloads">
            Downloads
          </Link>
        </div>
      </div>
      <div className={footerStyles.dFooter}>
        <p>&copy; 2022 Zuri Chat. All Rights Reserved</p>
        <p>Version - 1.0.0</p>
      </div>
    </footer>
  );
}
