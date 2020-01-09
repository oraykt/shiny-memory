const mongoose = require('mongoose')

const mongoURI = require('../config/key').mongoURI

module.exports = {
  open: () => {
    return new Promise((resolve, reject) => {
      if (process.env.NODE_ENV === 'test') {
        const Mockgoose = require('mockgoose').Mockgoose
        const mockgoose = new Mockgoose(mongoose)

        mockgoose.prepareStorage()
          .then(() => {
            mongoose.connect(mongoURI,
              {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
              })
              .then((res, err) => {
                if (err) return reject(err)
                resolve()
              })
          })
      } else {
        mongoose.connect(mongoURI,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
          })
          .then((res, err) => {
            if (err) return reject(err)
            console.log('MongoDB is connected!')
            resolve()
          })
      }
    })
  },
  close: () => {
    return mongoose.disconnect()
  }
}
