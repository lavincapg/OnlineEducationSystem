package com.capg.learningapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.learningapp.dao.AdminDAO;
import com.capg.learningapp.dto.AdminDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.exception.AdminNotFoundException;
@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminDAO adminDAO;
	
	@Override
	public AdminDto login(String username, String password) throws AdminNotFoundException {
		// TODO Auto-generated method stub
		return adminDAO.login(username, password);
	}

	@Override
	public AdminDto forgotPassword(String userName) throws AdminNotFoundException {
		// TODO Auto-generated method stub
		return adminDAO.forgotPassword(userName);
	}

	@Override
	public AdminDto editProfile(Long adminId, AdminDto adminDto) throws AdminNotFoundException {
		// TODO Auto-generated method stub
		return adminDAO.editProfile(adminId, adminDto);
	}

	@Override
	public AdminDto registerAdmin(AdminDto adminDto) throws AdminNotFoundException {
		// TODO Auto-generated method stub
	return adminDAO.registerAdmin(adminDto);
	}

	@Override
	public TimeTableDto postTimeTable(TimeTableDto timeTableDto) {
		// TODO Auto-generated method stub
		return adminDAO.postTimeTable(timeTableDto);
	}

	@Override
	public TimeTableDto removeTimeTable(Long id) {
		// TODO Auto-generated method stub
		return adminDAO.removeTimeTable(id);
		
	}

	

}
