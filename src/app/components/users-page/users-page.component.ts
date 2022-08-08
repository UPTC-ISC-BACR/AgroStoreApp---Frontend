import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CreateProductPageComponent} from "../general/create-product-page/create-product-page.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateSaleAgreementComponent} from "./create-sale-agreement/create-sale-agreement.component";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }
}
