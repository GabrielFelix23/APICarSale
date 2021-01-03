const express = require('express')
const server = express()
server.use(express.json())

const Router = require('./router/taskRouter')
server.use('/task', Router)

server.listen(3000, () => {
    console.log("Server Online!")
})
