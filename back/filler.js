const db = require('./db')
const format = require('pg-format')

const news = require('./news.json')
const urls = require('./urls.json')

const insertNews = async () => {
    await db.connect()
    try {
        await db.query('BEGIN')
        await db.query(
                    format('INSERT INTO news (news_id, news_title, news_text, news_author, news_category, publishing_date) VALUES %L', news))
        await db.query(
            format('INSERT INTO news_urls (news_url, image_url, news_id) VALUES %L', urls)
        )
        await db.query('COMMIT')
    } catch(err) {
        await db.query('ROLLBACK')
        throw err
    } finally {
        db.end()
        console.log('done');
    }  
}

insertNews()


    
    


