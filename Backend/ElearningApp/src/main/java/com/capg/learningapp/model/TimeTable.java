package com.capg.learningapp.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.capg.learningapp.dto.TimeTableDto;
import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity


public class TimeTable {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String subject;
	 @NotNull(message = "Date is required")
	private Date date;
	private String day;
	private String duration;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public TimeTableDto getTimeTableDto() {
		TimeTableDto timeTableDto=new TimeTableDto();
		timeTableDto.setId(id);
		timeTableDto.setDate(date);
		timeTableDto.setDay(day);
		timeTableDto.setSubject(subject);
		timeTableDto.setDuration(duration);
		
		return timeTableDto;
	}

}
