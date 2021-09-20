import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from '../styles/Dropdown.module.css'
import dropdownIcon from '../verified-components/assets/icons/dropdown-icon.svg'
import addIcon from '../verified-components/assets/icons/add-icon.svg'

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
      <Ul className={styles.content}>
        {children &&
          children.map((child, index) => {
            return (
              <Li key={index} className={styles.item}>
                {plugin ? `${child.title}` : child}
              </Li>
            )
          })}
      </Ul>
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

const Ul = styled.ul`
  padding: 0.3rem 2.5rem;
  font-family: Lato;
  font-style: normal;
  font-size: 15px;
  line-height: 18px;
  color: #454545;
  overflow: hidden;
`
const Li = styled.li`
  height: 28px;
  width: 167px;
  left: 26px;
  top: 0px;
  border-radius: nullpx;
`
