import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.css']
})
export class CreateProductPageComponent implements OnInit {

  productForm:FormGroup;
  public editMode: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateProductPageComponent>,//Referencia al dialog usado
    @Inject(MAT_DIALOG_DATA) public data: { edit: boolean, product:Product }//Datos del dialog
  ) {
    this.editMode = data.edit
    this.productForm = fb.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      harvestDate: ['', Validators.required],
      harvestLocation: ['', Validators.required],
      units: ['', Validators.required],
      quantityAvalible: ['', Validators.required],
      pricePerunit: ['', Validators.required],
      image: ['', Validators.required],
      description: ['',Validators.required]
    })
    if (this.editMode && data.product.harvestDate){
      this.productForm.patchValue(data.product)
      this.productForm.patchValue({
        harvestDate: this.formatDate(data.product.harvestDate)
      })
      console.log(data.product.harvestDate.toString())
    }
  }

  ngOnInit(): void {
  }

  saveProduct(){
    const product: Product = this.productForm.value
    if (this.editMode)
      product.harvestDate = new Date(this.productForm.get('harvestDate')?.value)
    this.dialogRef.close(product)
  }

  private formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
