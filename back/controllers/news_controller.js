const db = require('../db')

class NewsController{
    async createNews(req, res){
        const {title} = req.body
        res.json('ok')
    }
    async getNewsAll(req, res){
        const news = await db.query('SELECT news_id, news_title, news_text, news_author, news_category, publishing_date FROM news a UNION SELECT news_id, news_url, image_url FROM news_urls b WHERE a.news_id = b.news_id')
        res.json(news.rows)
    }
    async getNewsByAuthor(req, res){
        let params = req.params.author
        const news = await db.query(`SELECT * FROM news WHERE news_author =$1`, [params])
        res.send(news.rows)
    }
    async getNewsByDate(req, res){
        let params = req.params.date
        const news = await db.query(`SELECT * FROM news WHERE publishing_date =$1`, [params])
        res.send(news.rows)
    }
    async updateNews(req, res){
        console.log();
    }
    async deleteNews(req, res){
        
    }
}

module.exports = new NewsController()