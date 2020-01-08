const express = require('express')
const router = express.Router()
const mainService = require('../services/mainService')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/movies', (req, res) => {
  mainService
    .listMovies()
    .then(movies => {
      res.status(200).json(movies)
    })
    .catch(err => {
      res.status(err.status ? err.status : 500).json({ message: err.message })
    })
})

router.post('/movies', (req, res) => {
  mainService
    .postMovie(req.query)
    .then(movie => {
      res.status(200).json(movie)
    })
    .catch(err => {
      res.status(err.status ? err.status : 500).json({ message: err.message })
    })
})

router.get('/comments', (req, res) => {})

router.post('/comments', (req, res) => {})

module.exports = router
