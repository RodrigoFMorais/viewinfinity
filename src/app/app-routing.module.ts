import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ViewstoreComponent } from './viewstore/viewstore.component';
import { CadastroLojaComponent } from './cadastro-loja/cadastro-loja.component';
import { ListaLojasComponent } from './lista-lojas/lista-lojas.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/login"},
  {path: "login", component: LoginComponent},
  {path: "cadastro-usuario", component: CadastroUsuarioComponent},
  {path: "home", component: HomeComponent},
  {path: "viewuser", component: ViewuserComponent},
  {path: "viewstore", component: ViewstoreComponent},
  {path: "cadastro-loja", component: CadastroLojaComponent},
  {path: "lista-lojas", component: ListaLojasComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
