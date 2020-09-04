package com.rest.services;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	@GetMapping(path="/helloWorld")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path="/helloBean")
	public HelloWorldBean helloWorldBean() {
		
		return new HelloWorldBean("Hi there Alex!");
	}
	
	@GetMapping(path="/helloWorldVar/{name}")
	public HelloWorldBean helloWorldVar(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong");
		return new HelloWorldBean(String.format("Hello World Jei %s", name));
	}

}
