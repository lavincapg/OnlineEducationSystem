package com.capg.learningapp.dao;

import com.capg.learningapp.dto.AdminDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.exception.AdminNotFoundException;

public interface AdminDAO {
	AdminDto login(String username, String password) throws AdminNotFoundException;
 
	AdminDto forgotPassword(String userName) throws AdminNotFoundException;
 
	AdminDto editProfile(Long adminId, AdminDto adminDto) throws AdminNotFoundException;
	// Other methods
 
	AdminDto registerAdmin(AdminDto adminDto) throws AdminNotFoundException;
	 TimeTableDto postTimeTable(TimeTableDto timeTableDto);

	TimeTableDto removeTimeTable(Long id);
}    
