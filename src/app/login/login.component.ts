import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: any = {};
  errors: any= {};

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    
  } 

  login() {
    this.userService.login(this.formData).subscribe(
      (resu)=> {
        this.router.navigate(['/home', {registered: 'success'}])
      },
      (errorResponse)=> {
        this.errors = errorResponse.error;
      }  
    )
  } 
}
