import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="http://localhost:1023/welcome"

  constructor(private http:HttpClient) { }

  addUser(userData:User)
  {
    return this.http.post(this.baseUrl+"/add_user",userData);
  }

  getAll_user()
  {
    return this.http.get<User[]>(this.baseUrl+"/getAll_user");
  }

  getUserById(id:number)
  {
    return this.http.get<any>(this.baseUrl+"/getuser/"+id);
  }

  updateUser(user:User)
  {
    return this.http.put<User>(this.baseUrl+"/upadate_user",user);
  }

  deleteUser(id:number)
  {
    return this.http.delete(this.baseUrl+"/delete_user/"+id);
  }

}
