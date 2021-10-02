import React from 'react'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Drop.module.css'
import { TiArrowSortedDown } from 'react-icons/ti'
import { navigateToUrl } from 'single-spa'
import hash from '../assets/images/hash.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Options from './RoomOptions'
import RoomOptions from './RoomOptions'

const DropDown = ({ itemName, items }) => {
  const [isOpen, setOpen] = useState(false)
  // const [items,   setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = id => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id)
  }

  const [click, isClicked] = useClick()

  function useClick() {
    const [value, setValue] = useState(false)

    const ref = useRef(null)

    const RightClick = e => {
      e.preventDefault()
      setValue(true)
    }
    const CloseClick = () => setValue(false)

    useEffect(
      () => {
        const node = ref.current
        if (node) {
          node.addEventListener('contextmenu', RightClick)
          document.addEventListener('click', CloseClick)

          return () => {
            node.removeEventListener('contextmenu', RightClick)
            document.removeEventListener('click', CloseClick)
          }
        }
      },
      [ref.current] // Recall only if ref changes
    )

    return [ref, value]
  }

  return (
    <div className={`row p-0 ${styles.dropDown} text-decoration-none`}>
      <div
        className={`col-12 d-flex align-items-center ${styles.plugin__title}`}
        onClick={toggleDropdown}
      >
        <div>
          <TiArrowSortedDown
            className={`${styles.icon} ${isOpen && styles.open}`}
          />
        </div>
        <div
          className={`w-100 d-flex align-items-center justify-content-between`}
        >
          <p className={`mb-0 ${styles.dropDown__title}`}> {itemName} </p>
          {items.button_url ? (
            <a href={items.button_url} onClick={navigateToUrl}>
              <AiOutlinePlusCircle className={`${styles.icon}`} />
            </a>
          ) : null}
        </div>
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
                    ref={click}
                    style={{ textDecoration: 'none' }}
                  >
                    <img
                      ref={click}
                      className={`${styles.item__image}`}
                      src={room.room_image || hash.toString()}
                      onError={e => (e.target.src = hash.toString())}
                      alt="img"
                    />
                    <p className={`mb-0 ${styles.dropDown__name}`}>
                      {room.room_name}
                      <div className={`${styles.optionsContainer}`}>
                        <RoomOptions isClicked={isClicked} />
                      </div>
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
