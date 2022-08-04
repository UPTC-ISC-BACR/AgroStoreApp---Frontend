import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./admin-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";
import {PrincipalPageAdminComponent} from "./principal-page-admin/principal-page-admin.component";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {path: '', component:PrincipalPageAdminComponent},
      {path: 'listu', component: ListUserPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {
}
