const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');


//Error Class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

//secret key declaration
const secret_key = 'test-value-jwt-secret-key';
exports.rememberUser = async(req, res, next) => {
    let token = req.cookies.jwt;
    if (!token) {
        return next(new AppError('User is not logged in', 401))
    }

    //verify if token exists in cookies
    const decoded = await promisify(jwt.verify)(req.cookies.jwt, secret_key)


    //embed userId on request
    req.UserId = decoded.id;
    next();
}