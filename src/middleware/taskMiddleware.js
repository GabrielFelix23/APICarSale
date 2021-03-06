const taskModel = require('../model/taskModel')

const TaskMiddleware = async(req, res, next) => {
    const {
        macaddress, 
        brand, 
        model, 
        price,
        chassis,
        year, 
        km, 
        exchange, 
        doors, 
        color, 
        shield, 
        state, 
        city
        } = req.body

        if(!brand){
            return res.status(400).json({error: "Marca é obrigatória!"})
        }

        else if(!model){
            return res.status(400).json({error: "Modelo é obrigatório!"})
        }

        else if(!price){
            return res.status(400).json({error: "Preço é obrigatório!"})
        }

        if(!chassis){
            return res.status(400).json({error: "Chassi é obrigatório!"})
        }
        else if(chassis.length < 7 || chassis.length > 7){
            return res.status(400).json({error: "Chassi incorreto!"})
        }

        else if(!year){
            return res.status(400).json({error: "Ano é obrigatório!"})
        }

        else if(!km){
            return res.status(400).json({error: "KM/H é obrigatório!"})
        }

        else if(!exchange){
            return res.status(400).json({error: "Câmbio é obrigatório!"})
        }

        else if(!doors){
            return res.status(400).json({error: "Quantidade de postas são obrigatórias!"})
        }

        else if(!color){
            return res.status(400).json({error: "Cor é obrigatório!"})
        }

        else if(!shield){
            return res.status(400).json({error: "Blindagem é obrigatório!"})
        }

        else if(!state){
            return res.status(400).json({error: "Estado é obrigatório!"})
        }

        else if(!city){
            return res.status(400).json({error: "Cidade é obrigatório!"})
        }
        
        else{
            let exist
            exist = await taskModel.findOne({
                '_id': {"$eq": req.body.id},
                "macaddress": {"$in": macaddress}
            })
            if(exist){
                return res.status(200).json({error: "Já existe um cadastro com esse id!"})
            }
           
            next()
        }
}

module.exports = TaskMiddleware