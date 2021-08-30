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
    thumbnail: {
      type: String,
      required: true
    },
    reason: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
modules.export = mongoose.model('recommend', Recommend)
