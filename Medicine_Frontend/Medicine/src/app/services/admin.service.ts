import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { Admin } from '../shared/Admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

baseUrl:String="http://localhost:1023/welcome"
  constructor( private  http:HttpClient) { }

  getAllAdmin()
  {
    return this.http.get<Admin[]>(this.baseUrl+"/getAll_admin");
  }
}
