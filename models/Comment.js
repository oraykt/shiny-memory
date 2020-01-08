const mongoose = require('mongoose')
const { Schema } = mongoose
const commentSchema = new Schema(
  {
    Username: {
      type: String,
      required: false
    },
    Comment: {
      type: String,
      required: true
    },
    Movie: {
      type: Schema.Types.ObjectId,
      ref: 'movie'
    }
  },
  { versionKey: false }
)

module.exports = mongoose.model('comment', commentSchema)
