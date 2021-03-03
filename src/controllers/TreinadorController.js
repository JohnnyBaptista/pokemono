'use strict'
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
    
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const response = await treinadorModel.login(email, senha);
            if (response.length > 0) {
                if(response[0].senha === senha) {
                    return res.status(200).json(response);
                } else {
                    return res.status(400).json({msg: 'Erro ao logar, tente novamente!'});
                }
            } else {
                return res.status(404).json({msg: "EMAIL NÃO ENCONTRADO!"});
            }
        } catch (e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },

    async update(req, res) {
        try {
            const treinador  = await treinadorModel.get(req.body.id);
            if(treinador.length > 0) {
                const response = await treinadorModel.update(req.body);
                if(response) return res.status(200).json({msg: `${req.body.name} atualizado com sucesso!`})
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
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const treinador  = await treinadorModel.get(id);
            if(treinador.length > 0) { 
                const response = await treinadorModel.delete(id);
                if(response) {
                    return res.status(200).json({msg: `Treinador deletado com sucesso!`});
                } else return res.status(400).json({treinador: null, msg: 'FATAL ERROR'});
            } else {
                return res.status(400).json({msg: "Treinador com esse ID não existe!"});
            }
        } catch(e) {
            console.log(e);
            return res.status(500).json({msg: e});
        }
    }
}
