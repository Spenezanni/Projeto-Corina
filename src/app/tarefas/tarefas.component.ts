import { Component, OnInit } from '@angular/core';
import { Tarefa } from './tarefas';
import { TarefasService } from './tarefas.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private service: TarefasService) { }

  ngOnInit() {
   this.list();
  }

  list() {
    this.service.list()
      .subscribe(dados => {
        this.tarefas = dados
        console.log("list");
        console.log(dados);
        console.log(this.tarefas);
      });
  }


}
