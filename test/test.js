/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../app')

const mongoose = require('mongoose')
const Comment = require('../models/Comment')
const Movie = require('../models/Movie')

chai.use(chaiHttp)

describe('Test Logs', () => {
  before(done => {
    console.log('Wait MongoDB Connection')
    mongoose.connection.on('open', () => {
      done()
    })
  })

  it('POST')
})
