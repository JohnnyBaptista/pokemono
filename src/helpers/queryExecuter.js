function queryExecuter(connection, sql, values) {
    return new Promise((resolve, reject) => {
        connection.query( sql, values,
          (error, result) => {
            if (error) reject(error);
            resolve(result);
          }
        );
      });
}

module.exports = queryExecuter;