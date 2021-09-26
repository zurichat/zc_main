import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/Drop.module.css'
import { TiArrowSortedDown } from 'react-icons/ti'

const DropDown = ({ index, itemName, itemList }) => {
  const [isOpen, setOpen] = useState(false)
  // const [items, setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = id => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id)
  }
  return (
    <div key={index} className={`row p-0 ${styles.dropDown}`}>
      <div
        className={`col-12 d-flex align-items-center ${styles.plugin__title}`}
        onClick={toggleDropdown}
      >
        <TiArrowSortedDown
          className={`${styles.icon} ${isOpen && styles.open}`}
        />
        <p className={`mb-0 ${styles.dropDown__title}`}> {itemName} </p>
      </div>
      <ul
        className={`col-12 ps-4 ${styles.item__row} ${isOpen && styles.open}`}
      >
        {itemList &&
          itemList.map((room, index) => {
            ;<li key={index} className={`row mx-auto ${styles.item__list}`}>
              <a
                className={`d-flex align-items-center {styles.item_name}`}
                href=""
              >
                <TiArrowSortedDown className={`${styles.item__icon}`} />
                <p className={`mb-0 ${styles.dropDown__name}`}>
                  {room.room_name}
                </p>
              </a>
            </li>
          })}
      </ul>
    </div>
  )
}

export default DropDown
