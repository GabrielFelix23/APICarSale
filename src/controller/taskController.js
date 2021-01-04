const taskModel = require('../model/taskModel')

class TaskController{   
    async create(req, res){
        const task = new TaskModel(req.body)
        await task
            .save()
            .then((response) => {
                return res.status(200).json(response)
            })
            .catch((error) => {
                return res.status(500).json(error)
            })
    }
    async update(req, res){
        await taskModel.findByIdAndUpdate(
           {"_id": req.params.id}, req.body, {new: true}
        )
       .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }
}

module.exports = new TaskController()