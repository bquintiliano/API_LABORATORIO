const modeloTabela = require('./modeloTabela')

modeloTabela.sync().then(()=> console.log('Tabela criada com sucesso')).catch(console.log)