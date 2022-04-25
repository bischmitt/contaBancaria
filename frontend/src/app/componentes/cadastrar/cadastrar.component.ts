import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from './../../servicos/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  tarefa: Tarefa = {
    nomeCliente: '',
    valor: '',
    contaCliente: '',
    id_transferencia: '',
  };

  constructor(private TarefaService: TarefaService, private router: Router) {}

  ngOnInit(): void {}

  adicionar() {
    /* Aqui deletamos o atributo do in_tarefa, pois esse atributo é criado de forma automática */
    delete this.tarefa.id_transferencia;

    /* Aqui nós fizemos a inserção da nova tarefa no banco de dados */
    this.TarefaService.addTarefa(this.tarefa).subscribe({
      next: (resultado) => console.log('Conta Cadastrada com sucesso'),
      error: (erro) => console.error(erro),
      complete: () => console.info('Cadastro efetuado com sucesso!'),
    });

    /* Voltar para a tabela de tarefas (componente início) */
    this.router.navigate(['/inicio']);
  }
}
