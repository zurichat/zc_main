import React from 'react';
import ProfileDropDown from './profileDropDown';
import styles from '../styles/Topbar.module.css';
import NavbarDropdown from 'react-navbar-dropdown';

export const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search here"
        />
        <img src="/settings.svg" alt="settings" />
        <NavbarDropdown>
          <NavbarDropdown.Toggle className="menu__item">
            <NavbarDropdown.Open>
              <div className={styles.profile}>
                <img src="/profilepic.png" alt="Profile" />
              </div>
            </NavbarDropdown.Open>
            <NavbarDropdown.Close>
              <div className={styles.profile}>
                <img src="/profilepic.png" alt="Profile" />
              </div>
            </NavbarDropdown.Close>
          </NavbarDropdown.Toggle>
          <ProfileDropDown />
        </NavbarDropdown>
      </div>
    </div>
  );
};
