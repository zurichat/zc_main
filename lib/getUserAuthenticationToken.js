const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

//secret key and expiryTime declaration
const secret_key = 'test-value-jwt-secret-key';
const expiryTime = '1d';

//This generates jwt token  based on user Id
const generateToken = (id) => {
    return jwt.sign({ id }, secret_key, {
        expiresIn: expiryTime
    })
}

//this receives user Object and generates token user Id
exports.sendBackToken = (user, res) => {
    const token = generateToken(user.Id);

    const cookieOptions = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure = true
    }

    //send cookie to browser
    res.cookie('jwt', token, cookieOptions);

    let result = {
        status: "success",
        token,
        data: {
            user
        }
    }

    res.status(200).json(result);
}