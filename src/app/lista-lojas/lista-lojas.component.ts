import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { ActivatedRoute, Router} from '@angular/router';
import {Lojas} from './lojas';

@Component({
  selector: 'app-lista-lojas',
  templateUrl: './lista-lojas.component.html',
  styleUrls: ['./lista-lojas.component.css']
})
export class ListaLojasComponent implements OnInit {

  lojas: Lojas[];
  errors: any= {};
  filter: string = "";

  constructor(private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
             if (params['filter']) {
              this.filter = `${params['filter']}`; 
             } else {
              this.filter = " ";
             }
      }
    );

    this.storeService.listalojas(this.filter).subscribe(dados => this.lojas = dados);
  }

  onLogoutClick(){ 
    this.storeService.logout();
  }

  onEdit(id) {
    this.router.navigate(['/viewstore', { storeid: id }]);
  }

  onDelete(id) {
    this.storeService.delete(id).subscribe(
      (resu)=> {
        alert("Loja deletada com sucesso! :-)");
        location.reload();
      },
      (errorResponse)=> {
        this.errors = errorResponse.error;
        alert("Algo de errado não está certo! :-( error: " + this.errors);
      }  
    )
  }

}
