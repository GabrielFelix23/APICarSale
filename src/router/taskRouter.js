const express = require('express')
const router = express.Router()

const TaskController = require('../controller/taskController')
const TaskMiddleware = require('../middleware/taskMiddleware')

router.post("/", TaskMiddleware, TaskController.create)
router.put("/:id", TaskController.update)

module.exports = router