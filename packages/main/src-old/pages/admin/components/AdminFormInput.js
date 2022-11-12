import React from "react";
import PropTypes from "prop-types";

const AdminFormInput = ({
  name,
  type,
  placholder,
  bind,
  className,
  label,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placholder}
        className={className}
        {...bind}
      />
    </div>
  );
};

AdminFormInput.defaultProps = {
  type: "text",
  className: ""
};

AdminFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string.isRequired,
  // type: PropTypes.oneOf(['text', 'number', 'password']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default AdminFormInput;
