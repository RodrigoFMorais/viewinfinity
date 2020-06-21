import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  formData: any = {};
  errors: any= {};
  
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  cadastro() {
    this.userService.cadastro(this.formData).subscribe(
      (resu)=> {
        this.router.navigate(['/login', {registered: 'success'}])
      },
      (errorResponse)=> {
        this.errors = errorResponse.error;
      }  
    )
  } 
}
