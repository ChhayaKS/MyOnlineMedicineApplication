import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CartService } from '../services/cart.service';
import { Medicine } from '../shared/Medicine';
import { MedicineService } from '../services/medicine.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent  implements OnInit{
  medicines:Medicine[]=[]
  SearchText:any
  
  constructor(private medicineServcie:MedicineService, private userService:UserService,
    private router:ActivatedRoute,private rout:Router,private cartService:CartService)
  {}

  u_id:any
  p_id:any


  ngOnInit(): void {
    this.u_id=this.router.snapshot.paramMap.get('id');
    this.medicineServcie.getAllMedicines().subscribe(res=>
      {
        this.medicines=res;
      })
  }

  addCartData(pid:number)
  {
   this.p_id=pid
    this.cartService.addToCart(pid, this.u_id).subscribe(res=>
      {
        alert("item Added to cart")
      });
  }

  userLogout(){
    localStorage.setItem('token','')
  }

  getCartData()
  {
    this.rout.navigate(['cart',this.u_id])
  }

}


