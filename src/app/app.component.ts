import {Component, OnInit} from '@angular/core';
import {UserService} from "./core/services/user.service";
import {AuthService} from "./core/services/auth.service";
import {User} from "./core/model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ShopProject';
  constructor(private auth: AuthService) {
  }
  ngOnInit(){

    if(localStorage.getItem('loggedUserid')!=null && localStorage.getItem('loggedUserid')!=''){
      let user = new User();
      user.firstName=String(localStorage.getItem('loggedUserFirstName'));
      user.lastName=String(localStorage.getItem('loggedUserLastName'));
      user.picture=String(localStorage.getItem('loggedUserPicture'));
       this.auth.curUser.next(user)
    }
  }

}
