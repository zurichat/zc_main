const Joi = require('joi');

// regex for strong passwords
const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

// Login validation schema
const loginValidator = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(passwordRegEx).required()
})

// Registration validation schema
const registrationValidator = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordRegEx).required(),
  repeatPassword: Joi.ref('password')
});

/**
 * This function is used to generate an error
 * @param {string} name 
 * @param {string} message 
 * @returns 
 */
const generateError = (name, message) => {
  const error = new Error();
  error.name = name;
  error.message = message;
  return error;
}

// registration validator
/**
 * 
 * @param {Object} req 
 * @returns 
 */
const validateRegistration = async (req, res, next) => {
  try {
    await registrationValidator.validateAsync(req.body);
  } catch (error) {
    return next(generateError(error.name, error.message));
  }

  next();
};

// login validation
/**
 * 
 * @param {Object} req 
 * @returns 
 */
const validateLogin = async (req, res, next) => {
  try {
    await loginValidator.validateAsync(req.body);
  } catch (error) {
    return next(generateError(error.name, error.message));
  }

  return next();
};

module.exports = { validateLogin, validateRegistration }