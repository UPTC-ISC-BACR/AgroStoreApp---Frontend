import {Component, OnInit} from '@angular/core';
import {SalePromisesService} from "../../../../services/sale-promises.service";
import {SalePromise} from "../../../models/salePromise";
import {UsersServices} from "../../../../services/users.services";
import {ProductsService} from "../../../../services/products.service";
import {SalePromiseData} from "../../../models/salePromiseData";

@Component({
  selector: 'app-my-buys',
  templateUrl: './my-buys.component.html',
  styleUrls: ['./my-buys.component.scss']
})
export class MyBuysComponent implements OnInit {

  public salePromises?: SalePromiseData[]

  constructor(
    private promisesService: SalePromisesService,
    private productsService: ProductsService,
    private usersService: UsersServices
  ) {
    this.getSalePromises()
  }

  ngOnInit(): void {
    this.getSalePromises()
  }

  getSalePromises() {
    this.usersService.getLoggedUser().subscribe((resUser) => {
      let promisesData: SalePromiseData[] = []
      this.promisesService.getUserPromises(resUser.data.id, "buyer").subscribe((res) => {
        for (let promise of res.data){
          this.productsService.getProduct(promise.productId).subscribe((prod) =>{
            this.usersService.getUser(prod.data.userId).subscribe((user) =>{
              promisesData.push(new SalePromiseData(user.data,prod.data, promise))
            })
          })
        }
      })
      this.salePromises = promisesData
    })
  }
}
