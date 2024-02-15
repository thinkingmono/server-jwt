
//CustomAPIError class. Extends from Error class to generate custom errors for the app.
class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError
