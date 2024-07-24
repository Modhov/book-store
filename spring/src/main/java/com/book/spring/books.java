package com.book.spring;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="books")
public class books {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;
	private publicReview publicReview;
	private String author;
	private String  name;
	private String  description;
	private Integer  price;
	private Integer  stock;
	private boolean  used;
	private String  genre;
	private Double  discount;
	private String binding ;
	private String publisher ;
	private String edition ;
	private String isbn;
	List<publicReview>ratings;
	List<String>languages;
	List<String>free;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public publicReview getPublicReview() {
		return publicReview;
	}

	public void setPublicReview(publicReview publicReview) {
		this.publicReview = publicReview;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}

	public boolean isUsed() {
		return used;
	}

	public void setUsed(boolean used) {
		this.used = used;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public String getBinding() {
		return binding;
	}

	public void setBinding(String binding) {
		this.binding = binding;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getEdition() {
		return edition;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public List<publicReview> getRatings() {
		return ratings;
	}

	public void setRatings(List<publicReview> ratings) {
		this.ratings = ratings;
	}

	public List<String> getLanguages() {
		return languages;
	}

	public void setLanguages(List<String> languages) {
		this.languages = languages;
	}

	public List<String> getFree() {
		return free;
	}

	public void setFree(List<String> free) {
		this.free = free;
	}
}
