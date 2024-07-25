package com.book.spring;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
public class bookController {
	@Autowired
	private bookServ s;
	
	@PostMapping("/post-book")
	String post(@RequestBody books b) {
		return s.post(b);
	}
	@GetMapping("/get-book")
	List<books>get(){
		Pageable pg= PageRequest.of(0,9, Sort.by("id"));
		return s.get(pg);
	}
	@PutMapping("/put-book/{id}")
	books put(@PathVariable String id, @RequestBody books b) {
		return s.put(id,b);
	}
	@DeleteMapping("/delete/{id}")
	String delete(@PathVariable String id) {
		return s.delete(id);
	}
	@GetMapping("/filter-book/{word}")
	List<books> filter(@PathVariable String word){
		return s.filter(word);
	}
	
	

}
