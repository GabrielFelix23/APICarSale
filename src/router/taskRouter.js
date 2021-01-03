const express = require('express')
const router = express.Router()

const TaskController = require('../controller/taskController')

router.post("/", TaskController.create)

module.exports = router