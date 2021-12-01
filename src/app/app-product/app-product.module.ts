import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainProductComponent} from "./main-product/main-product.component";
import { AppProductRoutingModule } from './app-product-routing.module';
import { ProductComponent } from './product/product.component';
import { FormProductComponent } from './form-product/form-product.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MainProductComponent,
    ProductComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    AppProductRoutingModule,
    FormsModule
  ]
})
export class AppProductModule { }
