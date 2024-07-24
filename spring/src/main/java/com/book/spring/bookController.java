package com.book.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class bookController {
	@Autowired
	private bookServ s;
	
	@PostMapping("/post/book")
	String post(@RequestBody books b) {
		return s.post(b);
	}
	

}
