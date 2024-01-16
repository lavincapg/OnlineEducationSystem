package com.capg.learningapp.dao;

import com.capg.learningapp.model.User;

public interface UserLogDAO {
	public User logInCustomer(String userName, String password);
	public User logOutCustomer(String logoutMsg);

}
