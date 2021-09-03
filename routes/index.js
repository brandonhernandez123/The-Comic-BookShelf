const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
const cors = require('cors')

router.use(cors())

router.get('/', (req, res) => res.send('Root works'))
router.post('/mycomicbookshelf', controllers.addMyComic)
router.post('/comicrecommendations', controllers.addRecommendation)
router.get('/mycomicbookshelf', controllers.myComicBookshelf)
router.get('/viewcomic/:id', controllers.viewComicById)
router.delete('/mycomicbookshelf/:id', controllers.removeComicFromShelf)
router.get('/comicrecommendations', controllers.recommendedcomics)
router.delete('/comicrecommendations/:id', controllers.removeRecommendedComic)

module.exports = router
