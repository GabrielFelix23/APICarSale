const taskModel = require('../model/taskModel')

class TaskController{   
    async create(req, res){
        const task = new taskModel(req.body)
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

    async list(req, res){
        await taskModel.find({
            "macaddress": {"$in": req.params.macaddress}
        })
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    async listID(req, res){
        await taskModel.findById({"_id": req.params.id})
        .then((response) => {
            if(response){
                return res.status(200).json(response)
            }
            else{
                return res.status(500).json({error: "ID não identificado em nosso banco de dados!"})
            }
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    async delete(req, res){
        await taskModel.deleteOne({"_id": req.params.id})
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }
}

module.exports = new TaskController()