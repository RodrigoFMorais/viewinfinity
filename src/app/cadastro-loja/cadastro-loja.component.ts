import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-loja',
  templateUrl: './cadastro-loja.component.html',
  styleUrls: ['./cadastro-loja.component.css']
})
export class CadastroLojaComponent implements OnInit {

  formData:  any ={} ;
  errors: any= {}; 

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit(): void {

  }
 
  onLogoutClick(){
    this.storeService.logout();
  }

  teste(){
    console.log(this.formData);
    this.storeService.cadastroloja(this.formData).subscribe(
      (resu)=> {
        alert("Cadastro atualizado com sucess!");
        this.router.navigate(['/home', {registered: 'success'}])
      },
      (errorResponse)=> {
        this.errors = errorResponse.error;
      }  
    )
  }

}
