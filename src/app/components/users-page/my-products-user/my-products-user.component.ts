import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProductsService} from "../../../../services/products.service";
import {CreateProductPageComponent} from "../../general/create-product-page/create-product-page.component";
import {Product} from "../../../models/product";
import {UsersServices} from "../../../../services/users.services";
import {User} from "../../../models/user";
import {ConfirmationDialogComponent} from "../../general/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-my-products-user',
  templateUrl: './my-products-user.component.html',
  styleUrls: ['./my-products-user.component.css']
})
export class MyProductsUserComponent implements OnInit {

  public router: Router
  public products: Product[] = []
  public user?: User

  constructor(router: Router,
              private productsService: ProductsService,
              private usersService: UsersServices,
              public dialog: MatDialog
  ) {
    this.router = router
  }

  ngOnInit(): void {
    this.usersService.getLoggedUser().subscribe((res) => {
      this.user = res.data
      this.getProducts()
    })
  }

  createProduct() {
    const dialogRef = this.dialog.open(CreateProductPageComponent, {
      width: '60%',
      height: '100%',
      data: {edit: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.user?.id) {
        this.productsService.createProduct(result, this.user?.id).subscribe((res) => {
          console.log(res.msg)
          this.getProducts()
        })
      }
    });
  }

  edit(product: Product) {
    const dialogRef = this.dialog.open(CreateProductPageComponent, {
      width: '60%',
      height: '100%',
      data: {edit:true, product:product}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productsService.updateProduct(result).subscribe((res => {
          console.log(res.msg)
          this.getProducts()
        }))
      }
    });
  }

  delete(id?: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Estas seguro de que deseas eliminar este producto? "}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      console.log(id)
      if (result && id) {
        this.productsService.deleteProduct(id).subscribe((res) => {
          console.log(res.msg)
          this.getProducts()
        });
      }
    });
  }

  getProducts() {
    if (this.user?.id){
      this.productsService.getUserProducts(this.user.id).subscribe((res) => {
        this.products = res.data
      })
    }
  }
}
