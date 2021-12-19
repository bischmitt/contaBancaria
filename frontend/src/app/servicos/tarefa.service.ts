/* Dentro deste arquivos que iremos realizar nossas rotinas de serviço */
import { Injectable } from '@angular/core';
/* Aqui estamos importando a biblioteca http para possibilitar a realização dos serviços http */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  /* através dessa url que o frontend e o backend vão se comunicar */
  url = '/contaBancaria';

  constructor(private http: HttpClient) {}

  /* Listar todas as tarefas que estão armazenadas no banco de dados */
  getTarefas() {
    return this.http.get(this.url);
  }

  /* Get para uma tarefa */
  getUmaTarefa(id: any) {
    return this.http.get(this.url + '/' + id);
  }

  /* Adicionar tarefa */
  addTarefa(tarefa:Tarefa){
    return this.http.post(this.url,tarefa)
  }

  /* Deletar uma tarefa */
  deleteTarefa(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  /* Modificar uma tarefa */
  editTarefa(id:any, tarefa:Tarefa){
    return this.http.put(this.url + '/' + id, tarefa)
  }
}

export interface Tarefa {
  nomeCliente?: any;
  valor?: any;
  contaCliente?: any;
  id_transferencia?: any;
}
