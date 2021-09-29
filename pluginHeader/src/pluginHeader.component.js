import React from 'react'
import styles from './styles/header.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Header(props) {
  return (
    <div>
      {props.headerConfig && (
        <div className={styles.plugin__header}>
          <div
            onClick={props.headerConfig.eventTitle}
            className={styles.plugin__header__title}
          >
            <img
              src={props.headerConfig.icon || ''}
              alt=""
              className={styles.plugin__header__icon}
            />
            <span className={styles.plugin__header__text}>
              {props.headerConfig.name || 'home'}
            </span>
            <span className={styles.plugin__header__arrow}>
              <MdKeyboardArrowDown />
            </span>
          </div>
          {props.headerConfig.hasThumbnail && (
            <div
              className={styles.plugin__header__thumbnail}
              onClick={props.headerConfig.eventThumbnail}
            >
              <div className={styles.plugin__thumbnail}>
                {props.headerConfig.thumbnailUrl &&
                  props.headerConfig.thumbnailUrl
                    .slice(0, 3)
                    .map((image, index) => {
                      return <img key={index} src={image} alt="" />
                    })}
              </div>
              <div className={styles.plugin__header__count}>
                <p>{props.headerConfig.userCount || 0}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
