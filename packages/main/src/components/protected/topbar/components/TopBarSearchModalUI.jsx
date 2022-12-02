import React from "react";
import styles from "../styles/TopBarSearchModalUI.module.css";

const TopBarSearchModalUI = ({ handleSearchType }) => {
  const setSearchType = (e, type) => {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    } else {
      e.classList.add("active");
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <p>I am looking for...</p>
        <div className={styles.btn_wrapper}>
          <button onClick={e => setSearchType(e, "messages")}>
            <span className="icon">
              <svg data-g7q="true" aria-hidden="true" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.675 6.468a4.75 4.75 0 1 1 8.807 3.441.75.75 0 0 0-.067.489l.379 1.896-1.896-.38a.75.75 0 0 0-.489.068 4.713 4.713 0 0 1-.648.273.75.75 0 1 0 .478 1.422 6.11 6.11 0 0 0 .611-.242l2.753.55a.75.75 0 0 0 .882-.882l-.55-2.753A6.25 6.25 0 1 0 6.23 6.064a.75.75 0 1 0 1.445.404ZM6.5 8.5a5 5 0 0 0-4.57 7.03l-.415 2.073a.75.75 0 0 0 .882.882l2.074-.414A5 5 0 1 0 6.5 8.5Zm-3.5 5a3.5 3.5 0 1 1 1.91 3.119.75.75 0 0 0-.49-.068l-1.214.243.243-1.215a.75.75 0 0 0-.068-.488A3.482 3.482 0 0 1 3 13.5Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span>Messages</span>
          </button>
          <button onClick={e => setSearchType(e, "files")}>
            <span className="icon">
              <svg data-g7q="true" aria-hidden="true" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.86 1.328a2.15 2.15 0 0 1 2.28 0l6.118 3.824a1.59 1.59 0 0 1 0 2.696l-6.118 3.824a2.15 2.15 0 0 1-2.28 0L2.742 7.848a1.59 1.59 0 0 1 0-2.696L8.86 1.328ZM10.345 2.6a.65.65 0 0 0-.69 0L3.537 6.424a.09.09 0 0 0 0 .152L9.655 10.4a.65.65 0 0 0 .69 0l6.118-3.824a.09.09 0 0 0 0-.152L10.344 2.6Zm-8.246 7.462a.75.75 0 0 1 1.033-.239L9.655 13.9a.647.647 0 0 0 .688.001l6.519-4.074a.75.75 0 0 1 .795 1.272l-6.52 4.074a2.147 2.147 0 0 1-2.277 0l-6.523-4.078a.75.75 0 0 1-.238-1.033Zm1.033 3.261a.75.75 0 1 0-.795 1.272l6.523 4.077a2.147 2.147 0 0 0 2.277.001l6.52-4.074a.75.75 0 0 0-.795-1.272l-6.52 4.074a.647.647 0 0 1-.687 0l-6.523-4.078Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span>Files</span>
          </button>
          <button onClick={e => setSearchType(e, "channels")}>
            <span className="icon">
              <svg data-g7q="true" aria-hidden="true" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.74 3.877a.75.75 0 1 0-1.48-.254L7.68 7H3.75a.75.75 0 0 0 0 1.5h3.67L6.472 14H2.75a.75.75 0 0 0 0 1.5h3.463l-.452 2.623a.75.75 0 1 0 1.478.254l.496-2.877h3.228l-.452 2.623a.75.75 0 1 0 1.478.254l.496-2.877h3.765a.75.75 0 0 0 0-1.5h-3.506l.948-5.5h3.558a.75.75 0 0 0 0-1.5h-3.3l.54-3.123a.75.75 0 0 0-1.48-.254L12.43 7H9.2l.538-3.123ZM11.221 14l.948-5.5H8.942L7.994 14h3.228Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span>Channels</span>
          </button>
          <button onClick={e => setSearchType(e, "people")}>
            <span className="icon">
              <svg data-g7q="true" aria-hidden="true" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.48 5.5c0-1.308.923-2.5 2.634-2.5.182 0 .353.012.514.034a.75.75 0 1 0 .204-1.486 5.281 5.281 0 0 0-.718-.048c-2.596 0-4.134 1.922-4.134 4 0 1.102.311 2.157 1.028 3.308-.3.106-.641.245-.997.428-1.094.562-2.396 1.571-2.934 3.313-.21.678-.003 1.32.405 1.765.396.432.982.686 1.598.686h.221a.75.75 0 0 0 0-1.5H3.08a.678.678 0 0 1-.493-.2c-.09-.098-.112-.196-.077-.309.374-1.21 1.29-1.96 2.186-2.42a6.627 6.627 0 0 1 1.54-.558l.092-.019.016-.003a.75.75 0 0 0 .47-1.212C5.799 7.456 5.48 6.463 5.48 5.5Zm3.252 8.621c-.996.431-1.776 1.082-2.185 1.99-.09.199-.056.374.096.545.17.192.477.344.827.344h9.06c.35 0 .657-.152.827-.344.152-.17.185-.346.096-.545-.409-.908-1.189-1.559-2.185-1.99-1-.432-2.176-.621-3.268-.621-1.092 0-2.267.189-3.268.621Zm5.852-1.808C15.425 11.431 16 10.096 16 8.437c0-2.25-1.714-3.937-4-3.937S8 6.188 8 8.438c0 1.658.575 2.993 1.416 3.875-.436.11-.866.253-1.279.431-1.234.534-2.353 1.41-2.958 2.751-.364.81-.147 1.607.342 2.157.47.53 1.194.848 1.949.848h9.06c.755 0 1.478-.318 1.949-.848.489-.55.706-1.348.342-2.157-.604-1.341-1.724-2.217-2.958-2.75a8.458 8.458 0 0 0-1.28-.432ZM14.5 8.437C14.5 10.936 12.957 12 12 12c-.957 0-2.5-1.065-2.5-3.563C9.5 7.038 10.52 6 12 6s2.5 1.038 2.5 2.438Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span>People</span>
          </button>
        </div>
      </div>
      <div className={styles.modal_footer}>
        <p>
          Not the results you expected? Give{" "}
          <a className={styles.modal_footer_link} href="#">
            feedback
          </a>{" "}
          or{" "}
          <a className={styles.modal_footer_link} href="#">
            learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default TopBarSearchModalUI;
