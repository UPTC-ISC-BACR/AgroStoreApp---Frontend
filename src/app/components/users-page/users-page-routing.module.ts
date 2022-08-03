import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from "./users-page.component";
import {PrincipalPageUsersComponent} from "./principal-page-users/principal-page-users.component";
import {MyprofileUserComponent} from "./myprofile-user/myprofile-user.component";

const routes: Routes = [
  {path: '', component: UsersPageComponent, children: [
      {path: '', redirectTo: 'principal', pathMatch: 'full'},
      {path: 'principal', component:PrincipalPageUsersComponent},
      {path: 'my-profile', component:MyprofileUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersPageRoutingModule { }
