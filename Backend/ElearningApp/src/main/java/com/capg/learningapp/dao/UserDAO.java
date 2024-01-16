package com.capg.learningapp.dao;

import java.util.List;

import com.capg.learningapp.dto.SingleTimeTableDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.dto.UserDto;
import com.capg.learningapp.exception.UserNotFoundException;
import com.capg.learningapp.model.User;

public interface UserDAO {
	User updateUser(int userId, UserDto userDto) throws UserNotFoundException;

    List<User> showAllUsers();

    User getUserById(int userId) throws UserNotFoundException;

	String deleteUserByUsername(String username) throws UserNotFoundException;

	User getUserByUsername(String username) throws UserNotFoundException;
	
	User addUser(UserDto userDto);
	
	User authenticateUser(String userName, String password);
	 List<TimeTableDto> getTimeTable();
	 SingleTimeTableDto getTimeTableById(Long id);
}
