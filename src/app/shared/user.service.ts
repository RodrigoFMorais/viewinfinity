import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable,} from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logarURL='https://backendinfinity.herokuapp.com';

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

  public logout(){
    window.localStorage.clear();
    localStorage.removeItem('authorization');
    alert("Você fez logout!");
  }

}
