import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from "./users-page.component";
import {PrincipalPageUsersComponent} from "./principal-page-users/principal-page-users.component";

const routes: Routes = [
  {path: '', component: UsersPageComponent, children: [
      {path: '', component:PrincipalPageUsersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersPageRoutingModule { }
