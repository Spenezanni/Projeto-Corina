import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TarefasComponent,
    UsuarioComponent,
    CadastroComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
