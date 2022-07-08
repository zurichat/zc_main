import styled from "styled-components";

/**
 * Button Component
 *
 * @param {{
 *      id?: string
 *      className?: string
 *      name?: string
 *      type?: string
 *      disabled?: boolean
 *      children: JSX.Element
 *      onClick
 *
 *      variant?: "primary"|"secondary"|"tertiary"
 * }}
 */
const Button = ({
  variant = "primary",
  id = "",
  name = "",
  className = "",
  type = "",
  disabled = false,
  onClick,
  children,
  ...props
}) => {
  let Component;

  switch (variant) {
    case "primary":
      Component = PrimaryButton;
      break;
    case "secondary":
      Component = SecondaryButton;
      break;
    case "tertiary":
      Component = TertiaryButton;
      break;
    default:
      throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component
      id={`${id}`}
      className={`${className}`}
      name={`${name}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

const ButtonBase = styled.button`
  font-size: ${18 / 16}rem;
  margin: 1rem;
  padding: 12px 18px;

  border: 1px solid var(--primary-color);
  border-radius: 2px;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 400;
  transition: filter 600ms;
  &:disabled {
    opacity: 50%;
  }
  &:hover {
    box-shadow: 5px 4px 20px 0px #c4c4c44d;
    transition: filter 250ms;
    filter: brightness(110%);
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: var(--primary-color);
  color: white;
  ${"" /* &:hover {box-shadow: 5px 4px 20px 0px #C0C4C94D;} */}
`;
const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--primary-color);
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;
const TertiaryButton = styled(ButtonBase)`
  background-color: transparent;
  border: none;
  color: var(--primary-color);
  &.underline {
    text-decoration: underline;
  }
  &:hover {
    box-shadow: none;
  }
`;

export default Button;
