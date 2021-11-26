import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {UserService} from "./user.service";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //public loggedUser: User;
  private validUser: Boolean = false;
  user:User = new User();
  public curUser= new BehaviorSubject(this.user);
  sharedUser = this.curUser.asObservable();
  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  login(email:string, password: string){
    //I will check the local list however in the real case we need to communicate to a backend
    // that will check if the user is valid or not
    this.userService.list.forEach((user)=>{
      if((user.email===email) && (user.password===password)){
        this.validUser= true;
        localStorage.setItem('loggedUserid',String(user.idUser));
        localStorage.setItem('loggedUserFirstName',user.firstName);
        //console.log(localStorage.getItem('loggedUserFirstName'))
        localStorage.setItem('loggedUserLastName',user.lastName);
        localStorage.setItem('loggedUserPicture',user.picture);
        localStorage.setItem('isloggedIn',String(this.validUser));
        this.curUser.next(user);
      }
    })
    return this.validUser;
  }
  logOut(){
      this.validUser= false;
      this.curUser.complete();
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('loggedUserFirstName');
      localStorage.removeItem('loggedUserLastName');
      localStorage.removeItem('loggedUserPicture');
      localStorage.setItem('isloggedIn',String(this.validUser));
      this.router.navigate(['/login']);
  }
  //this method will check if the connected user is an admin or not in order to active
  //the backOffice app
  isAdmin(user:User):boolean{
    if(user.accountCategory== 'Admin')
      return  true;
    else return false;
  }
  register(user: User){
    //this method will cnx to the WS auth implemented in the BackEnd Side
  }
  checkConnectedUser(){
    let user = new User();
    if(localStorage.getItem('loggedUserid')!=null && localStorage.getItem('loggedUserid')!=''){
      user.firstName=String(localStorage.getItem('loggedUserFirstName'));
      user.lastName=String(localStorage.getItem('loggedUserLastName'));
      user.picture=String(localStorage.getItem('loggedUserPicture'));
     return user;
    }
    return null;
  }

}
