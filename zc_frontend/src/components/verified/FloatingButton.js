import styled from 'styled-components'

/**
 * Floating Button Component
 *
 * @param {{
 *      id?: string
 *      className?: string
 *      name?: string
 *      type?: string
 *      disabled?: boolean
 *      onClick
 * }}
 */
const FloatingButton = ({
  id = '',
  name = '',
  className = '',
  type = '',
  disabled = false,
  onClick
}) => {
  let Component = ButtonBase

  return (
    <Component
      id={`${id && id}`}
      className={`${className && className}`}
      name={`${name && name}`}
      disabled={disabled}
      onClick={onClick}
    >
      +
    </Component>
  )
}

const ButtonBase = styled.button`
  font-size: 2rem;
  margin: 1rem;
  padding-inline: 1rem;
  text-align: center;

  border: 1px solid var(--primary-color);
  border-radius: 50%;

  background-color: var(--primary-color);
  color: white;

  transition: ease-in-out 150ms;
  &:disabled {
    opacity: 50%;
  }
  &:enabled:active {
    color: var(--primary-color);
    background-color: var(--white);
  }
`

export default FloatingButton
