import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-viewstore',
  templateUrl: './viewstore.component.html', 
  styleUrls: ['./viewstore.component.css']
})
export class ViewstoreComponent implements OnInit {

  formData: any= {};
  errors: any= {};
  storeid: string;

  constructor(private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
             this.storeid = params['storeid'];
             console.log(this.storeid)
      }
    );
    this.storeService.viewStore(this.storeid).subscribe(dados => this.formData = dados[0]);
  }

  onLogoutClick(){
    this.storeService.logout();
  }

  onSubmit(){
    this.storeService.update(this.formData, this.storeid).subscribe(
      (resu)=> {
        alert("Loja atualizada com sucess! :-)");
        this.router.navigate(['/lista-lojas', {registered: 'success'}])
      },
      (errorResponse)=> {
        this.errors = errorResponse.error;
        alert("Algo de errado não está certo! :-( error: " + errorResponse);
      }  
    )
  }

}
