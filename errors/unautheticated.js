//Import CustomAPIError, parent class from UnauthenticatedError
const CustomAPIError = require('./custom-error')
//Import status codes errors dependencie
const { StatusCodes } = require('http-status-codes');

//UnauthenticatedError error class. Extends from CustomAPIError class. Handles authorization errors.
class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        //Set unauthorized error status code using StatusCodes.
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError