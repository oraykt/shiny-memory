const request = require('request-promise')
const key = require('../config/key')
const omdbUrl = key.omdbUrl + '&apikey=' + key.apikey
const omdbService = {
  getMovie: params => {
    if (params.imdbID) {
      request(omdbUrl + '&i=' + params.imdbID)
        .then(data => {})
        .catch(err => {})
    } else {
      request(omdbUrl + '&t=' + params.title)
        .then(data => {})
        .catch(err => {})
    }
  }
}

module.exports = omdbService
