const tipoItemModel = require('../models/TipoItemModel');
const { get } = require('../routes');

module.exports = {
    async store(req, res) {
        try {
            const response = await tipoItemModel.insert(req.body.tipo);
            if (response) return res.status(200).json({ msg: "Inserido com sucesso!" })
        } catch (e) {
            console.log(e);
            return res.status(400).json({ msg: e });
        }
    },

    async index(req, res) {
        try {
            const response = await tipoItemModel.getAll();
            if (response) return res.status(200).json({ tipoItem: response })
        } catch (e) {
            console.log(e);
            return res.status(400).json({ msg: e });
        }
    },

    async getById(req, res) {
        try {
            const response = await tipoItemModel.getById(req.params.id);
            if (response.length > 0) 
                return res.status(200).json({ tipoItem: response[0] })
            else return res.status(200).json({msg: `Tipo-Item com o id: ${req.params.id} nao existe na base`, tipoItem: null});
        } catch (e) {
            console.log(e);
            return res.status(400).json({ msg: e });
        }
    }
}