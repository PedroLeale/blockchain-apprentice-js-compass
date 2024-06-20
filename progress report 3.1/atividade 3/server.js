const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...')
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config({ path: './.env' })

const dbConnectionURL = process.env.DATABASE || 'mongodb://localhost:27017/atividade3'

mongoose.connect(dbConnectionURL, {
}).then(() => {
  console.log('DB connection successful!')
}).catch((err) => {
  console.error('DB connection failed:', err.message)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! Shutting down...')
  console.log(err.name, err.message)
  app.close(() => {
    process.exit(1)
  })
})
