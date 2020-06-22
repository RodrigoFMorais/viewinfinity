import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,} from 'rxjs';
import 'rxjs/Rx';
import {Lojas} from '../lista-lojas/lojas';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  logarURL=environment.urlback;
  
  public logout(){
    window.localStorage.clear();
    localStorage.removeItem('authorization');
    alert("Logout! Volte sempre! :-)"); 
  }

  public cadastroloja(userData: any): Observable<any> {
    return this.http.post(this.logarURL + '/store/' + localStorage.getItem('authorization'), userData); 
  }

  public listalojas(filtro: string): Observable<any> {
    return this.http.get<Lojas[]>(this.logarURL + '/store/' + localStorage.getItem('authorization') + filtro); 
  }

  public update(userData: any, id: string): Observable<any> {
    return this.http.post(this.logarURL + '/store/' + id + '/' + localStorage.getItem('authorization'), userData); 
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(this.logarURL + '/store/' + id + '/' + localStorage.getItem('authorization')); 
  }

  public viewStore(id: string): Observable<any> {
    return this.http.get(this.logarURL + '/store/' + localStorage.getItem('authorization') + '?storeid=' + id); 
  }
}
