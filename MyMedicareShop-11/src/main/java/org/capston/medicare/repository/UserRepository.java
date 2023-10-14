package org.capston.medicare.repository;

import org.capston.medicare.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Long>{

}
