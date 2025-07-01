const db = require('../db')

class NewsController{
    async createNews(req, res){
        const {title} = req.body
        res.json('ok')
    }
    async getNewsAll(req, res){
        const news = await db.query('SELECT news.news_title, news.news_text, news.news_author, news.news_category, news.publishing_date, news_urls.news_url, news_urls.image_url FROM news INNER JOIN news_urls ON news.news_id = news_urls.news_id')
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