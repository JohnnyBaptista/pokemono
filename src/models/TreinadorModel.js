const connection = require('../database/config');
module.exports = {

    insert(data) {
        try {
            if(data) {
                const { name, city, email, password, exp, genre } = data;
                return new Promise((resolve, reject) => {
                    connection.query(
                        'INSERT INTO treinador (nome, cidade, email, senha, exp, genero) VALUES (?, ?, ?, ?, ?, ?)'
                    , [name, city, email, password, exp, genre], (error, result) => {
                        if (error) reject(error)
                        resolve(result);
                    });
                    
                })
            }
        } catch (e) {
            throw e;
        }

    }
}
