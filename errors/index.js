//Import and export custom errors. Centralize errors import route in other files.
const CustomAPIError = require('./custom-error');
const UnauthenticatedError = require('./unautheticated');
const BadRequestError = require('./bad-request');

module.exports = { CustomAPIError, UnauthenticatedError, BadRequestError };
