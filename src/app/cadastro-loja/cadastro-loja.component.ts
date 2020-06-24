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
  file: File;
  filename: any ="";

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  onChange(event){
     this.file = event.srcElement.files[0];
     this.filename = event.srcElement.files[0].name;
  }

  onLogoutClick(){
    this.storeService.logout();
  }

  onSubmit(){
    const formDataM=new FormData();
    formDataM.append('name', this.formData.name);
    formDataM.append('description', this.formData.description);
    formDataM.append('categoria', this.formData.categoria);
    formDataM.append('lat', this.formData.lat);
    formDataM.append('lon', this.formData.lon);
    formDataM.append('file', this.file, this.filename);
    console.log(formDataM);

    this.storeService.cadastroloja(formDataM).subscribe(
      (resu)=> {
        alert("Cadastro atualizado com sucess!");
        this.router.navigate(['/home', {registered: 'sucesso'}])
      },
      (errorResponse)=> {
        this.errors = errorResponse.error;
      }  
    )
  }

}
