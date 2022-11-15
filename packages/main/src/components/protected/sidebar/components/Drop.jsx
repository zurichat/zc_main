import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/Drop.module.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { navigateToUrl } from "single-spa";

const DropDown = ({ categoryName, isOpen, toggleDropdown, button_url }) => {
  const [addToRoom, setAddToRoom] = useState(false);
  const [roomId, setRoomId] = useState(false);
  const { t } = useTranslation();
  // const [isOpen, setOpen] = useState(false)
  // const [items,   setItems] = useState(data);
  // const [selectedItem, setSelectedItem] = useState(null)

  // const handleItemClick = id => {
  //   selectedItem == id ? setSelectedItem(null) : setSelectedItem(id)
  // }

  return (
    <div className={`row p-0 ${styles.dropDown} text-decoration-none `}>
      <div
        className={`col-12 d-flex align-items-center ${styles.plugin__title}`}
        onClick={toggleDropdown}
      >
        <div className={`d-flex align-items-center`}>
          <TiArrowSortedDown
            className={`${styles.icon} ${isOpen && styles.open}`}
          />
        </div>
        <div
          className={`w-100 d-flex align-items-center justify-content-between`}
        >
          <p className={`mb-0 ${styles.dropDown__title}`}>
            {t(`workspace_chat.${categoryName}`)}
          </p>
          {/* <img src={infoIcon} alt="icon" role="button" /> */}
          {button_url ? (
            <a href={button_url} onClick={navigateToUrl}>
              <AiOutlinePlus className={`${styles.icon}`} />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Add to Room */}
      {/* {addToRoom && (
        <PluginRoomAddUser
          isOpen={addToRoom}
          isClosed={setAddToRoom}
          room_id={roomId}
        />
      )} */}
    </div>
  );
};

export default DropDown;
