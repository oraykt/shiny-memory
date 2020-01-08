const mongoose = require('mongoose')
const { Schema } = mongoose
const movieSchema = new Schema(
  {
    Title: {
      required: true,
      type: String
    },
    Year: {
      type: String
    },
    Genre: {
      type: String
    },
    Director: {
      type: String
    },
    Writer: {
      type: String
    },
    Actors: {
      type: String
    },
    Plot: {
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
    Comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comment'
      }
    ]
  },
  { versionKey: false }
)

module.exports = mongoose.model('movie', movieSchema)
