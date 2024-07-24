const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');


const JWT_SECRET = process.env.JWT_SECRET;


const authenticateJWT = expressJwt({
    secret: JWT_SECRET,
    algorithms: ['HS256']
});

module.exports = {
    authenticateJWT
};