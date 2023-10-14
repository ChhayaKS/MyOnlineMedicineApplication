import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../shared/Medicine';
import { MedicineService } from '../services/medicine.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    medicines:Medicine[]=[]
    searchText:any
    id:any

constructor(private medicineService:MedicineService, rout:ActivatedRoute)
{}
 
ngOnInit(): void 
    {
   this.medicineService. getAllMedicines().subscribe((res: any)=>
    {
      this.medicines=res
    })

    }
  
  getData()
  {
    alert("Login First...")
  }

}
