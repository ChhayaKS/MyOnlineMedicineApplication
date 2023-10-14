package org.capston.medicare.service;

import java.util.List;

import org.capston.medicare.entity.Admin;
import org.capston.medicare.repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

	private AdminRepository adminRepository;

	public AdminService(AdminRepository adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	public String addAdmin(Admin admin) {
		Admin admin2 = new Admin();
		admin2.setEmail(admin.getEmail());
		admin2.setPassword(admin.getPassword());
		adminRepository.save(admin2);
		return "New Admin Saved";

	}

	public List<Admin> getAllAdmin() {
		return adminRepository.findAll();
	}

}
