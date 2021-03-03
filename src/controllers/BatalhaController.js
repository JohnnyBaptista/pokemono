const batalhaModel = require('../models/BatalhaModel');

module.exports = {
    async store(req, res) {
        try {
            const teste = [req.body.id_desafiado, req.body.id_desafiante];
            const vencedor = teste[Math.floor(Math.random() * teste.length)];
            const response = await batalhaModel.insert(req.body.id_desafiado, req.body.id_desafiante, vencedor);
            if (response) return res.status(200).json({ msg: "Inserido com sucesso!" })
        } catch(e) {
            console.log(e);
            return res.status(400).json({ msg: e});
        }
    },

    async index(req, res) {
        try {
            const response = await batalhaModel.getAll();
            if(response) return res.status(200).json({ batalha: response})
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },

    async getById(req, res) {
        try {
            const response = await batalhaModel.getById(req.params.id);
            if (response.length > 0) return res.status(200).json({ batalha: response[0]})
            else return res.status(200).json({msg: `Batalha com o id: ${req.params.id} nao existe na base`, batalha: null});
        } catch(e) {
            console.log(e);
            return res.status(400).json({ msg: e});
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const batalha = await batalhaModel.getById(id);
            if (batalha.length > 0) {
                const response = await batalhaModel.delete(id);
                if (response) {
                    return res.status(200).json({ msg: `Batalha deletada com sucesso!` });
                } else return res.status(400).json({ batalha: null, msg: 'FATAL ERROR' });
            } else {
                return res.status(400).json({ msg: "Batalha com esse ID nao existe!" });
            }
        } catch(e) {
            console.log(e);
            return res.status(500).json({ msg: e});
        }
    },
}