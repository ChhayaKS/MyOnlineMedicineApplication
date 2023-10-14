package org.capston.medicare.repository;

import org.capston.medicare.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepository  extends JpaRepository<Medicine, Long>{


}
