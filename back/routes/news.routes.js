const Router = require('express')
const router = new Router
const newsController = require('../controllers/news_controller')

router.post('/newscr', newsController.createNews)
router.get('/news', newsController.getNewsAll)
router.get('/news/author/:author', newsController.getNewsByAuthor)
router.get('/news/date/:date', newsController.getNewsByDate)
router.delete('/news/:id', newsController.deleteNews)

module.exports = router