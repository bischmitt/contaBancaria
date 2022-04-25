const rotas = require('express').Router()
const conexao = require('./config/conexao')

/* Rota para listar os dados do database, ouse seja, listar todas as tarefas */
rotas.get('/', (req, res) => {
    /* Criando um query para selecionar todos os dados da tb_tarefas */
    let sql = 'select * from tb_contas order by nomeCliente asc'
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows)
    })
})

/* Rota para mostrar apenas uma tarefa de acordo com o seu id */
rotas.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'select * from tb_contas where id_transferencia =?'
    conexao.query(sql, [id], (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows[0])
    })
})

/* Rota para deletar uma tareda específica (através do seu id) */
rotas.delete('/:id', (req, res) => {
    const { id } = req.params
    let sql = `delete from tb_contas where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: "A conta foi excluída com sucesso!" })
    })
})

/* Rota para inclusão na tabela de contas */
rotas.post('/', (req, res) => {
    const { nomeCliente, valor, contaCliente } = req.body
    let sql = `insert into tb_contas(nomeCliente,valor,contaCliente) values('${nomeCliente}', '${valor}', '${contaCliente}')`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: 'A conta foi incluída com sucesso' })
    })
})

/* Rota para editar */
rotas.put('/:id', (req, res) => {
    const { id } = req.params
    const { nomeCliente, valor, contaCliente } = req.body
    console.log(id, nomeCliente, valor, contaCliente)
    let sql = `update tb_contas set
                nomeCliente = '${nomeCliente}',
                valor='${valor}',
                contaCliente='${contaCliente}'
                where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: "Conta editada com sucesso" })
    })
})

module.exports = rotas