
//Not found error when route doesn't exist
const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound
