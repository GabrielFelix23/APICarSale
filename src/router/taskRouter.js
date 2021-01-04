const express = require('express')
const router = express.Router()

const TaskController = require('../controller/taskController')
const TaskMiddleware = require('../middleware/taskMiddleware')

router.post("/", TaskMiddleware, TaskController.create)
router.put("/:id", TaskController.update)
router.get("/filter/:id", TaskController.listID)

router.get("/filter/all", TaskController.list)

module.exports = router