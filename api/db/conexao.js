const sequelize = require ('sequelize')
const config = require ('config')

 const instanciaDB = new sequelize(
    config.get('mysql.db'),
    config.get('mysql.user'),
    config.get('mysql.password'),

    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)

module.exports = instanciaDB




/* TESTAR CONEXÃO AO BANCO
try {
    instanciaDB.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  */