import styles from '../../styles/rolesCard.module.css'

const rolesCard = ({ role }) => {
  return (
    <div className={styles.roleCard}>
      <div className={styles.roleTitleContainer}>
        <h6>{role.role_title}</h6>
      </div>
      <div className={styles.roleDescriptionContainer}>
        <p>{role.role_details}</p>
      </div>
      <div className={styles.roleCardHorizontalLineContainer}>
        <hr />
      </div>
      <div className={styles.roleTagsContainer}>
        {role.role_tags.map(tag => (
          <p>{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default rolesCard
