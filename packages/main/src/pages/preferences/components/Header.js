import React from "react";

import "../assets/css/main.css";

import xcircle from "../assets/images/XCircle.png";

export default function Header() {
  return (
    <header className="mx-auto my-4 d-flex justify-content-between align-items-center">
      <div>
        <h6>Preference</h6>
      </div>
      <div>
        <img className="pe-auto" role="button" src={xcircle} alt="" />
      </div>
    </header>
  );
}
