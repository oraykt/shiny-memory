const mongoose = require('mongoose')
const { Schema } = mongoose
const movieSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  year: {
    type: String
  },
  genre: {
    type: String
  },
  director: {
    type: String
  },
  writer: {
    type: String
  },
  actors: {
    type: String
  },
  plot: {
    type: String
  },
  imdbRating: {
    type: String
  },
  imdbVotes: {
    type: String
  },
  imdbID: {
    type: String
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment'
    }
  ]
})

module.exports = mongoose.model('movie', movieSchema)
