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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capg.learningapp.dto.AdminDto;
import com.capg.learningapp.dto.AdminLoginRequestDto;
import com.capg.learningapp.dto.AdminResponseDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.dto.UserDto;
import com.capg.learningapp.exception.AdminNotFoundException;
import com.capg.learningapp.exception.UserNotFoundException;
import com.capg.learningapp.model.User;
import com.capg.learningapp.service.AdminService;
import com.capg.learningapp.service.UserService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")

public class AdminController {
 
	@Autowired
	private AdminService adminService;
	
	
 
	@PostMapping("/register")
	public ResponseEntity<AdminDto> registerAdmin(@RequestBody AdminDto adminDto) {
		AdminDto registeredAdmin = adminService.registerAdmin(adminDto);
		return new ResponseEntity<>(registeredAdmin, HttpStatus.CREATED);
	}
 
	@PostMapping("/login")
    public ResponseEntity<AdminResponseDto> login(@RequestBody AdminLoginRequestDto request) {
        try {
            AdminDto adminDto = adminService.login(request.getUsername(), request.getPassword());
            AdminResponseDto response = convertToResponseDto(adminDto);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (AdminNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
	@PostMapping("/forgot-password")
	public ResponseEntity<String> forgotPassword(@RequestParam String username) {
		try {
			adminService.forgotPassword(username);
			return new ResponseEntity<>("Password reset initiated. Check your email for the new password.",
					HttpStatus.OK);
		} catch (AdminNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
 
	@PutMapping("/edit-profile/{adminId}")
	public ResponseEntity<AdminDto> editProfile(@PathVariable Long adminId, @RequestBody AdminDto adminDto) {
		try {
			AdminDto updatedAdmin = adminService.editProfile(adminId, adminDto);
			return new ResponseEntity<>(updatedAdmin, HttpStatus.OK);
		} catch (AdminNotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@Autowired
	private UserService userService;

    @PostMapping("/addUserByAdmin")
    public ResponseEntity<User> addUserByAdmin(@RequestBody UserDto userDto) {
        User newUser = userService.addUser(userDto);
        return ResponseEntity.ok(newUser);
    }

    @PutMapping("/updateUserByAdmin/{id}")
    public ResponseEntity<User> updateUserByAdmin(@PathVariable int id, @RequestBody UserDto userDto) {
        try {
            User updatedUser = userService.updateUser(id, userDto);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/viewUserByUsername/{username}")
    public ResponseEntity<User> viewUserByUsername(@PathVariable String username) {
        try {
            User user = userService.getUserByUsername(username);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteUserByUsername/{username}")
    public ResponseEntity<String> deleteUserByUsername(@PathVariable String username) {
        try {
            String result = userService.deleteUserByUsername(username);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/viewAllUsers")
    public ResponseEntity<List<User>> viewAllUsers() {
        List<User> users = userService.showAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/viewUserById/{id}")
    public ResponseEntity<User> viewUserById(@PathVariable int id) {
        try {
            User user = userService.getUserById(id);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    private AdminResponseDto convertToResponseDto(AdminDto adminDto) {
        AdminResponseDto response = new AdminResponseDto();
        response.setUsername(adminDto.getUsername());
        response.setPassword(adminDto.getPassword());

        return response;
    }
    @PostMapping("/timetable")
    public ResponseEntity<?> postTimeTable(@Valid @RequestBody TimeTableDto timeTableDto)
    {
    	TimeTableDto  createdTimeTableDto=adminService.postTimeTable(timeTableDto);
    	if(createdTimeTableDto==null)
    	{
    		return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
    	}
    	return ResponseEntity.status(HttpStatus.CREATED).body(createdTimeTableDto);
    }
    @DeleteMapping("/timetable/{id}")
	public ResponseEntity<TimeTableDto> deleteStudent(@PathVariable Long id){
		adminService.removeTimeTable(id);
		return ResponseEntity.noContent().build();
	}
 
}


