/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../app')

const db = require('../helper/db')
const config = require('../config/key')
chai.use(chaiHttp)

let movieId
let commentId
const Movie = require('../models/Movie')
const Comment = require('../models/Comment')
const mongoose = require('mongoose')

describe('Test Logs', () => {
  before(done => {
    mongoose.connection.on('open', () => {
      console.log('Mongoose Connection on!')
      done()
    })
  })

  it('POST new movie', done => {
    chai.request(server)
      .post('/api/v1/movieService/movies')
      .query({ imdbID: config.testID })
      .end((_err, res) => {
        res.status.should.be.eql(200)
        res.body.should.be.an('object')
        movieId = res.body._id
        res.body.imdbID.should.be.eql(config.testID)
        done()
      })
  })

  it('POST same movie', done => {
    chai.request(server)
      .post('/api/v1/movieService/movies')
      .query({ imdbID: config.testID })
      .end((_err, res) => {
        res.status.should.be.eql(406)
        res.body.should.be.an('object')
        res.body.should.have.property('message')
        done()
      })
  })

  it('GET movies', done => {
    chai.request(server)
      .get('/api/v1/movieService/movies')
      .end((_err, res) => {
        res.status.should.be.eql(200)
        res.body.should.be.an('array')
        done()
      })
  })

  it('POST a comment for a listed movie', done => {
    chai.request(server)
      .post('/api/v1/movieService/comments')
      .query({ imdbID: config.testID, comment: config.testComment })
      .end((_err, res) => {
        res.status.should.be.eql(200)
        res.body.imdbID.should.be.eql(config.testID)
        res.body.Comments.should.be.an('array')
        res.body.Comments.length.should.be.above(0)
        commentId = res.body.Comments.filter(data => {
          if (data.comment === config.testComment) {
            return data
          }
        })[0]._id
        done()
      })
  })

  it('POST a comment for an unlisted movie', done => {
    chai.request(server)
      .post('/api/v1/movieService/comments')
      .query({ imdbID: null, comment: config.testComment })
      .end((_err, res) => {
        res.status.should.be.eql(406)
        res.body.should.have.property('message')
        done()
      })
  })

  it('GET comments for listed movies', done => {
    chai.request(server)
      .get('/api/v1/movieService/comments')
      .end((_err, res) => {
        res.status.should.be.eql(200)
        res.body.should.be.an('array')
        done()
      })
  })

  it('REMOVE test Movie', done => {
    Movie.findByIdAndDelete(movieId).then(() => {
      done()
    })
  })

  it('REMOVE test Comment', done => {
    Comment.findByIdAndDelete(commentId).then(() => {
      done()
    })
  })
  after(done => {
    db.close()
      .then(() => {
        console.log('MongoDB connection closed')
        done()
      })
      .catch((err) => done(err))
  })
})
