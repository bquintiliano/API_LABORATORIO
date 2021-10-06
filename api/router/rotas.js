const router = require('express').Router()
const db = require('../db/comandos')
const modeloDados = require ('../db/modeloDados')


router.get('/laboratorios', async (req, res)=> {
    const result = await db.listar()
    res.send(JSON.stringify(result))
})

router.post('/laboratorios', async (req, res) => {
    const dadosRecebidos = req.body
    const dados = new modeloDados(dadosRecebidos)
    await dados.criar()
    res.send(JSON.stringify(modeloDados))
})

module.exports = router