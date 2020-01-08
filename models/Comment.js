const mongoose = require('mongoose')
const { Schema } = mongoose
const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    movie: {
      type: Schema.Types.ObjectId,
      ref: 'movie',
      required: true
    }
  },
  { versionKey: false }
)

module.exports = mongoose.model('comment', commentSchema)
