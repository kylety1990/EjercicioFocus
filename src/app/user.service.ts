import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url : string = ' https://reqres.in/api/users';

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }

  getUserDetails(id : string){
    return this.http.get(this.url+ '/'+id)
  }
}
