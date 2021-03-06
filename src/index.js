const express = require('express')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors())

const Router = require('./router/taskRouter')
server.use('/task', Router)

server.listen(3333, () => {
    console.log("Server Online!")
})
