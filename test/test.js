/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../app')
const mongoose = require('mongoose')

chai.use(chaiHttp)

describe('Test Logs', () => {
  before(done => {
    console.log('Wait MongoDB Connection')
    mongoose.connection.on('open', () => {
      done()
    })
  })
})
