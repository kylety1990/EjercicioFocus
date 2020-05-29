import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces'
import {UserService} from '../../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  
  users : IUser[]; 
  search : string ="";
  constructor(public json : UserService) {
    this.json.getUsers().subscribe((res : any) => {
      this.users = res.data;
    })

   }

   searchUser(event){
     this.search =event.target.value;
   }


  ngOnInit() {
  }

}
