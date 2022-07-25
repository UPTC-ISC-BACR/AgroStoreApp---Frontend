import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./admin-page.component";
import {CreateUserPageComponent} from "./create-user-page/create-user-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";
import {DeleteUserPageComponent} from "./delete-user-page/delete-user-page.component";
import {UpdateUserPageComponent} from "./update-user-page/update-user-page.component";
import {PrincipalPageAdminComponent} from "./principal-page-admin/principal-page-admin.component";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {path: '', component:PrincipalPageAdminComponent},
      {path: 'createu', component: CreateUserPageComponent},
      {path: 'listu', component: ListUserPageComponent},
      {path: 'deleteu', component: DeleteUserPageComponent},
      {path: 'updateu', component: UpdateUserPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {
}
