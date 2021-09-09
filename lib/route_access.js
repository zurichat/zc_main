class AppError extends Error {
  constructor(message, statusCode) {
    super(message)

    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

//This can be attached to any route
exports.restrictToMain = (...roles) => {
  return (req, res, next) => {
    //roles ['admin', 'lead-guide'], role ='user'
    // console.log(req.User.role);
    if (!roles.includes(req.User.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      )
    }

    next()
  }
}
