const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const moviesRouter = require('./routes/moviesRouter')
const commentsRouter = require('./routes/commentsRouter')

// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express()

// db connection
require('./helper/db.js')()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  return next()
})

const basePath = '/api/v1/movieService'
app.use(basePath + '/movies', moviesRouter)
app.use(basePath + '/comments', commentsRouter)

/* GET home page. */
app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Hi Netguru!',
    content: 'Would you like to take a look my swagger-ui?'
  })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
