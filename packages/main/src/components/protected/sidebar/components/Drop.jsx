import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/Drop.module.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { navigateToUrl } from "single-spa";
import DropRoom from "./DropRoom";

const DropDown = ({ categoryName, isOpen, toggleDropdown, button_url }) => {
  const m_2px = { margin: "-1px" };
  const m_5px = { margin: "-5px" };
  const [addToRoom, setAddToRoom] = useState(false);
  const [roomId, setRoomId] = useState(false);
  const [options, setOptions] = useState(false);
  const [newRoom, setNewRoom] = useState(false);
  const popup = () => setOptions(!options);
  const room = () => setNewRoom(!newRoom);
  const { t } = useTranslation();

  return (
    <div
      className={`row ${styles.dropDown} align-items-center text-decoration-none `}
    >
      {newRoom ? <DropRoom trigger={newRoom} setTrigger={setNewRoom} /> : ""}

      <div
        className={`col-12 w-100 d-flex align-items-center justify-content-between ${styles.plugin__title}`}
      >
        <div
          className={` d-flex align-items-center justify-content-between`}
          onClick={toggleDropdown}
        >
          <TiArrowSortedDown
            className={`d-flex align-items-center ${styles.icon} ${
              isOpen && styles.open
            }`}
          />
          <p className={`mb-0 ${styles.dropDown__title}`}> {categoryName}</p>
        </div>
        <div onClick={popup}>
          <AiOutlinePlus className={`${styles.icon2}`} />
          {options ? (
            <>
              <div className={`${styles.dropdown__menu}`}>
                <a href={button_url} onClick={navigateToUrl}>
                  <p>Browse Channels</p>
                </a>
                <p onClick={room}>Create a Channel</p>
              </div>
            </>
          ) : (
            ""
          )}
          {/* <img src={infoIcon} alt="icon" role="button" /> */}
          {/* {button_url ? (
            <a href={button_url} onClick={navigateToUrl}>
              <AiOutlinePlus className={`${styles.icon}`} />
            </a>
          ) : (
            ""
          )} */}
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
