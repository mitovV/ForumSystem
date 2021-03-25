const express = require("express")
const routes = require('./routes')
const { PORT } = require('./config/config')


const app = express()

require('./config/mongoose')
require('./config/express')(app)

app.use('/api', routes)

app.listen(PORT, console.log.bind(console, `Server is lisening on port ${PORT}`))