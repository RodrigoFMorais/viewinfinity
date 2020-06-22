import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-lista-lojas',
  templateUrl: './lista-lojas.component.html',
  styleUrls: ['./lista-lojas.component.css']
})
export class ListaLojasComponent implements OnInit {

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.storeService.logout();
  }
}
