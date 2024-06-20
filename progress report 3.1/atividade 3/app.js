const express = require('express')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const userRouter = require('./routes/userRoutes')
const cityRouter = require('./routes/cityRoutes')

const app = express()

// 1) GLOBAL MIDDLEWARES

app.use(helmet())

app.use(morgan('dev'))

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
})
app.use('/api', limiter)

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }))

app.use(mongoSanitize())

// Data sanitization against XSS
app.use(xss())

// Serving static files
app.use(express.static(`${__dirname}/public`))

// 2) ROUTES
app.use('/api/v1/users', userRouter)
app.use('/api/v1/cities', cityRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)
module.exports = app
