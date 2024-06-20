const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A city must have a name'],
    unique: true,
    trim: true,
  },
  state: {
    type: String,
    required: [true, 'A city must have a state'],
    minLength: [2, 'State must be 2 characters'],
    maxLength: [2, 'State must be 2 characters'],
  },
},
)

citySchema.pre('save', function(next) {
  next()
})

// Static method to find a city by name
citySchema.statics.findByName = function(name, callback) {
  return this.find({ name: name }, callback)
}

// Static method to find a city by state
citySchema.statics.findByState = function(state, callback) {
  return this.find({ state: state }, callback)
}

const City = mongoose.model('City', citySchema)

module.exports = City
