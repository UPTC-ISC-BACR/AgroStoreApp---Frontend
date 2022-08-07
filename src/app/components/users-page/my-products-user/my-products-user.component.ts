import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-products-user',
  templateUrl: './my-products-user.component.html',
  styleUrls: ['./my-products-user.component.css']
})
export class MyProductsUserComponent implements OnInit {

  public router: Router

  constructor(router: Router) {
    this.router = router
  }

  ngOnInit(): void {
  }

  navigate(to: string){
    this.router.navigate([to]);
  }
}
