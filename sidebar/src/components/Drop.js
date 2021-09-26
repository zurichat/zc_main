import React from 'react'
import { useState } from 'react'
import styles from '../styles/Drop.module.css'
import { TiArrowSortedDown } from 'react-icons/ti'
import { navigateToUrl } from 'single-spa'

const DropDown = ({ itemName, items }) => {
  const [isOpen, setOpen] = useState(false)
  // const [items, setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = id => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id)
  }
  return (
    <div className={`row p-0 ${styles.dropDown}`}>
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
        {items.joined_rooms &&
          items.joined_rooms.map((room, index) => {
            if (room.room_name !== undefined) {
              return (
                // console.log(itemList)
                <li key={index} className={`row ${styles.item__list}`}>
                  <a
                    className={`col-12 d-flex align-items-center ${styles.item_name}`}
                    href={room.room_url}
                    onClick={navigateToUrl}
                  >
                    <img
                      className={` ${styles.item__image}`}
                      src={room.room_image}
                      alt="img"
                    />
                    <p className={`mb-0 ${styles.dropDown__name}`}>
                      {room.room_name}
                    </p>
                  </a>
                </li>
              )
            }
          })}
      </ul>
    </div>
  )
}

export default DropDown
