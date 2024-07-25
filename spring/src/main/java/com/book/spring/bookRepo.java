package com.book.spring;

import java.util.List;

import jakarta.transaction.Transactional;
import org.springframework.data.mongodb.repository.Query;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface bookRepo extends MongoRepository<books, String> {

	@Transactional
	@Query("{$or :[{author: ?0},{id: ?0},{'genre': ?0},{'binding': ?0},{'publisher': ?0},{'isbn': ?0},{'languages': ?0}]}")
	public List<books> searchBooks(String word);

}
