import PropTypes from 'prop-types'

const Input = ({ value, type, name, onChange, className, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['number', 'text', 'password', 'email', 'date']),
  name: PropTypes.string
  // onChange: PropTypes.func
}

export default Input
