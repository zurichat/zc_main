const rateLimit = require("express-rate-limit");

module.exports.limit_login_attempt = rateLimit({
    //This module serves as a middleware to limit login attempts by users to help forestall bruteforcing
    // Limit is five trials per minuite

    windowMs: 1 * 60 * 1000, // 1 minute(s)
    max: 5
});