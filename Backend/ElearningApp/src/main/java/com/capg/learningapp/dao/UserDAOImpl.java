package com.capg.learningapp.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.capg.learningapp.dto.SingleTimeTableDto;
import com.capg.learningapp.dto.TimeTableDto;
import com.capg.learningapp.dto.UserDto;
import com.capg.learningapp.exception.UserNotFoundException;
import com.capg.learningapp.model.TimeTable;
import com.capg.learningapp.model.User;
import com.capg.learningapp.repository.TimeTableRepository;
import com.capg.learningapp.repository.UserRepository;

@Service
public class UserDAOImpl implements UserDAO {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TimeTableRepository timeTableRepository;

    @Override
    public User addUser(UserDto userDto) {
        User newUser = new User();
        newUser.setName(userDto.getName());
        newUser.setUserName(userDto.getUserName());
        newUser.setEmailId(userDto.getEmailId());
        newUser.setMobileNumber(userDto.getMobileNumber());
        newUser.setUserPassword(userDto.getUserPassword());
        newUser.setAddress(userDto.getAddress());
        newUser.setLogoutMsg(userDto.getLogoutMsg());

        // Save the new user in the database
        return userRepository.save(newUser);
    }

    @Override
    @Transactional
    public User updateUser(int userId, UserDto userDto) throws UserNotFoundException {
        Optional<User> optional = userRepository.findById((long) userId);
        if (optional.isPresent()) {
            User existingUser = optional.get();
            existingUser.setName(userDto.getName());
            existingUser.setUserName(userDto.getUserName());
            existingUser.setEmailId(userDto.getEmailId());
            existingUser.setMobileNumber(userDto.getMobileNumber());
            existingUser.setUserPassword(userDto.getUserPassword());
            existingUser.setAddress(userDto.getAddress());
            userRepository.save(existingUser);
            
            return existingUser;
        } else {
            throw new UserNotFoundException("User id is invalid " + userId);
        }
    }

    @Override
    public User getUserByUsername(String username) throws UserNotFoundException {
        Optional<User> optionalUser = userRepository.findByUserName(username);
        if (!optionalUser.isPresent()) {
            throw new UserNotFoundException("User with username " + username + " not found");
        }
        return optionalUser.get();
    }

    @Override
    public String deleteUserByUsername(String username) throws UserNotFoundException {
        Optional<User> optionalUser = userRepository.findByUserName(username);
        if (!optionalUser.isPresent()) {
            throw new UserNotFoundException("User with username " + username + " not found");
        }

        User user = optionalUser.get();
        userRepository.delete(user);
        return "User with username " + username + " is successfully deleted";
    }

    @Override
    public List<User> showAllUsers() {
        List<User> users = userRepository.findAll();
        List<User> userModels = new ArrayList<>();
        for (User user : users) {
            userModels.add(user);
        }
        return userModels;
    }

    @Override
    public User getUserById(int customerId) throws UserNotFoundException {
        Optional<User> optionalProduct = userRepository.findById((long) customerId);
        if (!optionalProduct.isPresent())
            throw new UserNotFoundException("Customer id " + customerId + " is Invalid");
        return optionalProduct.get();
    }
    
    @Override
    public User authenticateUser(String username, String password) {
        Optional<User> userOptional = userRepository.findByUserNameAndUserPassword(username, password);
        
        if (userOptional.isPresent()) {
            // User found, return the authenticated user
            return userOptional.get();
        } else {
            // User not found, throw an exception
            throw new UserNotFoundException("User not found");
        }
    }

	@Override
	public List<TimeTableDto> getTimeTable() {
		return timeTableRepository.findAll().stream().map(TimeTable::getTimeTableDto).collect(Collectors.toList());

	}

	@Override
	public SingleTimeTableDto getTimeTableById(Long id) {
		Optional<TimeTable> optionalTimeTable=timeTableRepository.findById(id);
		if(optionalTimeTable.isPresent()) {
			SingleTimeTableDto singleDto =new SingleTimeTableDto();
			singleDto.setTimeTableDto(optionalTimeTable.get().getTimeTableDto());
			return singleDto;
		}
		return null;
	}
}


