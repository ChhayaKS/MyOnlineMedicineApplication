import { Component,OnInit } from '@angular/core';
import { Medicine } from '../shared/Medicine';
import { Router } from '@angular/router';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit{
 
medicine:Medicine={
  id:0,name:'',price:0,imageName:'',category:''
}
 
  
constructor(private medicineService:MedicineService ,private rout:Router){}  

  ngOnInit(): void { }

  medicineRegistration(data:any)
  {
    this.medicine=data
    this.medicineService.addMedicine(this.medicine).subscribe(res=>{
      if(res!=null)
      {
        alert("Medicine Registered Successfully")        
      }else{
        alert("Registration Failed..")
      }
    })
  }

  

}
