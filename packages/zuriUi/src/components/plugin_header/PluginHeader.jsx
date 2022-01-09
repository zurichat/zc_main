import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./plugin-header.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import PluginModal from "../PluginModal/PluginModal";

export default function PluginHeader(props) {
  const [showDialog, setShowDialog] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      {showDialog && (
        <PluginModal
          showDialog={showDialog}
          tabIndex={tabIndex}
          close={() => setShowDialog(false)}
          config={props}
          channelName={props.name}
        />
      )}
      <div className={styles.plugin__header}>
        <div
          onClick={() => {
            if (props.roomInfo) {
              setShowDialog(!showDialog);
              setTabIndex(0);
            }
          }}
          className={styles.plugin__header__title}
        >
          {props.icon && (
            <img
              src={props.icon}
              alt=""
              className={styles.plugin__header__icon}
            />
          )}
          <span className={styles.plugin__header__text}>{props.name}</span>
          <span className={styles.plugin__header__arrow}>
            <MdKeyboardArrowDown />
          </span>
        </div>
        {props.hasThumbnail && (
          <div
            className={styles.plugin__header__thumbnail}
            onClick={() => {
              setShowDialog(!showDialog);
              setTabIndex(1);
            }}
          >
            <div className={styles.plugin__thumbnail}>
              {props.thumbnailUrl &&
                props.thumbnailUrl.slice(0, 3).map((image, index) => {
                  return <img key={index} src={image} alt="" />;
                })}
            </div>
            <div className={styles.plugin__header__count}>
              <p>{props.userCount || 0}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

PluginHeader.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  roomInfo: PropTypes.object,
  hasThumbnail: PropTypes.bool,
  thumbnailUrl: PropTypes.array,
  userCount: PropTypes.number
};

PluginHeader.defaultProps = {
  icon: "",
  name: "unknown-channel",
  hasThumbnail: false,
  thumbnailUrl: [],
  userCount: 0
};
