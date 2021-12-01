import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppUserRoutingModule} from "../app-user/app-user-routing.module";
import {MainProductComponent} from "./main-product/main-product.component";
const routes: Routes = [
  {path: 'product', component: MainProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppProductRoutingModule { }
