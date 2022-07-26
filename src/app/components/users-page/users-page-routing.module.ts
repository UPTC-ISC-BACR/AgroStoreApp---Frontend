import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from "./users-page.component";
import {PrincipalPageUsersComponent} from "./principal-page-users/principal-page-users.component";
import {MyprofileUserComponent} from "./myprofile-user/myprofile-user.component";
import {MyProductsUserComponent} from "./my-products-user/my-products-user.component";
import {CreateProductPageComponent} from "../general/create-product-page/create-product-page.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {MyBuysComponent} from "./my-buys/my-buys.component";

const routes: Routes = [
  {path: '', component: UsersPageComponent, children: [
      {path: '', redirectTo: 'principal', pathMatch: 'full'},
      {path: 'principal', component:PrincipalPageUsersComponent},
      {path: 'my-profile', component:MyprofileUserComponent},
      {path: 'my-product', component:MyProductsUserComponent},
      {path: 'create-product', component:CreateProductPageComponent},
      {path: 'product-page', component:ProductPageComponent},
      {path: 'my-buys', component:MyBuysComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersPageRoutingModule { }
