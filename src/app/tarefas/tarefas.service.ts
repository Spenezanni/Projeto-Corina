import { Tarefa } from './tarefas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})


export class TarefasService {

  private readonly API = 'http://localhost:8091/pilot/admin/tarefas';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Tarefa[]>(this.API)
    .pipe(
      tap(console.log)
    );

  }
}

