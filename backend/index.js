/* Atividade: Começar uma aplicação nova como essa que acabamos de terminar o backend. Nessa atividade vocês devem criar o backend de uma aplicação. Essa aplicação vai gerenciar as transferências de uma conta bancária. Para isso, vocês devem criar um novo database com uma tabelas com os seguintes campos: id_tranferencia, nomeCliente, valor, contaCliente. Na construção desse backend vocês desenvolver todo o crud para esse data base.  */

require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000

/* Utilizar arquivo no formato json */
app.use(express.json())

/* Criar variável para armazenar todas as rotas definidas no arquivo rotas.js */
const rotasContasBancarias = require('./rotas')
/* Para todas as rotas definidas no arquivo rotas.js, deve ser considerado o caminho /contaBancaria */
app.use('/contaBancaria', rotasContasBancarias)

/* Para todas as rotas definidas no arquivo rotas.js, deve ser considerado o caminho */
app.listen(porta,()=>{
    console.log("Servidor rodando")
})