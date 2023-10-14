import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:1023/cart"
  
  getCart(uid:any)
  {
    return this.http.get<any>(this.baseUrl+"/getAll/"+uid);
  }

  addToCart(pid:any,uid:any){
    return this.http.get(this.baseUrl+"/add/"+pid+"/"+uid)
  }
  updateCart(cart:any, cid:any){
    return this.http.put<any>(this.baseUrl+"/update-cart/"+cid,cart)
  }
  deleteCart(cid:any){
    return this.http.delete<any>(this.baseUrl+"/delete/"+cid)
  }

}
