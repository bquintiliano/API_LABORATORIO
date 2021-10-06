const express = require('express')
const config = require ('config')
const roteador = require ('../api/router/rotas')
const bodyParser = require ('body-parser')


const conexao = express()

conexao.use(bodyParser.json())

conexao.use('/api', roteador)

conexao.listen(config.get('conexao.port'),()=> console.log('servidor esta up'))