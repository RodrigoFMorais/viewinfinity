import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  formData: any= {};
  errors: any= {};

  constructor(private userService: UserService,
    private router: Router) { }

  
  ngOnInit(): any {
   this.userService.viewuser().subscribe(
      (res)=> {this.formData = res},
      (errorResponse)=> {this.errors = errorResponse.error}   
    )
  } 

  onLogoutClick(){
    this.userService.logout();
  }

  update(){
    this.userService.update(this.formData).subscribe(
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
 