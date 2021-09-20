import React, { useState, useEffect } from 'react'
import TimezoneSelect from 'react-timezone-select'
import spacetime from 'spacetime'
import styles from '../styles/TimeZone.module.css'

const TimeZone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [datetime, setDatetime] = useState(spacetime.now())

  useEffect(() => {
    setDatetime(datetime.goto(selectedTimezone.value))
  }, [selectedTimezone, datetime])

  return (
    <div className={styles.timezoneContainer}>
      <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
    </div>
  )
}

export default TimeZone
