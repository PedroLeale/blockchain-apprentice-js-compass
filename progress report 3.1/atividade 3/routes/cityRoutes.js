const express = require('express')
const cityController = require('./../controllers/cityController')
const authController = require('./../controllers/authController')

const router = express.Router()

router.route('/state/:state').get(authController.protect, cityController.getCityByState)
router.route('/name/:name').get(authController.protect, cityController.getCityByName)

router.route('/').get(authController.protect, cityController.getAllCities).post(authController.protect, cityController.createCity)
router.route('/:id').get(authController.protect, cityController.getCityById)


module.exports = router
