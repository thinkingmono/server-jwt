//Json Web Token dependencie import
const jwt = require('jsonwebtoken')
//Import Bad Request Error handler
const { BadRequestError } = require('../errors')

//Login route controller
const login = async (req, res) => {
    //Destructure username and password from request body.
    const { username, password } = req.body
    //Check if there are an username and password. If not, throw badrequest error. Requesting to fill form with required fields.
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password');
    }

    //Set id as a current date.
    const id = new Date().getDate();

    //Build json object with id, username and jwt secret. Set jwt expire date and finally sign it and store it into token const.
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

    //Return 200 status response with msg and token created.
    res.status(200).json({ msg: 'User created', token })
}

//Dashboard route controller
const dashboard = async (req, res) => {
    //Set luckyNumber with a random number between 0 and 100
    const luckyNumber = Math.floor(Math.random() * 100);
    //Return 200 status response with msg and secret data (only for users with jwt)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, you r lucky number is ${luckyNumber}` })
}

module.exports = { login, dashboard }