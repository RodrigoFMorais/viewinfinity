import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-viewstore',
  templateUrl: './viewstore.component.html', 
  styleUrls: ['./viewstore.component.css']
})
export class ViewstoreComponent implements OnInit {

  formData: any= {};
  errors: any= {};

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.storeService.logout();
  }

}
