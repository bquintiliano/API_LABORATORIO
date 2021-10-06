const comandos = require('./comandos')

class Laboratorio {
    constructor({nome}){
        //this.id = id
        this.nome = nome
    }

    async criar(){
        const dadoRecebido = await comandos.adicionar({
            //id: this.id,
            nome: this.nome
        })
    }
}

module.exports = Laboratorio