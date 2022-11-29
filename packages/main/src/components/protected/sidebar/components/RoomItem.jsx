import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Drop.module.css";
import hash from "../assets/icons/hash.svg";
import hashWhite from "../assets/icons/hash2.svg";
import { navigateToUrl } from "single-spa";
import Badge from "./Badge";
import RoomOptions from "./RoomOptions";
import { useRouteMatch } from "react-router-dom";

import { useTranslation } from "react-i18next";

const RoomItem = ({ room, baseUrl, pluginId }) => {
  const currentWorkspaceShort = localStorage.getItem("currentWorkspaceShort");

  const { t } = useTranslation();
  const [click, isClicked] = useClick();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pluginIdPath = `plugin-${pluginId.replace(".zuri.chat", "")}`;
  const pluginRoomId = room.room_id || "";
  const pluginRoomId_short = room.room_short || "";
  const match = useRouteMatch(
    `/workspace/${currentWorkspaceShort}/${pluginIdPath}/${pluginRoomId_short}`
  );

  function useClick() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);

    const RightClick = e => {
      e.preventDefault();
      const clickX = e.clientX;
      const clickY = e.clientY;
      setPosition({ x: clickX, y: clickY });
      setValue(true);
    };
    const CloseClick = () => setValue(false);

    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener("contextmenu", RightClick);
          document.addEventListener("click", CloseClick);

          return () => {
            node.removeEventListener("contextmenu", RightClick);
            document.removeEventListener("click", CloseClick);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );

    return [ref, value];
  }

  return (
    <li
      ref={click}
      className={`row py-1 px-2 ${
        match?.isExact ? styles.item__list__active : styles.item__list
      }`}
      onClick={() => {
        sessionStorage.setItem("currentPlugin", pluginIdPath);
        sessionStorage.setItem("currentRoom", pluginRoomId);
      }}
    >
      <a
        href={`/workspace/${currentWorkspaceShort}/${pluginIdPath}/${pluginRoomId_short}`}
        className={`row ${styles.item_name}`}
        style={{ textDecoration: "none" }}
        onClick={navigateToUrl}
      >
        <div className={`col-10 d-flex align-items-center`}>
          {(room.room_image && (
            <img
              // ref={click}
              className={`${styles.item__image}`}
              src={room.room_image}
              onError={e => (e.target.src = hash.toString())}
              alt="img"
            />
          )) || (
            <>
              <img
                src={hash}
                alt=""
                srcSet=""
                className={` ${styles.item__imageBlack}`}
              />
              <img
                src={hashWhite}
                alt=""
                srcSet=""
                className={`${styles.item__imageWhite}`}
              />
            </>
          )}

          <div
            className={`mb-0 d-inline-flex align-items-center ${styles.dropDown__name}`}
          >
            {room.room_name === "general"
              ? t(`workspace_chat.${room.room_name}`)
              : room.room_name}
            {/* {room.room_name} */}
            {/* Add to Room Button */}
            {/* <AiOutlinePlusCircle
                  className={`${styles.icon}`}
                  onClick={() => {
                    setAddToRoom(!addToRoom)
                    setRoomId(room._id)
                  }}
                /> */}
          </div>
        </div>
        <div className={`col-2 d-flex align-items-center`}>
          {/* {room && room.unread &&
         ( room.unread > 9 ? <Badge number="9+" /> : 
         <Badge number={room.unread} />
          
          )} */}
          <Badge number={room.unread} />
        </div>
      </a>
      <div className={`${styles.optionsContainer}`}>
        <RoomOptions
          room={room}
          baseUrl={baseUrl}
          isClicked={isClicked}
          position={position}
        />
      </div>
    </li>
  );
};

export default RoomItem;
