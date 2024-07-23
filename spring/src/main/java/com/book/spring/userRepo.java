package com.book.spring;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface userRepo extends  MongoRepository<userModel,String>{

}
