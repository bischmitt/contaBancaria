import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from './../../servicos/tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  tarefa: Tarefa = {
    nomeCliente: '',
    valor: '',
    contaCliente: '',
    id_transferencia: '',
  };

  msg: string;

  constructor(
    private TarefaService: TarefaService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.msg = 'conta editada com sucesso!';
  }

  ngOnInit(): void {
    const id_entrada = <any>this.activateRoute.snapshot.params['id'];
    this.TarefaService.getUmaTarefa(id_entrada).subscribe({
      next: (resultado: any) => {
        this.tarefa = <any>resultado;
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('Conta encontrada!'),
    });
  }

  modificar(id: any) {
    this.TarefaService.editTarefa(
      this.tarefa.id_transferencia,
      this.tarefa
    ).subscribe({
      next: (resultado) => console.log('Conta editada com sucesso'),
      error: (erro) => console.error(erro),
      complete: () => console.info('complete'),
    });
    this.router.navigate(['/inicio']);
  }

}
