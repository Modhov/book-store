package com.book.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Document("books")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String author;
    private String  name;
    private String  description;
    private Integer  price;
    private Integer  stock;
    private boolean  used;
    private List<String> genre;
    private Double  discount;
    private String binding ;
    private String publisher ;
    private String edition ;
    private String isbn;
    private Integer sold;
    private List<PublicReview> ratings;
    private List<String> imageIds;
    private String language;
}
