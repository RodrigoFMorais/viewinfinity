import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ViewuserComponent } from './viewuser/viewuser.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/login"},
  {path: "login", component: LoginComponent},
  {path: "cadastro-usuario", component: CadastroUsuarioComponent},
  {path: "home", component: HomeComponent},
  {path: "viewuser", component: ViewuserComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
