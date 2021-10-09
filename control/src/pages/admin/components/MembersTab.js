import React from 'react'
import { Link } from 'react-router-dom'
import { joiningPeriod } from '../data/membersData'
import JoiningMembers from './JoiningMembers'

import styles from '../styles/adminMembersTab.module.css'

const MembersTab = () => {
  return (
    <section className={styles.members_tab_container}>
      <div className={styles.tab_info}>
        <p>
          This page lists each change in your workspace that affects your
          account billing (for example, adding a member, or noting that a member
          has become inactive). It does not show non-billable changes, like
          adding bots. For more information visit our{' '}
          <Link to="/">Guide to billing at Zurichat.</Link>
        </p>
      </div>
      {joiningPeriod.map(membersData => {
        const { id, date, members, url } = membersData
        return <JoiningMembers key={id} date={date} users={members} url={url} />
      })}
    </section>
  )
}

export default MembersTab
