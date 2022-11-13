import React, { useState } from "react";
import DropDown from "./Drop";
import styles from "../styles/Drop.module.css";
import Room from "./Room";
import RoomItem from "./RoomItem";
import SkeletonLoader from "./SkeletonLoader";

export default function Starred(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);
  // <div
  //     className={`${styles.item__row} ${
  //       props.check && props.check.includes(true) && styles.open
  //     }`}
  //   >

  var roomItems = [];

  for (let items of props.starredRooms) {
    if (items !== undefined) {
      for (let rooms of items) {
        if (rooms !== undefined) {
          roomItems.push(
            <RoomItem room={rooms} key={new Date().toISOString()} />
          );
        }
      }
    }
  }

  return props.starredRooms ? (
    <div
      className={`${styles.item__row} ${roomItems.length > 0 && styles.open}`}
    >
      {props.starredRooms && (
        <DropDown
          categoryName="Starred"
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      )}

      <ul
        className={`col-12 ps-4 ${styles.item__row} ${isOpen && styles.open}`}
      >
        {roomItems}
      </ul>
    </div>
  ) : (
    <SkeletonLoader />
  );
}
