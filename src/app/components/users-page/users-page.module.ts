import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import {SharedModule} from "../../shared/shared.module";
import {PrincipalPageUsersComponent} from "./principal-page-users/principal-page-users.component";

@NgModule({
  declarations: [
    UsersPageComponent,
    PrincipalPageUsersComponent,
  ],
  exports: [
    PrincipalPageUsersComponent
  ],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    SharedModule
  ]
})
export class UsersPageModule { }
