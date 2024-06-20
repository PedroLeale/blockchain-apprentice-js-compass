/* eslint-disable no-unused-vars */
const User = require('../models/userModel')
const catchAsync = require('./../utils/catchAsync')

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find()
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  })
})

exports.changeName = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, { name: req.body.name }, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  })
})

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'No user found with that ID',
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  })
})

exports.findUsersByName = catchAsync(async (req, res, next) => {
  const users = await User.findByName(req.params.name)

  if (!users) {
    return res.status(404).json({
      status: 'error',
      message: 'No user found with that name',
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  })
})

exports.deleteUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id)

  res.status(204).json({
    status: 'success',
    data: null,
  })
})
