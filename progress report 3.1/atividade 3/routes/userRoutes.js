const express = require('express')
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')

const router = express.Router()

router.post('/signup', authController.signup)

router.post('/login', authController.login)

router.patch('/changeName', authController.protect, userController.changeName)

router.get('/name/:name', authController.protect, userController.findUsersByName)

router.route('/').get(authController.protect, userController.getAllUsers)

router.route('/:id').get(authController.protect, userController.getUser)
  .delete(authController.protect, userController.deleteUser)

module.exports = router
