import { BehaviorSubject, Observable } from 'rxjs';
import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {User} from "../../core/model/user";
import {NavigationEnd, Router} from "@angular/router";
import { of } from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


firstname=String(localStorage.getItem('loggedUserFirstName'));

  constructor(public auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  this.reloadPage();
  }

  logout(){
    this.auth.logOut();
    this.firstname='';
    this.router.navigate(['/', 'login']);

  }

  
  reloadPage() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
