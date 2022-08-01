import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPageComponent} from "./admin-page.component";
import {PrincipalPageAdminComponent} from "./principal-page-admin/principal-page-admin.component";
import {CreateUserPageComponent} from "./create-user-page/create-user-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";
import {DeleteUserPageComponent} from "./delete-user-page/delete-user-page.component";
import {UpdateUserPageComponent} from "./update-user-page/update-user-page.component";
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        AdminPageComponent,
        PrincipalPageAdminComponent,
        CreateUserPageComponent,
        ListUserPageComponent,
        DeleteUserPageComponent,
        UpdateUserPageComponent
    ],
    exports: [
        PrincipalPageAdminComponent
    ],
    imports: [
        CommonModule,
        AdminPageRoutingModule,
        SharedModule
    ]
})
export class AdminPageModule { }
