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
	@GetMapping("/get-book-page/{pgnum}")
	List<books>get(@PathVariable Integer pgnum ,@RequestBody String attributes,@RequestBody Boolean order){
		if(attributes==null){
			attributes="id";
		}
		Pageable pg;
		if(order) {
            pg= PageRequest.of(pgnum,9, Sort.by(attributes).ascending());
        } else {
            pg= PageRequest.of(pgnum,9, Sort.by(attributes).descending());
        }
		return s.getPage(pg);
	}

	@GetMapping("/get-book")
	List<books>get(){
		return s.getPage();
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
