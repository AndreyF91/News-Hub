const { Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'news_db'
})

pool.on('error', (err, client) => {
    console.error('Error:', err);
});


// (async () => {
//     await pool.connect();
//     const test = await pool.query(
//         'SELECT * FROM news'
//     )
//     await pool.end
// })()

module.exports = pool