package com.book.spring;

import java.util.List;

import jakarta.transaction.Transactional;
import org.springframework.data.mongodb.repository.Query;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface bookRepo extends MongoRepository<books, String> {

	@Transactional
	@Query("{$or :[{author: {$regex: ?0, $options: 'i'}},{id: {$regex: ?0, $options: 'i'}},{name: {$regex: ?0, $options: 'i'}},{'genre': {$regex: ?0, $options: 'i'}},{'binding': {$regex: ?0, $options: 'i'}},{'publisher': {$regex: ?0, $options: 'i'}},{'isbn': {$regex: ?0, $options: 'i'}}]}")
	public List<books> searchBooks(String word);
@Query("")
	List<books> getbestseller();
}
