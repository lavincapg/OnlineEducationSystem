package com.capg.learningapp.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.List;

@Entity
@Table(name="users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long userId;

    @NotBlank(message = "Name is required")
    private String name;

    private String mobileNumber;

    private String userPassword;

    @NotBlank(message = "Address is required")
    private String address;

    @NotBlank(message = "Username is required")
    @Column(unique = true)
    private String userName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String emailId;

    private String logoutMsg;

    

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getLogoutMsg() {
		return logoutMsg;
	}

	public void setLogoutMsg(String logoutMsg) {
		this.logoutMsg = logoutMsg;
	}



    
}
