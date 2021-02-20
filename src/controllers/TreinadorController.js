const treinadorModel = require('../models/TreinadorModel');

module.exports = {
    async store(req, res) {
        try {
            const response = await treinadorModel.insert(req.body);
            if(response) return res.status(200).json({msg: `${req.body.name} inserido com sucesso!`})
        } catch (e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },
    
    async index(req, res) {
        try {
            const response = await treinadorModel.getAll();
            if(response) return res.status(200).json({treinadores: response});
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const response = await treinadorModel.get(id);
            if(response.length > 0) return res.status(200).json({treinador: response[0]});
            else return res.status(400).json({treinador: null, msg: 'Não há treinador com esse ID'})
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    }
}