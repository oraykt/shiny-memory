/* eslint-disable no-throw-literal */
const Movie = require('../models/Movie')
const Comment = require('../models/Comment')
const omdb = require('./omdb')
const mainService = {
  postMovie: async params => {
    // TODO seperate title and imdbId
    const { title, imdbID } = params
    // const movie = await Movie.findOne({ title, imdbID })
    // TODO movie not exist
    const movie = await Movie.findOne({ Title: title })
    if (movie) {
      throw { status: 204, message: `${title} is exist!` }
    }
    return omdb
      .getMovie(params)
      .then(async movie => {
        return new Movie(JSON.parse(movie)).save()
      })
      .catch(err => {
        throw err
      })
  },
  listMovies: async () => {
    return Movie.find()
  },
  postComment: params => {
    const { title, comment } = params
    Movie.findOne({ title })
  }
}
module.exports = mainService
