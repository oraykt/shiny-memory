const request = require('request-promise')
const key = require('../config/key')
const omdbUrl = key.omdbUrl + '&apikey=' + key.apikey
const omdbService = {
  getMovie: async params => {
    if (params.imdbID) {
      return request(omdbUrl + '&i=' + params.imdbID)
        .then(async data => {
          return data
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      return request(omdbUrl + '&t=' + params.title)
        .then(async data => {
          return data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

module.exports = omdbService
