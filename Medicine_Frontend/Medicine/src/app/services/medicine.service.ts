import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../shared/Medicine';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

baseUrl:String="http://localhost:1023/medicines"

  constructor(private http:HttpClient) { }

  getAllMedicines()
  {
    return this.http.get<Medicine[]>(this.baseUrl+ "/getAll_medicine");
  }
  
  addMedicine(medicineData:Medicine)
  {
    console.log("medicineService" +medicineData);
    return this.http.post(this.baseUrl+"/add_medicine",medicineData);
  }

  getMedicineById(id:any)
  {
return this.http.get<any>(this.baseUrl+"/getMedicineById"+id);
  }
 
  updateMedicine(medicine:Medicine)
  {
return this.http.put(this.baseUrl+"/update_medicine" , medicine);
  }

  deleteMedicine(id:number)
{
return this.http.delete(this.baseUrl+"/delete_medicine/"+id);
}


}
