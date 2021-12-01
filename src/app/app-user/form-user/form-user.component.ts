import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  user: User;
  constructor(private data:UserService, private router: Router) { }
  ngOnInit(): void {
    this.user =  new User();

  }
  save(){
    //traitement
    this.user.accountCategory='Customer';
    this.data.list.push(this.user)
    this.router.navigate(['/user'])
  }

}
