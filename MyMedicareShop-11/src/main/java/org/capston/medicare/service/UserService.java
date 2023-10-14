package org.capston.medicare.service;

import java.util.List;

import org.capston.medicare.entity.User;
import org.capston.medicare.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public User addUser(User user) {
		User users = new User();
		users.setId(user.getId());
		users.setFullname(user.getFullname());
		users.setEmail(user.getEmail());
		users.setPassword(user.getPassword());
		return userRepository.save(users);
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUserById(long id) {
		return userRepository.findById(id).get();
	}

	public User updateUser(User user) {
		User user1 = new User();
		user1.setId(user.getId());
		user1.setFullname(user.getFullname());
		user1.setEmail(user.getEmail());
		user1.setPassword(user.getPassword());
		return userRepository.save(user1);
	}

	public String deleteUser(Long id) {
		userRepository.deleteById(id);
		return "User Deleted Successfully";
	}
}
