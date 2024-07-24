package com.book.spring;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {
	@Autowired
	private userServ s;
	@PostMapping("/post/user")
	String post(@RequestBody userModel m) {
		return s.post(m);
	}
	

}
