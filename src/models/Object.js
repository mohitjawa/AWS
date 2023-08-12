const mongoose = require('mongoose')
const schema = new mongoose.Schema(
  {
    userId:{ type: String, default: '',ref:'user' },
    bucketName: { type: String, default: '' },
    objects:[{objectKey: { type:String, default:''},originalName: { type: String, default: '' }}]
  },
  { collection: 'Object' }
)
module.exports = mongoose.model('Object', schema)