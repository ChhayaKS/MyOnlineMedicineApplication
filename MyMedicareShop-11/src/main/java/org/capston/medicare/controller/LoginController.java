package org.capston.medicare.controller;

import java.util.List;

import org.capston.medicare.entity.Admin;
import org.capston.medicare.entity.User;
import org.capston.medicare.service.AdminService;
import org.capston.medicare.service.UserService;
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
@RequestMapping("/welcome")
@CrossOrigin("http://localhost:4200")
public class LoginController {
	private AdminService adminService;
	private UserService userService;
	public LoginController(AdminService adminService, UserService userService) {
		super();
		this.adminService = adminService;
		this.userService = userService;
	}

	// Admin
	@PostMapping("/add_admin")
	public String addAdmin(@RequestBody Admin admin) {
		return adminService.addAdmin(admin);
	}

	@GetMapping("/getAll_admin")
	public List<Admin> getAllAdmin() {
		return adminService.getAllAdmin();

	}

	
	//User
	@PostMapping("/add_user")
	public User addUser(@RequestBody User user)
	{
		return userService.addUser(user);
	}
	
	@GetMapping("/getAll_user")
	public List<User> getAllUser(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/getuser/{id}")
	public User getUserById(@PathVariable long id)
	{
		return userService.getUserById(id);
	}
	 
	@PutMapping("/update_user")
	public User updateUser(@RequestBody User user)
	{
		return userService.updateUser(user);
	}
	
	@DeleteMapping("/delete_user/{id}")
	public String deleteUser(@PathVariable("id")Long id)
	{
		return userService.deleteUser(id);
		
	}
	
}
