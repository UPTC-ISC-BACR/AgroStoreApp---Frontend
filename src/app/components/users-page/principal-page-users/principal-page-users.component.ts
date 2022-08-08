import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product";
import {User} from "../../../models/user";
import {ProductsService} from "../../../../services/products.service";
import {MatDialog} from "@angular/material/dialog";
import {UsersServices} from "../../../../services/users.services";
import {CreateSaleAgreementComponent} from "../create-sale-agreement/create-sale-agreement.component";
import {SalePromisesService} from "../../../../services/sale-promises.service";

@Component({
  selector: 'app-principal-page-users',
  templateUrl: 'principal-page-users.component.html',
  styleUrls: ['principal-page-users.component.css']
})
export class PrincipalPageUsersComponent implements OnInit {

  public openFilterPane: boolean = false

  public products: Product[] = []
  public user?: User

  constructor(
    private productsService: ProductsService,
    private usersService: UsersServices,
    private promisesService: SalePromisesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.usersService.getLoggedUser().subscribe((res) => {
      this.user = res.data
      this.getProducts()
    })
  }

  createSaleAgreement(product: Product) {
    if (product.userId)
    this.usersService.getUser(product.userId).subscribe((res) => {
      const dialogRef = this.dialog.open(CreateSaleAgreementComponent, {
        width: '60%',
        height: '100%',
        data: {
          edit: false,
          buyer: this.user,
          seller: res.data,
          product: product
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log(result)
          this.promisesService.createSalePromise(result).subscribe((res) => {
          })
        }
      });
    })
  }

  toggleOpenFilterPane(){
    this.openFilterPane = !this.openFilterPane
  }

  getProducts() {
    if (this.user?.id){
      this.productsService.getProductsToBuy(this.user.id).subscribe((res) => {
        this.products = res.data
      })
    }
  }
}
