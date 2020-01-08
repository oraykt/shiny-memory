const mongoose = require('mongoose')
const { Schema } = mongoose
const commentSchema = new Schema({
  username: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('comment', commentSchema)
