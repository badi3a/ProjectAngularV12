import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUser: User[];
  list: User[];
  inputCategory: string;
  constructor(private route: ActivatedRoute, private data: UserService) { }

  ngOnInit(): void {
    this.allUser= this.data.list;
    this.route.paramMap.subscribe(
      (params)=>
      {
        let category= params.get('category')
        this.list= this.allUser.filter(user=>user.accountCategory === category)}
    );


  }
  delete(user:User){
    let i = this.list.indexOf(user);
    this.list.splice(i,1);
  }
  getColor(user:User){
    if(user.accountCategory=='Admin')
      return 'red';
    else if(user.accountCategory=='Golden')
      return 'yellow';
    else return 'green'
  }

}
