/* eslint-disable no-unused-vars */
const City = require('../models/cityModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const APIFeatures = require('../utils/apiFeatures')

exports.getAllCities = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(City.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()

  const cities = await features.query

  res.status(200).json({
    status: 'success',
    results: cities.length,
    data: {
      cities,
    },
  })
})

exports.getCityByName = catchAsync(async (req, res, next) => {
  //const cityName = decodeURIComponent(req.params.name)
  const city = await City.findByName(req.params.name)

  if (!city) {
    return next(new AppError('No city found with that name', 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      city,
    },
  })
})

exports.getCityByState = catchAsync(async (req, res, next) => {
  const city = await City.findByState(req.params.state)

  if (!city) {
    return next(new AppError('No cities found', 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      city,
    },
  })
})

exports.createCity = catchAsync(async (req, res, next) => {
  const newCity = await City.create({
    name: req.body.name,
    state: req.body.state,
  })

  res.status(201).json({
    status: 'success',
    data: {
      city: newCity,
    },
  })
})

exports.getCityById = catchAsync(async (req, res, next) => {
  const city = await City.findById(req.params.id)

  if (!city) {
    return next(new AppError('No city found with that ID', 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      city,
    },
  })
})
