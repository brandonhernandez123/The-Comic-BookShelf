const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comic = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    thumbnail: {
      type: String,
      required: true
    },
    series: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('comics', Comic)
