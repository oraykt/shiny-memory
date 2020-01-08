const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/movies', (req, res) => {})

router.post('/movies', (req, res) => {})

router.get('/comments', (req, res) => {})

router.post('/comments', (req, res) => {})

module.exports = router
