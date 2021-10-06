const sequelize = require('sequelize')
const conexao = require('./conexao')

const atributos = {
    nome:{
        type: sequelize.STRING,
        allowNULL: false
    },
    dataCriacao:{
        type: sequelize.DATE,
        defaultValue: Date.now
    },
    ativo:{
        type: sequelize.BOOLEAN,
        allowNULL: false,
        defaultValue: true
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'laboratorios',
    timeStamps: true,
}

module.exports = conexao.define('tabelas',atributos,opcoes)