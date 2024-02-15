//Json Web Token dependencie import
const jwt = require('jsonwebtoken')
//UnauthenticatedError class from errors folder
const { UnauthenticatedError } = require('../errors')

//Authentication middleware to check user jwt in each protected route.
const authMiddleware = async (req, res, next) => {
    //Store authorization header from request into authHeader const
    const authHeader = req.headers.authorization;

    //Check if there is an authentication header or if this starts with the Bearer string. If not, throw unathenticated error.
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided');
    }

    //Split Bearer from tocken in string and store second segment (token) into token const.
    const token = authHeader.split(' ')[1];

    try {
        //Verify token using jwt dependencie, pass token and jwt secret to decode info.
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        //Destructure id and username from decode info.
        const { id, username } = decoded;
        //store into user request propertie an object with id and username.
        req.user = { id, username }
        //Advance with route controller execution.
        next()
    } catch (error) {
        //Throw unauthenticated error if token does not work.
        throw new UnauthenticatedError('No authorized to access this route');
    }
}

module.exports = authMiddleware;