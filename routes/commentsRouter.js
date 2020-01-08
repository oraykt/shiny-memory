const express = require('express')
const router = express.Router()
const mainService = require('../services/mainService')

router.get('/', (req, res) => {
  mainService
    .listComments()
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(err => {
      res.status(err.status ? err.status : 500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
  mainService
    .postComment(req.query)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(err.status ? err.status : 500).json({ message: err.message })
    })
})

module.exports = router
