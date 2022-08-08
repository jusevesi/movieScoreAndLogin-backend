const mysql = require('mysql2');

const getConnection = () => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT
    });

    connection.connect((error) => {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta.');
        }
    });
    return connection;
}

const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        try {
            const connection = getConnection();
            connection.query(query, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
            connection.end(() => console.log('conexion cerrada'));
        } catch (error) {
            console.log(error)
            reject(error);
        }
    });

}

module.exports = executeQuery;
