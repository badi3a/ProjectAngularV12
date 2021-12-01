import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUserRoutingModule} from "./app-user/app-user-routing.module";
import {AppProductRoutingModule} from "./app-product/app-product-routing.module";
import {NotFoundComponent} from "./shared/not-found/not-found.component";


const routes: Routes = [
  {path: '',redirectTo:'user', pathMatch: 'full' },
  {path: '**',component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppUserRoutingModule,
    AppProductRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
