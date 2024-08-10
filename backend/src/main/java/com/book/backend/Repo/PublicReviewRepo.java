package com.book.backend.Repo;

import com.book.backend.Models.PublicReview;
import jakarta.transaction.Transactional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PublicReviewRepo {
//    @Transactional
//    @Query("{'ratings.userid': ?0}")
//    List<PublicReview> getAllReviewById(String id);
}
