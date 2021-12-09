import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUserRoutingModule} from "./app-user/app-user-routing.module";
import {AppProductRoutingModule} from "./app-product/app-product-routing.module";
import {NotFoundComponent} from "./shared/not-found/not-found.component";


const routes: Routes = [
  { path: 'user', loadChildren: () => import('./app-user/app-user.module').then(m => m.AppUserModule) },
  { path: 'product', loadChildren: () => import('./app-product/app-product.module').then(m => m.AppProductModule) },

  {path: '',redirectTo:'user', pathMatch: 'full' },
  {path: '**',component: NotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppUserRoutingModule,/// va créer des prblms cote chargement de projet
    AppProductRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
