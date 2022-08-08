import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import {SharedModule} from "../../shared/shared.module";
import {PrincipalPageUsersComponent} from "./principal-page-users/principal-page-users.component";
import {MyprofileUserComponent} from "./myprofile-user/myprofile-user.component";
import {MyProductsUserComponent} from "./my-products-user/my-products-user.component";
import {CreateProductPageComponent} from "../general/create-product-page/create-product-page.component";

@NgModule({
  declarations: [
    UsersPageComponent,
    PrincipalPageUsersComponent,
    MyprofileUserComponent,
    MyProductsUserComponent,
    CreateProductPageComponent
  ],
  exports: [
    PrincipalPageUsersComponent,
    MyprofileUserComponent,
    MyProductsUserComponent,
    CreateProductPageComponent
  ],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    SharedModule
  ]
})
export class UsersPageModule { }
