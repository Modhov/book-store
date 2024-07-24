package com.book.spring;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImgRepo extends MongoRepository<Img,String>{

}
