import React, { useState } from 'react';
import NavbarDropdown from 'react-navbar-dropdown';
import ReactModal from 'react-modal';
import EditProfile from './editProfile';
import styles from '../styles/Topbar.module.css';

// ReactModal.setAppElement('body');

export default function ProfileDropDown() {
  const [Open, setOpen] = useState(false);

  function openEdit() {
    setOpen(true),
      () => {
        document.addEventListener('click', closeEdit);
      };
  }
  function closeEdit() {
    setOpen(false),
      () => {
        document.removeEventListener('click', this.closeEdit);
      };
  }
  return (
    <>
      <NavbarDropdown.CSSTransitionMenu
        className={styles.dropdown}
        classNames={styles.dropdown}
        timeout={200}
      >
        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_profile}>
            <img src="/profilepic.png" alt="Profile" />
          </div>
          <div className={styles.dropdown_item__text}>
            <label htmlFor="username">
              Mark <br />
              <li>Active</li>
            </label>
          </div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_item__text}>
            <input
              type="text"
              name="status"
              className={styles.dropdown_input}
            />
          </div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_item__text}>Clear Status</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_item__text}>
            Set Status as <b>away</b>
          </div>
        </NavbarDropdown.Item>

        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_item__text} onClick={openEdit}>
            Edit Profile
          </div>
          <ReactModal>{/* <EditProfile /> */}</ReactModal>
        </NavbarDropdown.Item>

        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_item__text}>View Profile</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_item__text}>Preference</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className={styles.dropdown_item}>
          <div className={styles.dropdown_item__text}>
            Sign out of Workspace
          </div>
        </NavbarDropdown.Item>
      </NavbarDropdown.CSSTransitionMenu>
    </>
  );
}
