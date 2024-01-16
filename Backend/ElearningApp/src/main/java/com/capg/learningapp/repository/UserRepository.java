package com.capg.learningapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capg.learningapp.dto.UserDto;
import com.capg.learningapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserName(String userName);

    Optional<User> findByUserNameAndUserPassword(String userName, String userPassword); // Update the method name

	User save(UserDto newUser);

//	Optional<Bill> findByUsername(String username);
}
