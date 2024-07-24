package com.book.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class bookServ {
	@Autowired
	private bookRepo r;

	public String post(books b) {
		r.save(b);
		return "sucess";
	}
}
