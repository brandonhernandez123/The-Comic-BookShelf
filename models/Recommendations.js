const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recommend = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model('recommendations', Recommend)
