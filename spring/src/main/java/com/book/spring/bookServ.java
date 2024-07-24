package com.book.spring;

import java.util.List;

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

	public List<books> get() {
		return r.findAll();
	}
	public books put(String id,books b) {
		b.setId(id);
		r.deleteById(id);
		r.save(b);
		return b;
	}

	public String delete(String id) {
		r.deleteById(id);
		return "del sucess";
	}

	public List<books> filter(String word) {
		List<books> a= r.filter(word);
		if(a!=null)
			return a;
		else
			return null;
	}
}
