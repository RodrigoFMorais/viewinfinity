import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,} from 'rxjs';
import { environment } from '../../environments/environment.prod';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  logarURL=environment.urlback; 

  constructor( private http: HttpClient) { }

  public login(userData: any): Observable<any> {
    return this.http.post(this.logarURL + '/session', userData).map(
      (token: string) => this.saveToken(token)); 
  }

  private saveToken(token: string): string {
    localStorage.setItem('authorization', token);
    return token;
  }

  public cadastro(userData: any): Observable<any> {
    return this.http.post(this.logarURL + '/users', userData); 
  }

  public update(userData: any): Observable<any> {
    return this.http.post(this.logarURL + '/users/update/' + localStorage.getItem('authorization'), userData); 
  }

  public logout(){
    window.localStorage.clear();
    localStorage.removeItem('authorization');
    alert("Você fez logout!");
  }

  public viewuser(): Observable<any> {
    return this.http.get(this.logarURL + '/viewuser/' + localStorage.getItem('authorization')); 
  } 
} 
