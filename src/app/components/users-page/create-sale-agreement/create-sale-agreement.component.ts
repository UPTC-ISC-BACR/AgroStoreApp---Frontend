import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../models/user";
import {Product} from "../../../models/product";
import {SalePromise} from "../../../models/salePromise";

@Component({
  selector: 'app-create-sale-agreement',
  templateUrl: './create-sale-agreement.component.html',
  styleUrls: ['./create-sale-agreement.component.css']
})
export class CreateSaleAgreementComponent implements OnInit {

  public editMode: boolean;
  public buyer: User
  public seller: User
  public product: Product
  public promiseForm: FormGroup

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateSaleAgreementComponent>,//Referencia al dialog usado
    @Inject(MAT_DIALOG_DATA) public data: { edit: boolean, buyer: User, seller: User, product: Product}//Datos del dialog
  ) {
    this.buyer = data.buyer
    this.seller = data.seller
    this.product = data.product
    this.editMode = data.edit
    this.promiseForm = fb.group({
      quantity: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveAgreement(){
    let userSellerId = this.seller.id || -1;
    let userBuyerId = this.buyer.id || -1;
    let productId = this.product.id || -1;
    let date = new Date()
    let saleQuantity: number = this.promiseForm.get('quantity')?.value
    let pricePerUnit: number = this.product.pricePerunit || 0
    let total = saleQuantity * pricePerUnit
    const promise: SalePromise = {userSellerId, userBuyerId, productId, date, saleQuantity, pricePerUnit, total}
    this.dialogRef.close(promise)
  }
}
