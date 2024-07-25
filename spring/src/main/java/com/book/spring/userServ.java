package com.book.spring;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class userServ {
	@Autowired
	private userRepo r;

	public String post(userModel m) {
		r.save(m);
		return "Sucess user upload";
	}

	public List<userModel> get() {
		return r.findAll();
	}
}
