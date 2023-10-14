package org.capston.medicare.controller;

import java.util.List;

import org.capston.medicare.entity.Medicine;
import org.capston.medicare.exception.MedicineNotFoundException;
import org.capston.medicare.service.MedicineService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/medicines")
@CrossOrigin("http://localhost:4200")
public class MedicineController {

	public static String uploadDir = "medicine-imageName";

	private MedicineService medicineService;
	public MedicineController(MedicineService medicineService) {
		super();
		this.medicineService = medicineService;
	}

	@PostMapping("/add_medicine" )
	public Medicine addMedicine(@RequestBody Medicine m)
	{
        return medicineService.insertMedicine(m);
		
	}

	@GetMapping("/getAll_medicine")
	public List<Medicine> getAllMedicines() {
		return medicineService.getMedicines();
	}

	@GetMapping("/getMedicineById")
	public Medicine getMedicineById(@PathVariable("id") long id) throws MedicineNotFoundException {
		return medicineService.getMedicineById(id);

	}

	@DeleteMapping("/delete_medicine/{id}")
	public String deleteMedicine(@PathVariable("id") long id) {
		return medicineService.deleteMedicine(id);

	}
	
	@PutMapping("/update_medicine")
	public String updateMedicine(@RequestBody Medicine m) throws MedicineNotFoundException
	{
		return medicineService.updateMedicine( m);
	}
	
	@GetMapping("/get-sorted-product")
	public List<Medicine> getSortedProducts(){
		return medicineService.getSortedMedicine();
	}
     


}
