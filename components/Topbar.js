import React from 'react';

import styles from '../styles/Topbar.module.css';

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
        <div className={styles.profile}>
          <img src="/profilepic.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};
