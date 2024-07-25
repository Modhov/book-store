package com.book.spring;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class bookServ {
	@Autowired
	private bookRepo r;

	public String post(books b) {
		r.save(b);
		return "sucess";
	}

	public List<books> getPage(Pageable pg) {
		List<books> arr = r.findAll(pg).toList();
		return arr;
	}

	public books put(String id, books b) {
		b.setId(id);
		r.deleteById(id);
		r.save(b);
		return b;
	}

	public String delete(String id) {
		r.deleteById(id);
		return "del sucess";
	}

	public List<books> searchBooks(String word) {
		List<books> a = r.searchBooks(word);
		if (a != null)
			return a;
		else
			return null;
	}

	public List<books> getPage() {
		return r.findAll();
	}
}
