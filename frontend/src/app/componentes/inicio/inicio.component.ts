import { Component, OnInit } from '@angular/core';
/* Importando */
import { TarefaService, Tarefa } from '../../servicos/tarefa.service';
/* Importar rotas */
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  ListarTarefas: Tarefa[];

  /* Dentro do constructor nós declaramos a variável TarefaService com o tipo TarefaService*/
  constructor(private TarefaService: TarefaService, private router: Router) {
    /* Variável declarada do tipo tarefa */
    this.ListarTarefas = [];
  }

  /* Ao iniciar esse componente deve-se executar a função listarTarefas */
  ngOnInit(): void {
    this.listarTarefas();
  }

  /* Aqui é uma função que realiza a listagem das tarefas que estão cadastradas no banco */
  listarTarefas() {
    this.TarefaService.getTarefas().subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.ListarTarefas = <any>resultado;
      },
      error: (e) => console.error(e),
      complete: () => console.info('Tarefas Listadas'),
    });
  }

  /* Função para excluir uma tarefa pelo seu id */
  excluir(id: any) {
    this.TarefaService.deleteTarefa(id).subscribe({
      next: (resultado) => {
        console.log('Tarefa excluída com sucesso');
        this.listarTarefas();
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('Processo de exclusão completado'),
    });
  }
  /* Função para editar */
  editar(id: any) {
    this.router.navigate(['/edit/' + id]);
  }

}
