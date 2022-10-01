import React from "react";
import footer from "../styles/footer.module.css";

function Footer() {
  return (
    <div>
      <div className={footer.wrapper}>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Help Center</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
}

export default Footer;
