const express = require('express')
const cors = require('cors')
const newsRouter = require('./routes/news.routes')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', newsRouter)

app.listen(PORT, () => console.log(`Server is up. Port ${PORT}`))