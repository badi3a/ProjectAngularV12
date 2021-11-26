import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {FormUserComponent} from "./form-user/form-user.component";
import {UserListComponent} from "./user-list/user-list.component";


const routes: Routes = [
  {path: 'user', component: MainUserComponent, children:[
      {path:'category/:category', component: UserListComponent}
    ]},
  {path:'login', component: LoginComponent},
  {path:'user', component: MainUserComponent},
  {path:'subscribe', component: FormUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule { }
