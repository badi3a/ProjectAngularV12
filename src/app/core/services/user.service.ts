import { Injectable } from '@angular/core';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: User[]=
    [
      {
        idUser: 1,
        firstName: "Mila",
        lastName: " Kunis",
        birthDate: "30-06-1999",
        accountCategory: "Admin",
        email: "test@gmail.com",
        password: "testtest10",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        profession: "Software Engineer"
      },
      {
        idUser: 2,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "10-02-1981",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
        profession: "Software Engineer"
      },
      {
        idUser: 3,
        firstName: "George",
        lastName:  "Clooney",
        birthDate: "10-02-1981",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
        profession: "Software Engineer"
      },
      {
        idUser: 4,
        firstName: "Ryan",
        lastName:  "Gossling",
        birthDate: "05-03-1987",
        accountCategory: "Golden",
        email: "Ryan@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
        profession: "Software Engineer"
      },
      {
        idUser: 4,
        firstName: "Robert",
        lastName:  "Downey",
        birthDate: "05-03-2002",
        accountCategory: "Blocked Account",
        email: "robert@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
        profession: "Software Engineer"
      },
      { idUser: 12,
        firstName: "Ahmed",
        lastName:"ben Foulen",
        accountCategory:"Admin",
        birthDate: "10-10-1988",
        email: "ahmed@gmail.com",
        password:"test",
        profession:"Teacher",
        picture:"https://bootdey.com/img/Content/avatar/avatar5.png"},

      {idUser: 13,
        firstName: "Amina",
        lastName:"ben Foulen",
        accountCategory:"Customer",
        birthDate: "10-10-1988",
        email: "ahmed@gmail.com",
        password:"test",
        profession:"Teacher",
        picture:"https://bootdey.com/img/Content/avatar/avatar5.png"}
    ];
  constructor() { }
}
