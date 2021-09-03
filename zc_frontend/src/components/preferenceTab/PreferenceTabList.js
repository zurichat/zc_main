import React from 'react'
import { PreferenceListData } from './PreferenceListData'
import { Link } from 'react-router-dom'
import styles from '../../styles/PreferenceTabList.module.css'
import { IconContext } from 'react-icons'

const PreferenceTabList = () => {
  return (
    <>
      <IconContext.Provider value={{ size: '1.3rem'}}>
        <div className={styles.container}>
          <ul className={styles.ul}>
            {PreferenceListData.map((item, index) => {
              return (
                <li key={index} className={styles.list}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default PreferenceTabList
