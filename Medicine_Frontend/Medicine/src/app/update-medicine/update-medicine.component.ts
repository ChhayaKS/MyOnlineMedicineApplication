import { Component,OnInit} from '@angular/core';
import { Medicine } from '../shared/Medicine';
import { MedicineService } from '../services/medicine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit{

  medicineUpdate:Medicine={
    id:0,
    name:'',
    price:0,
    imageName:'',
    category:''
  }
  id:any

  constructor(private medicineService:MedicineService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.medicineService.getMedicineById(this.id).subscribe(res=>
      {
        this.medicineUpdate=res
      })
  }

  editMedicine(data:Medicine)
  {
    this.medicineUpdate=data
    this.medicineUpdate.id=this.id

    this.medicineService.updateMedicine(this.medicineUpdate).subscribe(res=>
      {
        alert("Medicine Updated..")
      },(err)=>{alert("Data Updated")}
      )
  }

}
