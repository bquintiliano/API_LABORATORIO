const comandos = require ('./modeloTabela')

module.exports = {
    listar(){
        return comandos.findAll({})
    },

    adicionar(tabelas){
        return comandos.create(tabelas)
    }
}