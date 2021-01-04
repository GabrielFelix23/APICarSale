const taskModel = require("../model/taskModel")

const taskMiddlewareChassis = async(req, res, next) => {
    const {chassis} = req.body

    if(!chassis){
        return res.status(400).json({error: "chassis é obrigatório!"})
    }
    else if(chassis.length < 7){
        return res.status(400).json({error: "Chassi incorreto!"})
    }
    else{
        let existChassis
        existChassis = await taskModel.findOne({
            "chassis": {"$eq": chassis},
        })
        if(existChassis){
            return res.status(200).json({error: "Já existe um cadastro com esse Chassi!"})
        }
        next()
    }
}

module.exports = taskMiddlewareChassis