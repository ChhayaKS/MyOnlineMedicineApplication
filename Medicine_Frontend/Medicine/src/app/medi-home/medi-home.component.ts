import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Medicine } from '../shared/Medicine';
import { MedicineService } from '../services/medicine.service';
@Component({
  selector: 'app-medi-home',
  templateUrl: './medi-home.component.html',
  styleUrls: ['./medi-home.component.css']
})
export class MediHomeComponent implements OnInit {
  
medicineList:Medicine[]=[]

constructor(private medicineService:MedicineService, private route:Router)
{

}

  ngOnInit(): void {
    this.getMedicineTable();
  }

  getMedicineTable() 
  {
     this.medicineService.getAllMedicines().subscribe(res=>
   {
    console.log(res);
    res.forEach(data=>
      {
        console.log(data);
        this.medicineList.push(data);
      })
    })
  }

  updateMedicine(id:any)
  {
    //alert(id+  "Medicine Will Update")
    this.route.navigate(['update-medicine',id])
  }

  deleteMedicine(id:any)
  {
    this.medicineService.deleteMedicine(id).subscribe(res=>
      {
        if(res)
        alert(id +"Deleted ")
      },(err)=>{
        alert(id+"Deleted")
      });
  }

  GetAdmin()
{
  this.route.navigate(['admin-home'])
}

}
