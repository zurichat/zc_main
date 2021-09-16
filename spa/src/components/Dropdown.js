import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from '../styles/Dropdown.module.css'
import dropdownIcon from '../pages/test/assets/icons/dropdown-icon.svg'
import addIcon from '../pages/test/assets/icons/add-icon.svg'

import styled from 'styled-components'

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
      <Item>
        <img
          className={`${styles.dropDownButton}${
            children ? '' : ` ${styles.hidden}`
          }`}
          onClick={() => setIsOpen(!isOpen)}
          src={dropdownIcon}
          role="button"
          alt="Dropdown button"
        />
        <p onClick={onTitleClick}>{title}</p>
        <ClickButton
          onClick={onAddButtonClick}
          src={addIcon}
          alt="Add button"
          role="button"
        />
      </Item>
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

const Item = styled.p`
font-family: Lato;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
display: flex;
padding:0.25rem;
& > img { 
  padding: 0 1rem;

`

const ClickButton = styled.img`
  margin-left: auto;
`
