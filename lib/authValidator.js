const Joi = require('joi')
const errorFormatter = require('../lib/errorFormatter')
// regex for strong passwords
const passwordRegEx =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

// Login validation schema
const loginValidator = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().pattern(passwordRegEx).required()
})

// Registration validation schema
const registrationValidator = Joi.object({
  fullName: Joi.string()
    .required()
    .messages({ 'any.required': 'Full name has to be provided' }),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordRegEx).required(),
  repeatPassword: Joi.ref('password')
})

/**
 * This function is used to generate an error
 * @param {string} name
 * @param {string} message
 * @returns
 */
const generateError = (name, message) => {
  const error = new Error()
  error.name = name
  error.message = message
  return error
}

// registration validator
/**
 *
 * @param {Object} req
 * @returns
 */
const validateRegistration = async (req, res, next) => {
  try {
    await registrationValidator.validateAsync(req.body)
  } catch (error) {
    const registrationError = errorFormatter(error)
    return res.status(400).json(registrationError)
  }
  next()
}

// login validation
/**
 *
 * @param {Object} req
 * @returns
 */
const validateLogin = async (req, res, next) => {
  try {
    await loginValidator.validateAsync(req.body)
  } catch (error) {
    const generatedError = generateError(error.name, error.message)
    return res.status(400).json(generatedError)
  }

  return next()
}

module.exports = { validateLogin, validateRegistration }
