package com.capg.learningapp.service;

import com.capg.learningapp.model.User;

public interface UserLogService {
	public User logInCustomer(String userName, String password);
	public User logOutCustomer(String logoutMsg);

}
