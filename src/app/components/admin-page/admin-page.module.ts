import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPageComponent} from "./admin-page.component";
import {UserFormPageComponent} from "./user-form-page/user-form-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
    declarations: [
        AdminPageComponent,
        UserFormPageComponent,
        ListUserPageComponent,
        ConfirmationDialogComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        AdminPageRoutingModule,
        SharedModule
    ]
})
export class AdminPageModule { }
