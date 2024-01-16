package com.capg.learningapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.learningapp.dao.UserDAO;
import com.capg.learningapp.dto.SingleTimeTableDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.dto.UserDto;
import com.capg.learningapp.exception.UserNotFoundException;
import com.capg.learningapp.model.User;

@Service

public class UserServiceImpl implements UserService {
	@Autowired
	private UserDAO userDAO;

	@Override
	public User updateUser(int userId, UserDto userDto) throws UserNotFoundException {
		// TODO Auto-generated method stub
		return userDAO.updateUser(userId, userDto);
	}

	@Override
	public List<User> showAllUsers() {
		// TODO Auto-generated method stub
		return userDAO.showAllUsers();
	}

	@Override
	public User getUserById(int userId) throws UserNotFoundException {
		// TODO Auto-generated method stub
		return userDAO.getUserById(userId);
	}

	@Override
	public String deleteUserByUsername(String username) throws UserNotFoundException {
		// TODO Auto-generated method stub
		return userDAO.deleteUserByUsername(username);
	}

	@Override
	public User getUserByUsername(String username) throws UserNotFoundException {
		// TODO Auto-generated method stub
		return userDAO.getUserByUsername(username);
	}

	@Override
	public User addUser(UserDto userDto) {
		// TODO Auto-generated method stub
		return userDAO.addUser(userDto);
	}

	@Override
	public User authenticateUser(String userName, String password) {
		// TODO Auto-generated method stub
		return userDAO.authenticateUser(userName, password);
	}

	@Override
	public List<TimeTableDto> getTimeTable() {
		// TODO Auto-generated method stub
		return userDAO.getTimeTable();
	}

	@Override
	public SingleTimeTableDto getTimeTableById(Long id) {
		// TODO Auto-generated method stub
		return userDAO.getTimeTableById(id);
	}

	

}
