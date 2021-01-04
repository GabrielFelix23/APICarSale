const express = require('express')
const router = express.Router()

const TaskController = require('../controller/taskController')
const TaskMiddleware = require('../middleware/taskMiddleware')
const TaskMiddlewareChassis = require('../middleware/taskMiddlewareChassis')

router.post("/", TaskMiddlewareChassis, TaskMiddleware, TaskController.create)
router.put("/:id", TaskMiddlewareChassis, TaskController.update)
router.get("/filter/:id", TaskController.listID)
router.delete("/filter/:id", TaskController.delete)

router.get("/filter/all/:macaddress", TaskController.list)

module.exports = router