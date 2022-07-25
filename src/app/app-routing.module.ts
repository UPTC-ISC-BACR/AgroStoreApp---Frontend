import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'admin',
    loadChildren: () => import('./components/admin-page/admin-page.module').then(x => x.AdminPageModule),
  },
  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
