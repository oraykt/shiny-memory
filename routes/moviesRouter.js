const express = require('express')
const router = express.Router()
const mainService = require('../services/mainService')

router.get('/', (req, res) => {
  mainService
    .listMovies()
    .then(movies => {
      res.status(200).json(movies)
    })
    .catch(err => {
      res.status(err.status ? err.status : 500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
  mainService
    .postMovie(req.query)
    .then(movie => {
      res.status(200).json(movie)
    })
    .catch(err => {
      res.status(err.status ? err.status : 500).json({ message: err.message })
    })
})

module.exports = router
