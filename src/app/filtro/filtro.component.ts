import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router} from '@angular/router';
import {Lojas} from '../lista-lojas/lojas';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  formData: any = {};
  errors: any= {};
  lojas: Lojas[];
  filter: string;

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.storeService.logout();
  }

  onSubmit() {
    this.filter = "/\?";
    for (var prop in this.formData) {
      this.filter=this.filter + prop + "\=" + this.formData[`${prop}`] + "\&";
    }
    this.router.navigate(['/lista-lojas', { filter: this.filter }]);
  }
}
