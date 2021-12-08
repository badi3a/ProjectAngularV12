import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUserRoutingModule} from "./app-user/app-user-routing.module";
import {AppProductRoutingModule} from "./app-product/app-product-routing.module";
import {NotFoundComponent} from "./app-shared/not-found/not-found.component";

const routes: Routes = [
  //{path: '',redirectTo:'usermodule', pathMatch: 'full' },
  {path:'usermodule',
  loadChildren:() =>import('./app-user/app-user.module').then((m)=>m.AppUserModule)},
  {path:'productmodule',
  loadChildren:() =>import('./app-product/app-product.module').then((m)=>m.AppProductModule)},


  //{path: '**',component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
