const tipoItemModel = require('../models/TipoItemModel');

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
            else return res.status(200).json({ msg: `Tipo-Item com o id: ${req.params.id} nao existe na base`, tipoItem: null });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ msg: e });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const item = await tipoItemModel.getById(id);
            if (item.length > 0) {
                const response = await tipoItemModel.delete(id);
                if (response) {
                    return res.status(200).json({ msg: `Item deletado com sucesso!` });
                } else return res.status(400).json({ item: null, msg: 'FATAL ERROR' });
            } else {
                return res.status(400).json({ msg: "Item com esse ID não existe!" });
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({ msg: e });
        }
    },

    async update(req, res) {
        try {
            const item = await tipoItemModel.getById(req.body.id);
            if(item.length > 0){
                const response = await tipoItemModel.update(req.body);
                if(response) return res.status(200).json({msg: `Item atualizado com sucesso!`})
            }else {
                return res.status(400).json({msg: "Tipo de item com esse ID não existe!"});
            }
        }catch (e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    }
}
