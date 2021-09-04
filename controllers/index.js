const Comic = require('../models/ComicBook')
const Recommendation = require('../models/Recommendations')

const addMyComic = async (req, res) => {
  try {
    const comic = await new Comic(req.body)
    await comic.save()
    return res.status(201).json({ comic })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const myComicBookshelf = async (req, res) => {
  try {
    const myComics = await Comic.find()
    return res.status(201).json({ myComics })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const viewComicById = async (req, res) => {
  try {
    const { id } = req.params
    const comic = await Comic.findById(id)
    if (comic) {
      return res.status(200).json({ comic })
    }
    return res.status(404).send('Comic does not exist')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const removeComicFromShelf = async (req, res) => {
  try {
    const { id } = req.params
    const removed = await Comic.findByIdAndDelete(id)
    if (removed) {
      return res.status(200).send('Comic Removed from your shelf')
    }
    throw new Error('Comic not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addRecommendation = async (req, res) => {
  try {
    const recommendation = await new Recommendation(req.body)
    await recommendation.save()
    return res.status(201).json({ recommendation })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const recommendedcomics = async (req, res) => {
  try {
    const recommendations = await Recommendation.find()
    return res.status(200).json({ recommendations })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const removeRecommendedComic = async (req, res) => {
  try {
    const { id } = req.params
    const removed = await Recommendation.findByIdAndDelete(id)
    if (removed) {
      return res.status(200).send('Removed Comic from Recommendation list')
    }
  } catch (error) {
    return res.status(404).send('that recommendation does not exist')
  }
}

module.exports = {
  addMyComic,
  myComicBookshelf,
  viewComicById,
  removeComicFromShelf,
  addRecommendation,
  recommendedcomics,
  removeRecommendedComic
}
