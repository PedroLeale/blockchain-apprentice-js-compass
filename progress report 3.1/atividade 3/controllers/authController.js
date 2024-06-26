const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('./../models/userModel')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id)

  const cookieOptions = {
    expires: new Date( // How many days the cookie will expire
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 1000 * 60 * 60 * 24,
    ),
    httpOnly: true,
  }

  res.cookie('jwt', token, cookieOptions)

  user.password = undefined

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}
// eslint-disable-next-line no-unused-vars
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    gender: req.body.gender,
    birthdate: req.body.birthdate,
    hometown: req.body.hometown,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  })
  createSendToken(newUser, 201, res)
})

exports.login = catchAsync(async (req, res, next) => {
  const { name, password } = req.body

  if (!name || !password) {
    return next(new AppError('Please provide name and password!', 400))
  }

  const user = await User.findOne({ name }).select('+password')

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect name or password', 401))
  }

  createSendToken(user, 200, res)
})

exports.protect = catchAsync(async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt
  }

  if (!token) {
    return next(new AppError('You are not logged in! Please log in to get access.', 401))
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

  const currentUser = await User.findById(decoded.id)
  if (!currentUser) {
    return next(new AppError('The user belonging to this token does no longer exist.', 401))
  }

  req.user = currentUser
  next()
})
