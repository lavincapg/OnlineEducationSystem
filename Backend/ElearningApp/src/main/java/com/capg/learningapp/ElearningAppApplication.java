package com.capg.learningapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // @SpringBootAppliction is entry point for the application
//combination of @configuration,@EnableAutoConfiguration,@ComponentScan
public class ElearningAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElearningAppApplication.class, args);// called to start spring boot application
		System.out.println("started.............");

	}
}
 	