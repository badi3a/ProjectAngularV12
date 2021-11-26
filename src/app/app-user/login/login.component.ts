import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  msg: string;
  constructor(private data: UserService,
              private router:Router,
              private f: FormBuilder,
              private auth: AuthService) { }
  ngOnInit(): void {
    this.myForm= new FormGroup({
      'email': new FormControl('',[Validators.required,
        Validators.minLength(3)]),
      'password': new FormControl('', Validators.required),
      'address': new FormGroup({
        'street number': new FormControl()
      })
    })
  }


  checkUser(myForm: FormGroup){
   if(this.auth.login(myForm.controls['email'].value, myForm.controls['password'].value)){
     this.router.navigate(['']);
   }
   else alert("please give a valid email and password")
  }

}
