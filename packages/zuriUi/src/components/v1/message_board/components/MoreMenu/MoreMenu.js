import styles from "./MoreMenu.module.css";
import { useState } from "react";

export default function MoreMenu({ top, right }) {
  const [showReminders, setShowReminders] = useState(false);

  top -= 40;

  return (
    <div style={{ top: top, right: right }} className={styles.MoreMenuWrapper}>
      {showReminders ? (
        <ul className={styles.RemindOptions}>
          <li>In 20 minutes</li>
          <li>In 1 hour</li>
          <li>In 2 hours</li>
          <li>Tomorrow</li>
          <li>Custom</li>
        </ul>
      ) : null}

      <ul className={styles.MoreMenu}>
        <li>Get notified about new replies</li>
        <li>Mark unread</li>
        <li onClick={() => setShowReminders(!showReminders)}>
          Remind me about this
        </li>
        <li>Copy Link</li>
        <li>Pin to this conversation</li>
      </ul>
    </div>
  );
}
