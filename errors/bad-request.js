//Import CustomAPIError, parent class from BadRequestError
const CustomAPIError = require('./custom-error');
//Import status codes errors dependencie
const { StatusCodes } = require('http-status-codes');

//Bad request error class. Extends from CustomAPIError class.
class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message)
        //Set bad request status code using StatusCodes.
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError