package com.capg.learningapp.dto;

public class UserDto {
	
	private long userId;

    private String name;

    private String userName;

    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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
	
	

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}



	private String mobileNumber;

    private String userPassword;

    private String address;

    private String emailId;

    private String logoutMsg;

   // private List<BillDto> bills;  // Assuming BillDto is your Bill Data Transfer Object

    // Constructors, getters, and setters

    public UserDto() {
    }

    public UserDto(String name, String userName, String mobileNumber, String userPassword, String address,
                   String emailId, String logoutMsg) {
        this.name = name;
        this.userName = userName;
        this.mobileNumber = mobileNumber;
        this.userPassword = userPassword;
        this.address = address;
        this.emailId = emailId;
        this.logoutMsg = logoutMsg;
        //this.bills = bills;
    }

	public void setUserID(long userId) {
		// TODO Auto-generated method stub
		
	}

    // Other getters and setters...
//
//    public List<BillDto> getBills() {
//        return bills;
//    }
//
//    public void setBills(List<BillDto> bills) {
//        this.bills = bills;
//    }
}
