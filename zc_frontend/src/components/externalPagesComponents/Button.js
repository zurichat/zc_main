import styles from "../../styles/Button.module.css";

/**
 *
 * @param {Object} prop - button props consisting of ;
 * 1) variant - indicating what styles to add to the default style. By default it will add the 'primary' styles. If the value is 'accent', it will not add any additional styles and you can style yourself using className or styles prop.
 * 2) all the regular button attributes.
 * @returns
 */

const Button = ({ variant = "primary", className = "", ...rest }) => {
  return (
    <button
      className={`${styles.general_button} ${className} ${
        variant === "secondary"
          ? styles.general_button__secondary
          : variant === "accent"
          ? ""
          : styles.general_button__primary
      }`}
      {...rest}
    >
      {rest.children}
    </button>
  );
};

export default Button;
