import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,} from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  logarURL='https://backendinfinity.herokuapp.com';

  public logout(){
    window.localStorage.clear();
    localStorage.removeItem('authorization');
    alert("Você fez logout!"); 
  }

  public cadastroloja(userData: any): Observable<any> {
    return this.http.post(this.logarURL + '/store/' + localStorage.getItem('authorization'), userData); 
  }

}
