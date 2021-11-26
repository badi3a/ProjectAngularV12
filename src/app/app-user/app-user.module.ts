import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppUserRoutingModule } from './app-user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MainUserComponent } from './main-user/main-user.component';



@NgModule({
  declarations: [
    FormUserComponent,
    LoginComponent,
    UserListComponent,
    MainUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppUserRoutingModule,
    FormsModule
  ]
})
export class AppUserModule { }
