/* eslint-disable no-throw-literal */
const Movie = require('../models/Movie')
const Comment = require('../models/Comment')
const omdb = require('./omdb')
const mainService = {
  postMovie: async params => {
    // TODO Title
    const { Title, imdbID } = params
    const movie = await Movie.findOne({ imdbID })
    if (movie) {
      throw { status: 406, message: 'The Movie is exist!' }
    }
    return omdb.getMovie(params).then(async data => {
      const movie = JSON.parse(data)
      if (movie.Response == 'True') {
        return new Movie(movie).save()
      } else {
        console.error('Client tried to post unknown movie!')
        // TODO
        // when the user wants to upload an unknown movie then
        // the server should ask for more information about the movie
        // right over there!
        throw { status: 406, message: `${imdbID} is not found!` }
      }
    })
  },
  listMovies: async () => {
    return Movie.find({}).populate('Comments')
  },
  postComment: async params => {
    const { imdbID, comment } = params
    const movie = await Movie.findOne({ imdbID })
    if (movie) {
      // TODO authentication
      const newComment = await new Comment({
        comment,
        movie: movie._id
      }).save()
      await movie.Comments.push(newComment._id)
      await movie.save()
    } else {
      throw { status: 406, message: `${imdbID} is not found!` }
    }
  },
  listComments: async () => {
    return Comment.find({}).populate('movie')
  }
}
module.exports = mainService
