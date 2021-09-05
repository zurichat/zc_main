import styles from '../../styles/section3.module.css'
import RolesCard from '../RolesCard/rolesCard'
import { Roles } from '../Section3/roles'

const Section3 = () => {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.sectionTopContentContainer}>
        <h3>Join our internship</h3>
        <p>
          Zuri Internship is a 100% free, remote and fast paced for young
          professionals seeking to hon their tech skills and boost their resume.
        </p>
      </div>
      <div className={styles.sectionMiddleContentContainer}>
        {Roles.map(role => (
          <RolesCard key={role.id} role={role} />
        ))}
      </div>
      <div className={styles.sectionBottomContentContainer}>
        <p>Be a part of next cohort starting summer of 2022</p>
        <a
          className="registerBtn"
          href="https://internship.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          Register now
        </a>
      </div>
    </div>
  )
}

export default Section3
