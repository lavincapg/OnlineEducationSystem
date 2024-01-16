package com.capg.learningapp.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.learningapp.exception.UserNotFoundException;
import com.capg.learningapp.model.User;
import com.capg.learningapp.repository.UserRepository;

@Service

public class UserLogDAOImpl implements UserLogDAO {
	@Autowired
	private UserRepository userRepo;
	
	
	
	public User logInCustomer(String userName, String password) {
		return userRepo.findByUserNameAndUserPassword(userName, password)
				.orElseThrow(() -> new UserNotFoundException("User not available"));
	}
	
	@Override
	public User logOutCustomer(String logoutMsg) {
        // Fetching the current logged-in customer is a simplified representation here. 
        User currentUser = userRepo.findById((long) 1).orElse(null); // Assuming ID is 1 for the current customer.

        if ("yes".equalsIgnoreCase(logoutMsg) && currentUser != null) {
            currentUser.setLogoutMsg("Logged out successfully");
            userRepo.save(currentUser);
        }

        return currentUser;
    }
	
}
