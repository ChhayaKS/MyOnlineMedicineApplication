package org.capston.medicare.service;

import java.util.List;

import org.capston.medicare.entity.Medicine;
import org.capston.medicare.exception.MedicineNotFoundException;
import org.capston.medicare.repository.MedicineRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class MedicineService {

	private MedicineRepository medicineRepository;

	public MedicineService(MedicineRepository medicineRepository) {
		super();
		this.medicineRepository = medicineRepository;
	}

	public Medicine insertMedicine(Medicine m) {
		Medicine medicine=new Medicine();
		medicine.setName(m.getName());
		medicine.setPrice(m.getPrice());
		medicine.setImageName(m.getImageName());
		medicine.setCategory(m.getCategory());
		return medicineRepository.save(medicine);

	}

	public List<Medicine> getMedicines() {
		return medicineRepository.findAll();
	}
	
	public List<Medicine> getSortedMedicine(){
		return medicineRepository.findAll(Sort.by("category"));
	}

	public Medicine getMedicineById(Long id) throws MedicineNotFoundException {

		return  medicineRepository.findById(id).get();

	}

	public String deleteMedicine(Long id) {
		medicineRepository.deleteById(id);
		return "Medicine Deleted by Id ";

	}

	public String updateMedicine(Medicine m) throws MedicineNotFoundException {
		Medicine me=new Medicine();
		me.setId(m.getId());
		me.setName(m.getName());
		me.setPrice(m.getPrice());
		me.setImageName(m.getImageName());
		me.setCategory(m.getCategory());
		medicineRepository.save(me);
		return "Data Updated";

	}

}
