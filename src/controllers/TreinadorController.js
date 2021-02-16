const treinadorModel = require('../models/TreinadorModel');

module.exports = {
    async store(req, res) {
        try {
            const response = await treinadorModel.insert(req.body);
            if(response) return res.status(200).json({msg: "Inserido com sucesso!"})
        } catch (e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },
}