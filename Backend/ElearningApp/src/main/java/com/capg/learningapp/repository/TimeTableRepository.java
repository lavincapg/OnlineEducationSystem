package com.capg.learningapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capg.learningapp.model.TimeTable;

public interface TimeTableRepository extends JpaRepository<TimeTable, Long> {

}
