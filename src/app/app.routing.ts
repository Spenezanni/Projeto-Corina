import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import {TarefasComponent} from './tarefas/tarefas.component'
import { CadastroComponent } from './cadastro/cadastro.component';

const APP_ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tarefas', component: TarefasComponent },
    { path: 'cadastro', component: CadastroComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
