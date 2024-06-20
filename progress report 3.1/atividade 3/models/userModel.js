const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
    unique: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary', 'prefer not to say', 'other'],
    required: [true, 'Please provide your gender'],
  },
  birthdate: {
    type: Date,
    required: [true, 'Please tell us your birthdate!'],
  },
  hometown: {
    type: String,
    required: [true, 'Please tell us your hometown!'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      validator: function (el) {
        return el === this.password
      },
      message: 'Passwords are not the same!',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)
  this.passwordConfirm = undefined
  next()
})

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next()

  this.passwordChangedAt = Date.now() - 1000
  next()
})

userSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } })
  next()
})

userSchema.statics.findByName = function(name, callback) {
  return this.find({ name: name }, callback)
}

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema)

module.exports = User
