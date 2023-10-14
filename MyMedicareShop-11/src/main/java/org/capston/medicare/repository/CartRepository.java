package org.capston.medicare.repository;

import java.util.List;

import org.capston.medicare.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository  extends JpaRepository<Cart, Long>{

	List<Cart> findAllByUserId(Long id);

}
