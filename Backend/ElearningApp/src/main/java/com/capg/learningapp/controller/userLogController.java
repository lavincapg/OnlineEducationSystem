package com.capg.learningapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capg.learningapp.exception.UserNotFoundException;
import com.capg.learningapp.model.User;
import com.capg.learningapp.service.UserLogService;
import com.capg.learningapp.service.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class userLogController {
	
	@Autowired
	private UserService userServ;
	
	@Autowired
	private UserLogService userlogServ;
	
	@PostMapping("/customer")
    public ResponseEntity<String> registerCustomer(@RequestParam String userName, @RequestParam String password) {
        try {
        	userlogServ.logInCustomer(userName, password);
            return ResponseEntity.ok("Logged in successfully");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
	
	@GetMapping("/customer/logout/{logoutMsg}")
    public String handleLogout(@PathVariable String logoutMsg) {
        User customer = userlogServ.logOutCustomer(logoutMsg);
        if ("yes".equalsIgnoreCase(logoutMsg) && customer != null && "Logged out successfully".equals(customer.getLogoutMsg())) {
            return "Logged out successfully";
        }
        return "Failed to logout";
    }

}
