import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/user.service';
import { StoreService } from './shared/store.service';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ViewstoreComponent } from './viewstore/viewstore.component';
import { CadastroLojaComponent } from './cadastro-loja/cadastro-loja.component';
import { ListaLojasComponent } from './lista-lojas/lista-lojas.component';
import { FiltroComponent } from './filtro/filtro.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    ViewuserComponent,
    ViewstoreComponent,
    CadastroLojaComponent,
    ListaLojasComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.AuthKeyG
    })
  ],
  providers: [
    StoreService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
