const mongoose = require('mongoose')
const { Schema } = mongoose
const commentSchema = new Schema({})

module.exports = mongoose.model('comment', commentSchema)
