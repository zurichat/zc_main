import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from '../styles/Dropdown.module.css'
import addicon from '../assets/addicon.svg'
const Dropdown = ({
  children,
  title,
  opened,
  showAddButton,
  onTitleClick,
  onAddButtonClick,
  plugin
}) => {
  const [isOpen, setIsOpen] = useState(opened)

  return (
    <div
      className={`${styles.container}${!isOpen ? ` ${styles.isClosed}` : ''}`}
    >
      <div className={styles.header}>
        <button
          className={`${styles.dropDownButton}${
            children ? '' : ` ${styles.hidden}`
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/shapekeyboardarrowdown2.svg" alt="Dropdown button" />
        </button>
        <span onClick={onTitleClick}>{title}</span>
        <img
          className={`${styles.addButton}${
            showAddButton ? '' : ` ${styles.hidden}`
          }`}
          onClick={onAddButtonClick}
          src={addicon}
          alt="Add button"
          role="button"
        />
      </div>
      <ul className={styles.content}>
        {children &&
          children.map((child, index) => {
            return (
              <li key={index} className={styles.item}>
                {plugin ? `${child.title}` : child}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

Dropdown.defaultProps = {
  opened: true
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onTitleClick: PropTypes.func,
  showAddButton: PropTypes.bool,
  plugin: PropTypes.bool
}

export default Dropdown
