/* Variável para instanciar o pacote do mysql */
const mysql = require('mysql')
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'240198',
    port:3306,
    database:'db_conta_bancaria'
})

conexao.connect((erro)=>{
    if(erro)throw erro
    console.log('Estou conectada ao mySQL db_conta_bancaria')
})

module.exports = conexao