//CustomAPIError class import
const { CustomAPIError } = require('../errors')
//Import status codes errors dependencie
const { StatusCodes } = require('http-status-codes')

//Main error handler
const errorHandlerMiddleware = (err, req, res, next) => {
  //Check if err was send it as an instanceof CustomAPIError class.
  if (err instanceof CustomAPIError) {
    //return error status code and error message send from request.
    return res.status(err.statusCode).json({ msg: err.message })
  }
  //Return 500 internal server error and message.
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
