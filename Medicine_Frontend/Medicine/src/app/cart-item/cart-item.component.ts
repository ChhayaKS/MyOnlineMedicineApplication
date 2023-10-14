import { Component ,OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MedicineService } from '../services/medicine.service';
import { User } from '../shared/User';
import { UserService } from '../services/user.service';
import { Medicine } from '../shared/Medicine';
import { UserPageComponent } from '../user-page/user-page.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{

 u_id:any
 p_id:any

 user:User={
  id:0,
  fullname:'',
  email:'',
  password:''
   }

  
 grandTotal:any
 medicines:any=[]
 carts:any
 
 constructor(private cartService:CartService,private userService:UserService,private medicineService:MedicineService,private router:ActivatedRoute,private rout:Router)
 {
 }


 findTotalPrice()
  {
    this.grandTotal=0;
    this.cartService.getCart(this.user.id).subscribe((carts)=>
      {
        for(let cart of carts)
        {
          this.grandTotal += cart.totalPrice;
        }
      });
  }
  
  ngOnInit(): void {
    this.u_id=this.router.snapshot.paramMap.get('uid')
    this.getCart()
  
  }
   getCart() {
    this.userService.getUserById(this.u_id).subscribe((data)=>
      {
        this.user=data
        console.log(data)
        this.cartService.getCart(this.u_id).subscribe(res=>
          {
            this.carts=res
            console.log(res)
          })
      });
  

  }
  decreseQuantity(cart:any,id:any)
  {
    cart.unit-=1;
    cart.totalPrice=cart.unit*cart.medicine.price;
    this.updateCart(cart,id);
  }

  increseQuantity(cart:any, id:any)
  {
    cart.unit+=1;
    cart.totalPrice=cart.unit*cart.medicine.price;
    this.updateCart(cart,id);

  }


  updateCart(cart: any, cartId: any)
   {
   this.cartService.updateCart(cart,cartId).subscribe(cart=>
    {
    console.log(cart);
    this.getCart();
    });
  }

  deleteCart(id:any)
  {
    this.cartService.deleteCart(id).subscribe(res=>{
      alert("Item Deleted")
    })
  }

}
