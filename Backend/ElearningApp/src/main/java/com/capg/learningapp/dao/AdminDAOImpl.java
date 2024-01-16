package com.capg.learningapp.dao;

import java.util.Optional;
import java.util.Random;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.learningapp.dto.AdminDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.exception.AdminNotFoundException;
import com.capg.learningapp.model.Admin;
import com.capg.learningapp.model.TimeTable;
import com.capg.learningapp.repository.AdminRepository;
import com.capg.learningapp.repository.TimeTableRepository;


@Service

public class AdminDAOImpl implements AdminDAO{
 
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private TimeTableRepository timeTableRepository;
 
	@Override
	public AdminDto registerAdmin(AdminDto adminDto) {
		Admin admin = new Admin();
		admin.setUsername(adminDto.getUsername());
		admin.setPassword(adminDto.getPassword());
 
		Admin savedAdmin = adminRepository.save(admin);
		return convertToDto(savedAdmin);
	}
 
	@Override
	public AdminDto login(String username, String password) throws AdminNotFoundException {
		Optional<Admin> adminOptional = adminRepository.findByUsername(username);
 
		if (adminOptional.isPresent()) {
			Admin admin = adminOptional.get();
			if (admin.getPassword().equals(password)) {
				return convertToDto(admin);
			} else {
				throw new AdminNotFoundException("Invalid password for username: " + username);
			}
		} else {
			throw new AdminNotFoundException("Admin not found with username: " + username);
		}
	}
 
	@Override
	public AdminDto forgotPassword(String userName) throws AdminNotFoundException {
		Optional<Admin> adminOptional = adminRepository.findByUsername(userName);
 
		if (adminOptional.isPresent()) {
			Admin admin = adminOptional.get();
 
			// Generate a random password (you should use a secure method for this)
			String newPassword = generateRandomPassword();
 
			// Update the admin's password
			admin.setPassword(newPassword);
			adminRepository.save(admin);
 
			// Send the new password to the user (in a real-world scenario, you would send a
			// reset email)
			System.out.println("New password for " + userName + ": " + newPassword);
 
			return convertToDto(admin);
		} else {
			throw new AdminNotFoundException("Admin not found with username: " + userName);
		}
	}
 
	private String generateRandomPassword() {
		// Implement a secure method to generate a random password
		// For simplicity, we're using a basic method here
		String allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
		int passwordLength = 12;
 
		StringBuilder password = new StringBuilder();
		Random random = new Random();
		for (int i = 0; i < passwordLength; i++) {
			int index = random.nextInt(allowedChars.length());
			password.append(allowedChars.charAt(index));
		}
 
		return password.toString();
	}
 
	@Override
	public AdminDto editProfile(Long adminId, AdminDto adminDto) throws AdminNotFoundException {
		Optional<Admin> adminOptional = adminRepository.findById(adminId);
 
		if (adminOptional.isPresent()) {
			Admin existingAdmin = adminOptional.get();
			existingAdmin.setUsername(adminDto.getUsername());
			existingAdmin.setPassword(adminDto.getPassword());
			// Update other fields as needed
			adminRepository.save(existingAdmin);
			return convertToDto(existingAdmin);
		} else {
			throw new AdminNotFoundException("Admin not found with ID: " + adminId);
		}
	}
 
	private AdminDto convertToDto(Admin admin) {
		AdminDto adminDto = new AdminDto();
		adminDto.setUsername(admin.getUsername());
		// Copy other fields as needed
		return adminDto;
	}

	@Override
	public TimeTableDto postTimeTable(TimeTableDto timeTableDto) {
		TimeTable timeTable=new TimeTable();
		BeanUtils.copyProperties(timeTableDto, timeTable);
		TimeTable createdTimeTable=timeTableRepository.save(timeTable);
		
		TimeTableDto createdTimeTableDto=new TimeTableDto();
		createdTimeTableDto.setId(createdTimeTable.getId());
		return createdTimeTableDto;
	}

	@Override
	public TimeTableDto removeTimeTable(Long id) {
		TimeTableDto timeTableDto=new TimeTableDto();
		timeTableRepository.deleteById(id);
		return timeTableDto;
	}
}            