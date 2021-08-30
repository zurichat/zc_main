import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import styles from "../styles/Timezone.module.css";

const TimeZone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  return (
    <div className={styles.timezoneContainer}>
      <p className={styles.timezoneText}>Time Zone</p>
      <div className={styles.TimezoneSelect}>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
    </div>
  );
};

export default TimeZone;
