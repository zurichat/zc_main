import React, { useState } from "react";
import Room from "./Room";
import DropDown from "./Drop";
import styles from "../styles/Drop.module.css";

export default function SubCategory({ state, name, isOpened }) {
  const [isOpen, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div
      className={`col-12 ps-4 ${styles.item__row} ${isOpened && styles.open}`}
    >
      {state && (
        <DropDown
          categoryName={name}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      )}
      {state && <Room id={name} items={state} isOpen={isOpen} />}
    </div>
  );
}
