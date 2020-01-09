const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect(require('../config/key').mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.set('useCreateIndex', true)
  mongoose.set('useFindAndModify', false)

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected!')
  })
  mongoose.connection.on('error', error => {
    console.log('MongoDB: Connection Failed! \n', error)
  })

  mongoose.Promise = global.Promise
}

// const mongoose = require('mongoose')

// const mongoURI = require('../config/key').mongoURI

// module.exports = {
//   open: () => {
//     return new Promise((resolve, reject) => {
//       mongoose.connect(mongoURI,
//         {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           useCreateIndex: true,
//           useFindAndModify: false
//         })
//         .then((res, err) => {
//           if (err) return reject(err)
//           console.log('MongoDB is connected!')
//           resolve()
//         })
//     })
//   },
//   close: () => {
//     return mongoose.disconnect()
//   }
// }
