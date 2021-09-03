import React from "react";
import "../styles/Popup.css";

function Popup(props) {
  return (props.trigger) ? (
    <div className="Popup">
      <div className="Popup-inner">
        <button className="Popup-close" onClick={()=>props.setclick(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
