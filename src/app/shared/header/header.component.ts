import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {User} from "../../core/model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService, private router: Router, ) { }

  ngOnInit(): void {
    this.auth.checkConnectedUser();
    this.auth.sharedUser.subscribe(
      (data:User)=>
      {this.user=data;
        console.log(data)},
      ()=>{},
      ()=>{}
    )
  }

  logout(){
    this.auth.logOut();
    this.router.navigate(['/login']);
  }


}
