const taskModel = require('../model/taskModel')

const TaskMiddleware = async(req, res, next) => {
    const {
        macaddress, 
        brand, 
        model, 
        year, 
        km, 
        exchange, 
        doors, 
        color, 
        shield, 
        state, 
        city, 
        owner,
        } = req.body
    
        if(!macaddress){
            return res.status(400).json({error: "Maddress é obrigatório!"})
        }
        else if(!brand){
            return res.status(400).json({error: "Marca é obrigatória!"})
        }
        else if(!model){
            return res.status(400).json({error: "Modelo é obrigatório!"})
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
        else if(!owner.name){
            return res.status(400).json({error: "Nome do proprietário é obrigatório!"})
        }
        else if(owner.name.length < 3){
            return res.status(400).json({error: "Nome muito pequeno!"})
        }
        else if(!owner.surname){
            return res.status(400).json({error: "Sobrenome é obrigátorio!"})
        }
        else if(owner.surname.length < 3){
            return res.status(400).json({error: "Sobrenome muito pequeno!"})
        }
        else if(!owner.contact){
            return res.status(400).json({error: "Contato é obrigatório!"})
        }
        else if(owner.contact.length < 15){
            return res.status(400).json(
                {error: "Quantidade de números não é correspondente há um número telefone celular!"}
            )
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