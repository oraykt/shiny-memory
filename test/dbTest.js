/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai')
const should = chai.should()
const mongoose = require('mongoose')

// Config

const key = require('../config/key')

// Models
const Movie = require('../models/Movie')
const Comment = require('../models/Comment')
// db connection
require('../../helper/db')()

describe('Testing Models', () => {
  before(done => {
    mongoose.connection.on('open', () => {
      done()
    })
  })
})
