import React from "react";
import styles from "../style/workspace.module.css";
import { useWorkspaceContext } from "./WorkspaceContext";

const ZuriLogo = () => {
  // const { loading } = useWorkspaceContext()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="181"
      height="52"
      viewBox="0 0 200 60"
    >
      <g id="zuriText" className={`${styles.zuri_text}`}>
        <path
          fill="#393939"
          d="M81.4 14.2l-.1 1-.4.8-14.4 20.3H81V41H58.8v-2.3c0-.3 0-.6.2-.9l.4-.7 14.3-20.4H60V12h21.5v2.2zm25.4 22c1 0 1.9-.2 2.7-.5a5.5 5.5 0 003.1-3.6c.3-.8.5-1.8.5-2.8V12h6v17.3c0 1.7-.3 3.3-.9 4.8a10.8 10.8 0 01-6.3 6.3 13.8 13.8 0 01-10.2 0 11 11 0 01-6.3-6.3c-.5-1.5-.8-3-.8-4.8V12h6v17.3c0 1 .1 2 .4 2.8a5.5 5.5 0 003.2 3.6c.8.3 1.7.5 2.6.5zm36.5-10.5c1 0 1.9-.1 2.6-.3a5 5 0 001.7-1c.5-.5.8-1 1-1.6.2-.6.3-1.2.3-2a4 4 0 00-1.4-3.1c-.9-.8-2.2-1.2-4.1-1.2h-3.1v9.2h3zM157.4 41H152c-1 0-1.8-.4-2.2-1.2l-5.5-8.9c-.3-.3-.5-.6-.8-.7-.3-.2-.7-.3-1.2-.3h-2V41h-6V12h9c2.1 0 3.8.2 5.3.6 1.4.4 2.6 1 3.5 1.8 1 .7 1.6 1.6 2 2.6a8.9 8.9 0 01-1 8.5c-.4.7-1 1.4-1.8 1.9s-1.7 1-2.6 1.3a5.5 5.5 0 012 1.9l6.7 10.4zm18.4 0h-6V12h6v29z"
        />
      </g>
      <rect
        // className={`${loading ? styles.topleft_logo : ''}`}
        width="18.9"
        height="19.9"
        x="6.3"
        fill="#00B87C"
        rx="1.1"
      />
      <rect
        // className={`${loading ? styles.bottomleft_logo : ''}`}
        width="18.9"
        height="19.9"
        y="22.7"
        fill="#FEA162"
        rx="1.1"
      />
      <rect
        // className={`${loading ? styles.topright_logo : ''}`}
        width="18.9"
        height="19.9"
        x="27.9"
        y="9.5"
        fill="#1A61DB"
        rx="1.1"
      />
      <rect
        // className={`${loading ? styles.bottomright_logo : ''}`}
        width="18.9"
        height="19.9"
        x="21.6"
        y="32.1"
        fill="#DC1AA3"
        rx="1.1"
      />
    </svg>
  );
};

export default ZuriLogo;
