import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainProductComponent} from "./main-product/main-product.component";
const routes: Routes = [
  {path: '', component: MainProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProductRoutingModule { }
