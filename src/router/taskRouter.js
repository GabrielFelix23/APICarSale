const express = require('express')
const router = express.Router()

const TaskController = require('../controller/taskController')
const TaskMiddleware = require('../middleware/taskMiddleware')
const TaskMiddlewareChassis = require('../middleware/taskMiddlewareChassis')

router.post("/", TaskMiddlewareChassis, TaskMiddleware, TaskController.create)
router.put("/update/:id", TaskMiddleware, TaskController.update)
router.get("/filter/:id", TaskController.listID)
router.delete("/delete/:id", TaskController.delete)

router.get("/filter/all/:macaddress", TaskController.list)

module.exports = router