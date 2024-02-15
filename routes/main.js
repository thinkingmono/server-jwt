const express = require('express')
//Router creation using express.
const router = express.Router()
//authMiddleware import
const authMiddleware = require('../middleware/auth')
//Import login and dashboard controllers.
const { login, dashboard } = require('../controllers/main')

//Dashboard get route configuration. Pass authMiddleware to run before dashboard controller.
router.route('/dashboard').get(authMiddleware, dashboard);
//Login post route configuration. Pass login controller to execute when user hits '/login'
router.route('/login').post(login)

module.exports = router