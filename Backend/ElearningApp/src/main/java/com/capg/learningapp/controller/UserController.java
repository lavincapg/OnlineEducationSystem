package com.capg.learningapp.controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.learningapp.dto.LoginRequest;
import com.capg.learningapp.dto.SingleTimeTableDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.dto.UserDto;
import com.capg.learningapp.exception.UserNotFoundException;
import com.capg.learningapp.model.User;
import com.capg.learningapp.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody UserDto userDto) {
        User savedUser = userService.addUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
   
    
    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody UserDto userDto) throws UserNotFoundException {
        User updatedUser = userService.updateUser(id, userDto);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @GetMapping("/viewUserByUsername/{username}")
    public ResponseEntity<User> showUserByUsername(@PathVariable String username) throws UserNotFoundException {
        User user = userService.getUserByUsername(username);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/deleteUserByUsername/{username}")
    public ResponseEntity<String> deleteCustomerByUsername(@PathVariable String username) throws UserNotFoundException {
        String result = userService.deleteUserByUsername(username);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/viewAllUsers")
    public ResponseEntity<List<User>> showAllUsers() {
        List<User> users = userService.showAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/viewUserById/{id}")
    public ResponseEntity<User> showUserById(@PathVariable int id) throws UserNotFoundException {
        User user = userService.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    
    @PostMapping("/authenticate")
    public ResponseEntity<UserDto> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        User user = userService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());
        UserDto userDto = convertUserToDto(user);
        return ResponseEntity.ok(userDto);
    }

    private UserDto convertUserToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setUserName(user.getUserName());
        userDto.setName(user.getName());
        userDto.setEmailId(user.getEmailId());
        userDto.setMobileNumber(user.getMobileNumber());
        userDto.setAddress(user.getAddress());
        userDto.setLogoutMsg(user.getLogoutMsg());
        return userDto;
    }
    @GetMapping("/timetable/{id}")
	public ResponseEntity<SingleTimeTableDto> getTimeTableById(@PathVariable Long id){
		SingleTimeTableDto singleTimeTableDto=userService.getTimeTableById(id);
		if(singleTimeTableDto==null)
		{
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(singleTimeTableDto);
	}
    @GetMapping("/timetable")
    public ResponseEntity<List<TimeTableDto>> getTimeTable(){
    	List<TimeTableDto> allTimeTable=userService.getTimeTable();
    	return ResponseEntity.ok(allTimeTable);
    }
}
