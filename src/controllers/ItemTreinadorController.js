const itemTreinadorModel = require('../models/ItemTreinadorModel');

module.exports = {
    async store(req, res) {
        try {
            const response = await itemTreinadorModel.insert(req.body);
            if(response) return res.status(200).json({msg: `${req.body.id} inserido com sucesso!`})
        } catch (e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },

    async update(req, res) {
        try {
            const itemTreinador  = await itemTreinadorModel.get(req.body.id);
            if(itemTreinador.length > 0) {
                const response = await itemTreinadorModel.update(req.body);
                if(response) return res.status(200).json({msg: `${req.body.id} atualizado com sucesso!`})
            } else {
                return res.status(400).json({msg: "Treinador com esse ID não existe!"});
            }
        } catch (e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },
    
    async index(req, res) {
        try {
            const response = await itemTreinadorModel.getAll();
            if(response) return res.status(200).json({treinadores: response});
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const response = await itemTreinadorModel.getById(id);
            if(response.length > 0) return res.status(200).json({itemTreinador: response[1]});
            else return res.status(400).json({itemTreinador: null, msg: 'Não há treinador com esse ID'})
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const itemTreinador  = await itemTreinadorModel.getById(id);
            if(itemTreinador.length > 0) { 
                const response = await itemTreinadorModel.delete(id);
                if(response) {
                    return res.status(200).json({msg: `Treinador deletado com sucesso!`});
                } else return res.status(400).json({itemTreinador: null, msg: 'FATAL ERROR'});
            } else {
                return res.status(400).json({msg: "Treinador com esse ID não existe!"});
            }
        } catch(e) {
            console.log(e);
            return res.status(500).json({msg: e});
        }
    }
}