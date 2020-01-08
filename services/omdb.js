/* eslint-disable no-throw-literal */
const request = require('request-promise')
const key = require('../config/key')
const omdbUrl = key.omdbUrl + '&apikey=' + key.apikey
const omdbService = {
  getMovie: async ({ imdbID, Title }) => {
    if (imdbID) {
      return request(omdbUrl + '&i=' + imdbID)
        .then(async data => {
          return data
        })
        .catch(err => {
          throw { message: err.message }
        })
    } else {
      // if (Title) {
      //   return request(omdbUrl + '&t=' + Title)
      //     .then(async data => {
      //       return data
      //     })
      //     .catch(err => {
      //       throw { message: err.message }
      //     })
      // } else {
      console.error(
        'mainService tried to send request to OMDB with empty params!'
      )
      throw { status: 500, message: 'Internal Server Error, check Logs!' }
      // }
    }
  }
}

module.exports = omdbService
