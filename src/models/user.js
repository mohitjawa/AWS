const mongoose = require('mongoose')
const schema = new mongoose.Schema(
  {
    username: { type: String, default: '' },
    password: { type:String, default:''}
  },
  { collection: 'user' }
)
module.exports = mongoose.model('user', schema)