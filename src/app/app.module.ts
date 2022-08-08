import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {UserFormPageComponent} from "./components/general/user-form-page/user-form-page.component";
import {ConfirmationDialogComponent} from "./components/general/confirmation-dialog/confirmation-dialog.component";
import { ProductPageComponent } from './components/users-page/product-page/product-page.component';
import { CreateSaleAgreementComponent } from './components/users-page/create-sale-agreement/create-sale-agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormPageComponent,
    ConfirmationDialogComponent,
    ProductPageComponent,
    CreateSaleAgreementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
